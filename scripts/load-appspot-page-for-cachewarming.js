import {chromium} from 'playwright';
import {appspotUrl} from './bump-frontend-version.js';

export async function attemptLoad(hash) {
  // Get chromiumHashVer from arg or command line argument
  let chromiumHashVer = hash ?? process.argv[2];

  let url = 'https://trace.cafe/t/demo'; // appspotUrl(chromiumHashVer);
  if (chromiumHashVer) {
    url = appspotUrl(chromiumHashVer);
  }

  const attempts = 10;
  const browser = await chromium.launch({
    // headless: false,
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
