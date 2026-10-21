import test, { after, before } from 'node:test';
import assert from 'node:assert/strict';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import { chromium } from 'playwright';

// Minimal mock trace content
const sampleTrace = JSON.stringify({
  traceEvents: [
    {
      cat: 'disabled-by-default-devtools.timeline',
      name: 'TracingStartedInBrowser',
      ph: 'I',
      pid: 1,
      tid: 1,
      ts: 100,
      args: { data: { frames: [] } }
    }
  ]
});

const sampleTraceGz = zlib.gzipSync(Buffer.from(sampleTrace));

function createServer() {
  return http.createServer((req, res) => {
    const url = new URL(req.url, 'http://localhost');
    let pathname = url.pathname;

    // Fast-path stub for devtools frontend iframe to avoid fetching 130+ bundled files during test
    if (pathname.includes('trace_app.html')) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end('<!doctype html><title>DevTools Stub</title>');
      return;
    }

    let filePath;
    if (pathname.startsWith('/viewonly') || pathname.startsWith('/view')) {
      filePath = 'dist/viewonly.html';
    } else if (pathname === '/' || pathname.startsWith('/t/')) {
      filePath = 'dist/index.html';
    } else {
      filePath = path.join('dist', pathname);
    }

    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
        return;
      }
      let contentType = 'text/html';
      if (filePath.endsWith('.js')) {
        contentType = 'application/javascript';
      } else if (filePath.endsWith('.css')) {
        contentType = 'text/css';
      } else if (filePath.endsWith('.json')) {
        contentType = 'application/json';
      }
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    });
  });
}

/**
 * Creates a page with pageerror collection and Firebase Storage mock.
 * @param {import('playwright').Browser} browser
 * @param {string} url
 */
async function openTestPage(browser, url) {
  const page = await browser.newPage();
  const pageErrors = [];
  page.on('pageerror', err => pageErrors.push(err));

  /** @type {Array<{method: string, url: string, postData: string | null}>} */
  const uploadedFiles = [];

  // Mock Firebase Storage upload and download APIs
  await page.route('**/*firebasestorage.googleapis.com/**', async route => {
    const req = route.request();
    const reqUrl = new URL(req.url());

    if (req.method() === 'POST') {
      const traceName = reqUrl.searchParams.get('name') ?? 'traces/mocktrace1';
      uploadedFiles.push({
        method: req.method(),
        url: req.url(),
        postData: req.postData(),
      });

      await route.fulfill({
        status: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Expose-Headers': 'X-Goog-Upload-URL, X-Goog-Upload-Status, X-Goog-Upload-Chunk-Granularity',
          'X-Goog-Upload-Status': 'final',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: traceName,
          bucket: 'trace-uploading-maybe.appspot.com',
          generation: '1',
          timeCreated: new Date().toISOString(),
          downloadTokens: 'mock-token',
        }),
      });
      return;
    }

    if (req.method() === 'GET') {
      await route.fulfill({
        status: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'traces/mocktrace1',
          bucket: 'trace-uploading-maybe.appspot.com',
          generation: '1',
          timeCreated: new Date().toISOString(),
          downloadTokens: 'mock-token',
          metadata: { oName: 'mock-trace' },
        }),
      });
      return;
    }

    await route.continue();
  });

  await page.goto(url, { waitUntil: 'domcontentloaded' });
  return { page, pageErrors, uploadedFiles };
}

test('trace.cafe ingestion & viewer test suite', async t => {
  const server = createServer();
  const port = await new Promise(resolve => {
    server.listen(0, '127.0.0.1', () => resolve(server.address().port));
  });
  const baseUrl = `http://127.0.0.1:${port}`;
  const browser = await chromium.launch();

  after(async () => {
    await browser.close();
    server.close();
  });

  // --- viewonly.html tests ---

  await t.test('viewonly: postMessage VIEW', async () => {
    const { page, pageErrors } = await openTestPage(browser, `${baseUrl}/viewonly`);

    const postMessagePromise = page.evaluate(() => {
      return new Promise(resolve => {
        window.addEventListener('message', e => {
          if (e.data?.msg === 'UPLOADCOMPLETE') resolve(true);
        });
      });
    });

    await page.evaluate(trace => {
      window.postMessage({ msg: 'VIEW', data: trace }, '*');
    }, sampleTrace);

    const msgReceived = await postMessagePromise;
    assert.equal(msgReceived, true);

    const isViewing = await page.evaluate(() => document.documentElement.classList.contains('state--viewing'));
    assert.equal(isViewing, true);

    const iframeSrc = await page.locator('iframe#ifr-dt').getAttribute('src');
    assert.ok(iframeSrc?.includes('trace_app.html'));
    assert.deepEqual(pageErrors, []);
    await page.close();
  });

  await t.test('viewonly: clipboard paste', async () => {
    const { page, pageErrors } = await openTestPage(browser, `${baseUrl}/viewonly`);

    await page.evaluate(trace => {
      const dataTransfer = new DataTransfer();
      dataTransfer.setData('text/plain', trace);
      document.body.dispatchEvent(new ClipboardEvent('paste', {
        clipboardData: dataTransfer,
        bubbles: true,
        cancelable: true,
      }));
    }, sampleTrace);

    await page.waitForFunction(() => document.documentElement.classList.contains('state--viewing'));
    const iframeSrc = await page.locator('iframe#ifr-dt').getAttribute('src');
    assert.ok(iframeSrc?.includes('trace_app.html'));
    assert.deepEqual(pageErrors, []);
    await page.close();
  });

  await t.test('viewonly: file input (.json.gz)', async () => {
    const { page, pageErrors } = await openTestPage(browser, `${baseUrl}/viewonly`);

    await page.setInputFiles('input#fileinput', {
      name: 'trace.json.gz',
      mimeType: 'application/x-gzip',
      buffer: sampleTraceGz,
    });

    await page.waitForFunction(() => document.documentElement.classList.contains('state--viewing'));
    const iframeSrc = await page.locator('iframe#ifr-dt').getAttribute('src');
    assert.ok(iframeSrc?.includes('trace_app.html'));
    assert.deepEqual(pageErrors, []);
    await page.close();
  });

  // --- index.html (app.js) tests ---

  await t.test('app: file input (.json.gz)', async () => {
    const { page, pageErrors, uploadedFiles } = await openTestPage(browser, baseUrl);

    await page.setInputFiles('input#fileinput', {
      name: 'paulet.json.gz',
      mimeType: 'application/x-gzip',
      buffer: sampleTraceGz,
    });

    // Wait for upload to initiate and navigate to /t/<traceId>
    await page.waitForURL(url => url.pathname.startsWith('/t/'), { timeout: 5000 });
    await page.waitForFunction(() => document.documentElement.classList.contains('state--viewing'));

    assert.equal(uploadedFiles.length, 1);
    assert.ok(uploadedFiles[0].postData?.includes('"contentEncoding":"gzip"'));
    assert.ok(uploadedFiles[0].postData?.includes('"oName":"paulet.json.gz"'));

    const iframeSrc = await page.locator('iframe#ifr-dt').getAttribute('src');
    assert.ok(iframeSrc?.includes('trace_app.html?traceURL='));
    assert.deepEqual(pageErrors, []);
    await page.close();
  });

  await t.test('app: drag-and-drop (.json)', async () => {
    const { page, pageErrors, uploadedFiles } = await openTestPage(browser, baseUrl);

    await page.evaluate(trace => {
      const dt = new DataTransfer();
      const file = new File([trace], 'trace.json', { type: 'application/json' });
      dt.items.add(file);
      document.body.dispatchEvent(new DragEvent('drop', {
        dataTransfer: dt,
        bubbles: true,
        cancelable: true,
      }));
    }, sampleTrace);

    await page.waitForURL(url => url.pathname.startsWith('/t/'), { timeout: 5000 });
    await page.waitForFunction(() => document.documentElement.classList.contains('state--viewing'));

    assert.equal(uploadedFiles.length, 1);
    assert.ok(uploadedFiles[0].postData?.includes('"oName":"trace.json"'));

    const iframeSrc = await page.locator('iframe#ifr-dt').getAttribute('src');
    assert.ok(iframeSrc?.includes('trace_app.html?traceURL='));
    assert.deepEqual(pageErrors, []);
    await page.close();
  });

  await t.test('app: clipboard paste', async () => {
    const { page, pageErrors, uploadedFiles } = await openTestPage(browser, baseUrl);

    await page.evaluate(trace => {
      const dt = new DataTransfer();
      dt.setData('text/plain', trace);
      document.body.dispatchEvent(new ClipboardEvent('paste', {
        clipboardData: dt,
        bubbles: true,
        cancelable: true,
      }));
    }, sampleTrace);

    await page.waitForURL(url => url.pathname.startsWith('/t/'), { timeout: 5000 });
    await page.waitForFunction(() => document.documentElement.classList.contains('state--viewing'));

    assert.equal(uploadedFiles.length, 1);
    const iframeSrc = await page.locator('iframe#ifr-dt').getAttribute('src');
    assert.ok(iframeSrc?.includes('trace_app.html?traceURL='));
    assert.deepEqual(pageErrors, []);
    await page.close();
  });
});
