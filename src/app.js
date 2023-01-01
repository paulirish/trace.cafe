import {setupDragAndDrop, handleDrop} from './dragndrop';
import {getTraceDlUrl} from './storage';
import {hijackConsole} from './log';

// traceid param (either query param or path param) is a a ref.name

// Ideally we'd use `devtools://devtools/bundled/devtools_app.html...` …
// but the browser has extra protection on devtools:// URLS..

// TODO: find a way to update this as it's currently frozen in time (~stable @ dec 2022) .. or make sure it matches the trace version?
// Current workflow: remote debug chrome stable and grab the hash in DTonDT

// worker_app has less deps than devtools_app so.. should load faster. dunno if theres a faster one than that
const devtoolsBaseUrl = `https://chrome-devtools-frontend.appspot.com/serve_rev/@1cd27afdb8e5d057070c0961e04c490d2aca1aa0/worker_app.html`;

async function displayTrace(downloadUrl, fileData) {
  if (!downloadUrl) {
    document.body.className = 'state--idle';
    return;
  }

  document.body.className = 'state--viewing';
  
  // Set human-friendly title
  const filename = (fileData?.metadata?.oName || fileData.name).replace('.json', '');
  const date = new Date(fileData.timeCreated);
  const fmter = new Intl.DateTimeFormat(undefined, {dateStyle: 'medium', timeStyle: 'medium'});
  const dateStr = fmter.format(date);
  document.title = `trace.cafe — ${filename} — ${dateStr}`;

  setTimeout(_ => {document.querySelector('details').open = false;}, 1_000);

  // why? dunno.
  const encodedDlurl = encodeURIComponent(downloadUrl).replace('traces%252F', encodeURIComponent('traces%252F'));
  const hostedDtViewingTraceUrl = `${devtoolsBaseUrl}?loadTimelineFromURL=${encodedDlurl}`;

  console.log('Trace opening in DevTools…', filename);
  const iframe = document.getElementById('ifr');
  iframe.onload = _ => {
    // Technically devtools iframe just loaded (didnt 404). We assume the trace loaded succfessully too. 
    // Can't really extract errors from that iframe.....
    console.log('Trace loaded.', filename, 'Uploaded:', dateStr);
  }
  iframe.src = hostedDtViewingTraceUrl;
}

async function readParams() {
  const parsed = new URL(location.href);
  // Pull from path
  let traceId = parsed.pathname.match(/\/(trace|t)\/(?<traceid>[^/]*)/)?.groups?.traceid;
  if (!traceId) {
    // Pull from query param
    traceId = parsed.searchParams.get('trace');
  }
  if (!traceId) return;
  document.body.className = 'state--viewing';
  const {dlurl, fileData} = await getTraceDlUrl(traceId);
  displayTrace(dlurl, fileData);
}

function setupLanding() {
  // // Preload iframe
  // TODO: use Navigation API to avoid the preload from adding a history entry.
  // const iframe = document.getElementById('ifr');
  // iframe.src = `${devtoolsBaseUrl}?loadTimelineFromURL=`;

  // Update example trace URL
  const example = document.querySelector('#example');
  const rootRelUrl = example.href.replace(example.origin, '');
  const adjustedExampleUrl = new URL(rootRelUrl, location.href);
  example.textContent = example.href = adjustedExampleUrl;

  // formaction is trés cool but it adds a questionMark param
  document.querySelector('.toolbar-button--home').addEventListener('click', e => {
    e.preventDefault();
    location.href = '/';
  });
}

function setupFileInput() {
  const fileinput = document.getElementById('fileinput');
  document.getElementById('selectfile').addEventListener('click', e => {
    e.preventDefault();
    fileinput.showPicker(); // hawt.
  });
  fileinput.addEventListener('change', e => {
    handleDrop(e.target.files);
  });
}

hijackConsole();
setupLanding();
readParams(); // Handle permalinks and load stuff
setupDragAndDrop();
setupFileInput();
