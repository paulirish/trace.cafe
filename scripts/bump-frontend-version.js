import * as fs from 'node:fs';
import { attemptLoad } from './load-appspot-page-for-cachewarming.js';

// see go/hyvwn

export async function main() {
  console.log('Fetching latest release data.');
  const data = await fetch('https://chromiumdash.appspot.com/fetch_releases?platform=Linux&channel=Canary', {
    headers: {
      accept: 'application/json',
      'accept-language': 'en-US,en;q=0.9',
      'cache-control': 'no-cache',
      pragma: 'no-cache',
    },
    method: 'GET',
  }).then(r => r.json());

  const release = data[0];
  const hash = release.hashes.chromium;
  const devtoolsHash = release.hashes.devtools;
  const version = release.version;

  console.log('Found', {version, hash, devtoolsHash});
  const declaration = `const chromiumHashVer = ['${hash}', '${version}'];`;

  let text = fs.readFileSync('./src/app.js', 'utf-8');
  text = text.replace(/const chromiumHashVer.*/, declaration);
  fs.writeFileSync('./src/app.js', text);

  console.log('app.js updated.\n');
  console.log('Whats new in this version: ➡️', `https://chromium.googlesource.com/devtools/devtools-frontend/+log/${devtoolsHash}`);

  await updateSoftNavViewer();


  console.log('node scripts/load-appspot-page-for-cachewarming.js', hash);
  attemptLoad(hash);

}

async function updateSoftNavViewer() {
  const url = 'https://raw.githubusercontent.com/anniesullie/soft-navigation-trace-viewer/refs/heads/main/soft-navigation-trace-viewer.html';
  console.log(`Fetching softnav-viewer.html from ${url}`);
  let text = await fetch(url).then(r => r.text());
  // In the future this snippet shoould probably be its own html file or some something.
  text = text.replace('</body>', `
<!-- trace.cafe additions below -->
<script>
window.addEventListener('message', ({ data, source, origin }) => {
  const msg = data.msg ?? data;
  const payload = data.data;
  console.log('postMessage received', msg, payload ? 'with data' : '');
  const actions = {
    PING: () => source?.postMessage('PONG', origin),
    TRACE: () => {
      document.querySelector('trace-timeline').traceData = payload;
      source?.postMessage({ msg: 'UPLOADCOMPLETE-softnav' }, origin);
    },
  };
  actions[msg]?.();
});
</script>
<style> drop-target { display: none; } </style>
</body></html>
`);
  fs.writeFileSync('./src/third_party/softnav-viewer.html', text);
  console.log('softnav-viewer.html updated.\n');
}

const singleEncodedDemoTraceUrl = encodeURIComponent('https://firebasestorage.googleapis.com/v0/b/tum-permatraces2/o/permatraces%2F7qvReGZ6RU?alt=media&token=934388e9-421b-471b-8f26-eebbf97d75e0')


export const appspotUrl = hash =>
  `https://chrome-devtools-frontend.appspot.com/serve_rev/@${hash}/trace_app.html?traceURL=${singleEncodedDemoTraceUrl}`;



// CLI direct invocation?
if (import.meta.url.endsWith(process?.argv[1])) {
  main();
}

