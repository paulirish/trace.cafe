import {chromium} from 'playwright';
import {appspotUrl} from './bump-frontend-version.js';

export async function attemptLoad(hash) {
  // Get chromiumHashVer from arg or command line argument
  let chromiumHashVer = hash ?? process.argv[2];

  let url = 'https://trace.cafe/t/demo'; // appspotUrl(chromiumHashVer);
  if (chromiumHashVer) {
    url = appspotUrl(chromiumHashVer);
  }

  const attempts = 1;
  const browser = await chromium.launch({
    headless: false,
  });
  const page = await browser.newPage();
  page.on('request', () => process.stdout.write('•'));
  console.log('\nAttempting to load', url);

  for (let i = 1; i <= attempts; ++i) {
    process.stdout.write(`\n[${i} / ${attempts}] `);
    try {
      const response = await page.goto(url, {waitUntil: 'domcontentloaded'});

      if (response.status() === 404) {
        console.log('\n    Page not found (404). Exiting.');
        break;
      }

      await page.waitForLoadState('networkidle', {timeout: 5 * 60_000});
      console.log('\n    😊 Network is quiet!');

      // Wait for the RPP UI to load
      const frame = url.includes('trace.cafe') ? page.frame({url: /chrome-devtools-frontend.appspot.com/}) : page.mainFrame();
      console.log('    Waiting for RPP UI (bottom-up) to load');
      await frame.waitForSelector('#tab-bottom-up', {timeout: 10_000});
      console.log('    RPP UI (bottom-up) is loaded!');
      await frame.getByText('Bottom-up').click({force: true});
      console.log('    ✅ Clicked Bottom-up!');


      // await page.getByRole('dialog').click();

  await page.getByRole('button', { name: 'Hide sidebar' }).click();
  // await page.getByRole('button', { name: 'Show sidebar' }).click();
  await page.getByRole('button', { name: 'View details for Optimize DOM' }).click();
  await page.getByRole('button', { name: 'Style recalculation (3502' }).click();
  await page.getByRole('link', { name: 'use-code-line-observer.ts:210:' }).click();
  await page.getByRole('button', { name: 'More options' }).click();
  await page.getByRole('menuitem', { name: 'Group by Authored/Deployed,' }).click();

  
      // console.log('    Waiting for "Optimize DOM size"');
      // await frame.getByText('Optimize DOM size').click({ position: { x: 107, y: 2 } });
      // console.log('    ✅ Clicked "Optimize DOM size"!');

      // console.log('    Waiting for "Style recalculation"');
      // // There are other elements with that text but we want the first one in the insights
      // await frame.getByText(/Style recalculation/).first().click({ position: { x: 84, y: 8 } });
      // console.log('    ✅ Clicked "Style recalculation"!');

      // console.log('    Waiting for code link');
      // await frame.getByRole('link', { name: /use-code-line-observer\.ts/ }).click({ position: { x: 34, y: 5 } });
      // console.log('    ✅ Clicked code link!');

      break;
    } catch (error) {
      console.log('    error', error);
      if (i === attempts)  {
        throw new Error('Giving up.')
      }
    }
  }

  await browser.close();
}

// CLI direct invocation?
if (import.meta.url.endsWith(process?.argv[1])) {
  attemptLoad();
}
