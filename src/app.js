import {setupDragAndDrop, handleDrop} from './dragndrop';
import {getAssetUrl} from './storage';
import {hijackConsole} from './log';

/** @typedef {import('firebase/storage').FullMetadata} FullMetadata */
/** @template {string} T @typedef {import('typed-query-selector/parser').ParseSelector<T, Element>} ParseSelector */

// TODO: find a way to update this as it's currently frozen in time .. or make sure it matches the trace version?
//    Current workflow: grab the Revision from chrome:version
//    These hashes match up with the "Incrementing VERSION" commits: https://chromium.googlesource.com/chromium/src/+log/111.0.5544.2..111.0.5544.3?pretty=fuller&n=10000
const devtoolsGitHash = 'f775f3615b05884713c434f5bc3c4eb13a5edb8e'; // 119.0.6034.0 

// Ideally we'd use `devtools://devtools/bundled/js_app.html...` …
//     but the browser has extra protection on devtools:// URLS..
// There are multiple "entrypoints". We go for a smaller one (even tho it still loads LOTS that we don't need)
// - devtools_app ~= 101 req (5.0 MB)
// - worker_app   ~=  99 req (5.0 MB)
// - js_app       ~=  83 req (4.3 MB)  but sets isNode:true, which removes Screenshots and more. crbug.com/1487369
const devtoolsBaseUrl = `https://chrome-devtools-frontend.appspot.com/serve_rev/@${devtoolsGitHash}/worker_app.html`;

/**
 * Guaranteed context.querySelector. Always returns an element or throws if nothing matches query.
 * Thx lighthouse's dom.js!
 * @template {string} T
 * @param {T} query
 * @param {ParentNode=} context
 * @return {ParseSelector<T>}
 */
globalThis.$ = function (query, context) {
  const result = (context || document).querySelector(query);
  if (result === null) {
    throw new Error(`query ${query} not found`);
  }
  return /** @type {ParseSelector<T>} */ (result);
};

/**
 * Show devtools now that we have a trace asset URL
 * @param {string | undefined} assetUrl
 * @param {FullMetadata} fileData
 * @returns
 */
async function displayTrace(assetUrl, fileData) {
  if (!assetUrl) {
    document.body.className = 'state--idle';
    $('iframe#ifr-perfetto').classList.remove('visible', 'traceloaded');
    return;
  }

  document.body.className = 'state--viewing';

  // Set human-friendly title
  globalThis.assetFilename = fileData?.metadata?.oName || fileData.name;
  const filename = assetFilename.replace('.json', '');
  const date = new Date(fileData.timeCreated);
  const fmter = new Intl.DateTimeFormat(undefined, {dateStyle: 'medium', timeStyle: 'medium'});
  const dateStr = fmter.format(date);
  document.title = `trace.cafe — ${filename} — ${dateStr}`;

  setTimeout(_ => {$('details').open = false;}, 1_000);

  /**
   * For the object data URL (in getAssetUrl) we just encode the traces/traceid path once. but here we do it TWICE. Why????!
   * Because DevTools incorrectly double decodes the path.
   *  - First decode in `Runtime.Runtime.queryParam()` with the searchParams.get call
   *  - Second decode in TimelinePanel's `handleQueryParam()` for loadTimelineFromURL it happens again.
   * TODO: fix that bug in devtools.
   */
  const encodedAssetUrl = encodeURIComponent(assetUrl);
  const hostedDtViewingTraceUrl = new URL(devtoolsBaseUrl);
  hostedDtViewingTraceUrl.searchParams.set('loadTimelineFromURL', encodedAssetUrl);

  console.log('Trace opening in DevTools…', filename);
  const iframe = $('iframe#ifr-dt');
  iframe.onload = _ => {
    // Technically devtools iframe just loaded (didnt 404). We assume the trace loaded succfessully too.
    // Can't really extract errors from that iframe.....
    console.log('Trace loaded.', filename, 'Uploaded:', dateStr);
    document.body.className += ' state--loaded';
  };
  iframe.src = hostedDtViewingTraceUrl.href;

  // Warm up perfetto iframe
  const iframePerfetto = $('iframe#ifr-perfetto');
  iframePerfetto.src = 'https://ui.perfetto.dev/';
  // global vars for the perfetto load... it's gross. i'm sorry.
  globalThis.traceAssetUrl = assetUrl;
  globalThis.traceTitle = `${filename} — ${dateStr}`;
}

// https://perfetto.dev/docs/visualization/deep-linking-to-perfetto-ui
async function showTraceInPerfetto(iframePerfetto, traceAssetUrl, traceTitle) {
  const ORIGIN = 'https://ui.perfetto.dev';
  const timer = setInterval(() => iframePerfetto.contentWindow.postMessage('PING', ORIGIN), 50);

  const onPerfettoMsg = async evt => {
    if (evt.data !== 'PONG') return;
    // We got a PONG, the UI is ready.
    window.clearInterval(timer); window.removeEventListener('message', onPerfettoMsg);

    const traceBuffer = await fetch(traceAssetUrl).then(r => r.arrayBuffer());
    // Send trace
    const payload = {
      perfetto: {
        buffer: traceBuffer,
        title: traceTitle,
      },
    };
    iframePerfetto.contentWindow.postMessage(payload, ORIGIN);
    iframePerfetto.classList.add('traceloaded');
  };

  window.addEventListener('message', onPerfettoMsg);
}

function togglePerfettoViz(){
  const iframePerfetto = $('iframe#ifr-perfetto');
  const shouldShowPerfetto = iframePerfetto.classList.toggle('visible');
  // Only load it once. but user can toggle visibility all they want
  if (shouldShowPerfetto && !iframePerfetto.classList.contains('traceloaded')) {
    showTraceInPerfetto(iframePerfetto, globalThis.traceAssetUrl, globalThis.traceTitle);
  }
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
  const {assetUrl, fileData} = await getAssetUrl(traceId);
  displayTrace(assetUrl, fileData);
}

function setupLanding() {
  // // Preload iframe
  // TODO: use Navigation API to avoid the preload from adding a history entry.
  // const iframe = $('iframe#ifr-dt');
  // iframe.src = `${devtoolsBaseUrl}?loadTimelineFromURL=`;

  // Update example trace URL
  const example = $('a#example');
  const rootRelUrl = example.href.replace(example.origin, '');
  const adjustedExampleUrl = new URL(rootRelUrl, location.href);
  example.textContent = example.href = adjustedExampleUrl.href;

  // formaction is trés cool but it adds a questionMark param
  $('.toolbar-button--home').addEventListener('click', e => {
    e.preventDefault();
    location.href = '/';
  }); 
  
  // Downlaod button because showSaveFilePicker doesnt work in cross-origin iframe
  $('.icon--dl').addEventListener('click', async e => {
    const a = document.createElement('a');
    a.title = globalThis.traceAssetUrl;
    const blob = await fetch(globalThis.traceAssetUrl).then(r => r.blob());
    if (blob.type !== 'application/json') throw new Error('Unsupported blob type');
    a.href = URL.createObjectURL(blob);

    // TODO: add a compressionstream for gz.
    a.download = globalThis.assetFilename.replace('.gz', '');
    document.body.append(a); // Firefox requires anchor to be in the DOM.
    a.click();

    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(a.href), 500);
  });

  // Toggle icon between Perfetto and PP
  $('.toolbar-button--perfetto-toggle').addEventListener('click', e => {
    const isDT = e.target.classList.toggle('toolbar-button--perfetto-toggle-devtools');
    e.target.title = `Show in ${isDT ? 'DevTools Perf Panel' : 'Perfetto UI'}`;
    togglePerfettoViz();
  });

  addEventListener('unhandledrejection', event => {
    console.error('Unhandled rejection: ', event?.reason?.message);
  });
}

function setupFileInput() {
  const fileinput = $('input#fileinput');
  $('#selectfile').addEventListener('click', e => {
    e.preventDefault();
    fileinput.showPicker(); // hawt.
  });
  fileinput.addEventListener('change', e => {
    handleDrop(e.target?.files);
  });
}

hijackConsole();
setupLanding();
readParams(); // Handle permalinks and load stuff
setupDragAndDrop();
setupFileInput();
