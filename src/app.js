import {setupDragAndDrop} from './dragndrop';
import {getTraceDlUrl} from './storage';
import {hijackConsole} from './log';

// traceid param (either query param or path param) is a a ref.name

// Ideally we'd use `devtools://devtools/bundled/devtools_app.html...` …
// but the browser has extra protection on devtools:// URLS..

// TODO: find a way to update this as it's currently frozen in time (~oct 2022) .. or make sure it matches the trace version?

// worker_app has less deps than devtools_app so.. should load faster. dunno if theres a faster one than that
const devtoolsBaseUrl = `https://chrome-devtools-frontend.appspot.com/serve_rev/@3d5948960d62418160796d5831a4d2d7d6c90fa8/worker_app.html`;

async function displayTrace(downloadUrl, fileData) {
  if (!downloadUrl) return;

  document.body.className = 'state--viewing';
  
  // Set human-friendly title
  const filename = (fileData?.metadata?.oName || fileData.name).replace('.json', '');
  const date = new Date(fileData.timeCreated);
  const fmter = new Intl.DateTimeFormat(undefined, {dateStyle: 'medium', timeStyle: 'medium'});
  const dateStr = fmter.format(date);
  document.title = `Trace Share Server — ${filename} — ${dateStr}`;

  setTimeout(_ => {document.querySelector('details').open = false;}, 1_000);

  // why? dunno.
  const encodedDlurl = encodeURIComponent(downloadUrl).replace('traces%252F', encodeURIComponent('traces%252F'));
  const hostedDtViewingTraceUrl = `${devtoolsBaseUrl}?loadTimelineFromURL=${encodedDlurl}`;

  console.log('Loading trace in DevTools…', filename, dateStr);
  const iframe = document.querySelector('#ifr');
  iframe.src = hostedDtViewingTraceUrl;
}

async function readParams() {
  const parsed = new URL(location.href);
  // Pull from path
  let traceId = parsed.pathname.match(/\/trace\/(?<traceid>[^/]*)/)?.groups?.traceid;
  if (!traceId) {
    // Pull from query param
    traceId = parsed.searchParams.get('trace');
  }
  if (!traceId) return;
  const {dlurl, fileData} = await getTraceDlUrl(traceId);
  displayTrace(dlurl, fileData);
}

function setupLanding() {
  // Preload iframe
  const iframe = document.createElement('iframe');
  iframe.id = 'ifr';
  iframe.src = `${devtoolsBaseUrl}?loadTimelineFromURL=`;
  document.body.append(iframe);

  // Update example trace URL
  const example = document.querySelector('#example');
  const rootRelUrl = example.href.replace(example.origin, '');
  const adjustedExampleUrl = new URL(rootRelUrl, location.href);
  example.textContent = example.href = adjustedExampleUrl;
}

hijackConsole();
setupLanding();
setupDragAndDrop();
readParams();

