import * as fs from 'node:fs';

// see go/hyvwn

console.log('Fetching latest release data.')
const data = await fetch("https://chromiumdash.appspot.com/fetch_releases?platform=Linux&channel=Canary", {
  "headers": {
    "accept": "application/json",
    "accept-language": "en-US,en;q=0.9",
    "cache-control": "no-cache",
    "pragma": "no-cache"
  },
  "method": "GET"
}).then(r => r.json());

const release = data[0];
const hash = release.hashes.chromium;
const devtoolsHash = release.hashes.devtools;
const version = release.version;

console.log('Found', {version, hash, devtoolsHash});
const declaration = `const chromiumHashVer = ['${hash}', '${version}'];`

let text = fs.readFileSync('./src/app.js', 'utf-8');
text = text.replace(/const chromiumHashVer.*/, declaration);
fs.writeFileSync('./src/app.js', text);

console.log('app.js updated.\n');


const encodedDemoTraceUrl = `https%253A%252F%252Ffirebasestorage.googleapis.com%252Fv0%252Fb%252Ftum-permatraces2%252Fo%252Fpermatraces%25252F7qvReGZ6RU%253Falt%253Dmedia%2526token%253D934388e9-421b-471b-8f26-eebbf97d75e0`;

console.log('\nWhat\s new in this version: ➡️', `https://chromium.googlesource.com/devtools/devtools-frontend/+log/${devtoolsHash}`);

console.log(`\nWarm the caches ➡️`, `https://chrome-devtools-frontend.appspot.com/serve_rev/@${hash}/rehydrated_devtools_app.html?loadTimelineFromURL=${encodedDemoTraceUrl}`, '\n');
