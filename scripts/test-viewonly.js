import { chromium } from 'playwright';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

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

// A simple static file server for serving the build files
function createServer() {
  return http.createServer((req, res) => {
    const url = new URL(req.url, 'http://localhost');
    let filePath = path.join('dist', url.pathname);
    if (url.pathname === '/' || url.pathname === '/viewonly') {
      filePath = 'dist/viewonly.html';
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
      }
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    });
  });
}

async function runTests() {
  // Start local server
  const server = createServer();
  const port = await new Promise((resolve) => {
    server.listen(0, '127.0.0.1', () => {
      resolve(server.address().port);
    });
  });
  const baseUrl = `http://127.0.0.1:${port}`;
  console.log(`Local test server started at ${baseUrl}`);

  const browser = await chromium.launch({
    // headless: false, // set to false for debugging
  });

  try {
    // ----------------------------------------------------
    // Test Case 1: postMessage 'VIEW'
    // ----------------------------------------------------
    console.log('\n--- Test 1: Testing postMessage VIEW ---');
    const page1 = await browser.newPage();
    await page1.goto(baseUrl, { waitUntil: 'domcontentloaded' });

    // Set up message listener in the browser to detect response
    const postMessagePromise = page1.evaluate(() => {
      return new Promise((resolve) => {
        window.addEventListener('message', (e) => {
          if (e.data && e.data.msg === 'UPLOADCOMPLETE') {
            resolve(true);
          }
        });
      });
    });

    // Send postMessage from parent context
    await page1.evaluate((trace) => {
      window.postMessage({ msg: 'VIEW', data: trace }, '*');
    }, sampleTrace);

    // Verify it sent back UPLOADCOMPLETE
    const msgReceived = await postMessagePromise;
    console.log('✅ Received UPLOADCOMPLETE postMessage response.');

    // Verify viewing state
    const isViewingState = await page1.evaluate(() => {
      return document.documentElement.classList.contains('state--viewing');
    });
    if (!isViewingState) throw new Error('Document did not transition to state--viewing');
    console.log('✅ HTML transitioned to state--viewing class.');

    // Verify iframe exists and is loading devtools
    const iframeSrc = await page1.evaluate(() => {
      const iframe = document.querySelector('iframe#ifr-dt');
      return iframe ? iframe.src : null;
    });
    if (!iframeSrc || !iframeSrc.includes('trace_app.html')) {
      throw new Error(`Iframe src is invalid: ${iframeSrc}`);
    }
    console.log('✅ DevTools iframe src is set correctly:', iframeSrc);

    await page1.close();

    // ----------------------------------------------------
    // Test Case 2: Clipboard Paste
    // ----------------------------------------------------
    console.log('\n--- Test 2: Testing Clipboard Paste ---');
    const page2 = await browser.newPage();
    await page2.goto(baseUrl, { waitUntil: 'domcontentloaded' });

    // Dispatch custom paste event
    await page2.evaluate((trace) => {
      const dataTransfer = new DataTransfer();
      dataTransfer.setData('text/plain', trace);
      const event = new ClipboardEvent('paste', {
        clipboardData: dataTransfer,
        bubbles: true,
        cancelable: true
      });
      document.body.dispatchEvent(event);
    }, sampleTrace);

    // Verify viewing state
    const isViewingStatePaste = await page2.evaluate(() => {
      return document.documentElement.classList.contains('state--viewing');
    });
    if (!isViewingStatePaste) throw new Error('Document did not transition to state--viewing on paste');
    console.log('✅ HTML transitioned to state--viewing class on paste.');

    // Verify iframe src set
    const iframeSrcPaste = await page2.evaluate(() => {
      const iframe = document.querySelector('iframe#ifr-dt');
      return iframe ? iframe.src : null;
    });
    if (!iframeSrcPaste || !iframeSrcPaste.includes('trace_app.html')) {
      throw new Error(`Iframe src is invalid on paste: ${iframeSrcPaste}`);
    }
    console.log('✅ DevTools iframe src is set correctly on paste.');

    await page2.close();

    console.log('\n🎉 All tests passed successfully!');

  } catch (err) {
    console.error('❌ Test failed:', err);
    process.exitCode = 1;
  } finally {
    await browser.close();
    server.close();
  }
}

runTests();
