import {chromium} from 'playwright';
import fs from 'node:fs';
import path from 'node:path';
import {appspotUrl} from './bump-frontend-version.js';

export async function attemptLoad () {
  // Get chromiumHashVer from command line argument or app.js
  let chromiumHashVer = process.argv[2];
  if (!chromiumHashVer) {
    try {
      const filename = path.resolve(process.cwd(), './src/app.js');
      const appJsContent = fs.readFileSync(filename, 'utf8');
      const match = appJsContent.match(/const chromiumHashVer = \[.(\w+)'/);
      if (match && match[1]) {
        chromiumHashVer = match[1];
      } else {
        console.error("Couldn't find chromiumHashVer in app.js");
        process.exit(1);
      }
    } catch (err) {
      console.error('Failed to read app.js:', err);
      process.exit(1);
    }
  }

  const browser = await chromium.launch({
    // headless: false,
  });
  const page = await browser.newPage();
  const url = appspotUrl(chromiumHashVer);
  const attempts = 5;
  console.log('\nAttempting to load', url);
  page.on('request', () => process.stdout.write('•'));
  
  for (let i = 0; i < attempts; i++) {
    console.log(`    [${i + 1} / ${attempts}]`);
    try {
      const response = await page.goto(url);

      if (response.status() === 404) {
        console.log('\nPage not found (404). Exiting.');
        break;
      }

      await page.waitForLoadState('networkidle', {timeout: 5 * 60_000});
      console.log('\n😊 Network is quiet! Ensuring text is there');
      await page.waitForSelector('text=Bottom-up', {timeout: 5_000});
      console.log('✅ Found Bottom-up!');
      break;

    } catch (error) {
      console.log('Network did not become quiet within 120 seconds.');
      console.log(i < 4 ? 'Retrying...' : 'Giving up.');
    }
  }

  await browser.close();
}


// CLI direct invocation?
if (import.meta.url.endsWith(process?.argv[1])) {
  attemptLoad();
}

