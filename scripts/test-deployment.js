import {chromium} from 'playwright';
import {appspotUrl} from './bump-frontend-version.js';

export async function attemptLoad(hash) {
  // Get chromiumHashVer from arg or command line argument
  let chromiumHashVer = hash ?? process.argv.find(arg => !arg.startsWith('-') && !arg.includes('node') && !arg.includes('.js'));

  let url = 'https://trace.cafe/t/demo'; // appspotUrl(chromiumHashVer);
  if (process.argv.includes('--local')) {
    url = 'http://localhost:5002/?trace=demo';
  } else if (chromiumHashVer) {
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
      const frame = (url.includes('trace.cafe') || url.includes('localhost')) ? 
          page.frame({url: /trace_app\.html/}) : 
          page.mainFrame();
      console.log('    Waiting for RPP UI (bottom-up) to load');
      await frame.waitForSelector('#tab-bottom-up', {timeout: 10_000});
      console.log('    RPP UI (bottom-up) is loaded!');
      await frame.getByText('Bottom-up').click({force: true});
      console.log('    ✅ Clicked Bottom-up!');

      // quit if we're not doing enhanced trace
      if (url.includes('/t/demo') || url.includes('trace=demo')) {
        break;
      }

      // Now go into Sources panel via insights.
      const showSidebarButton = page.getByRole('button', { name: 'Show sidebar' });
      if (await showSidebarButton.isVisible({timeout: 100})) {
        await showSidebarButton.click();
      }
      await page.getByRole('button', { name: 'View details for Optimize DOM' }).click();
      console.log('    ✅ Clicked "View details for Optimize DOM"!');

      await frame.getByText(/Style recalculation/).first().click();
      console.log('    ✅ Clicked "Style recalculation" in insight!');

      await page.getByRole('link', { name: 'remove-child-patch.ts:10:38' }).click();
      console.log('    ✅ Clicked remove-child-patch.ts source link!');
      console.log('    ℹ️ Waiting for source code to load');
      await page.getByRole('button', { name: 'More options' }).click();
      await page.getByRole('menuitem', { name: 'Group by Authored/Deployed,' }).click();


      const text = await page.locator('.cm-content').textContent();

      if (!text.includes('applyRemoveChildPatch') || !text.includes('instanceof Error')) {
        throw new Error('Code content does not match expected content.', text);
      }
      console.log('    ✅✅✅✅✅ Source code looks good!');



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
