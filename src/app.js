import {setupDragAndDrop, handleDrop} from './dragndrop';
import {getAssetUrl} from './storage';
import {hijackConsole} from './log';

/** @typedef {import('firebase/storage').FullMetadata} FullMetadata */
/** @template {string} T @typedef {import('typed-query-selector/parser').ParseSelector<T, Element>} ParseSelector */

// TODO: find a way to update this as it's currently frozen in time .. or make sure it matches the trace version?
//    Current workflow: grab the Revision from chrome:version
//    These hashes match up with the "Incrementing VERSION" commits: https://chromium.googlesource.com/chromium/src/+log/111.0.5544.2..111.0.5544.3?pretty=fuller&n=10000
const devtoolsGitHash = '030cc140435b0152645522b9864b75cac6c0a854'; // 112.0.5615.20 should be the 112 beta branch.  
                                                                    // Has interrupted flamechart fix and timelineloader .traceEvents fix. 
                                                                    // No tracemodel worker. No trace engine at all.
                                                                    // Has 'fixing samples' message not emitted to users.

// Ideally we'd use `devtools://devtools/bundled/js_app.html...` …
//     but the browser has extra protection on devtools:// URLS..
// There are multiple "entrypoints". We go for the leanest one (even tho it loads LOTS that we don't need)
// - devtools_app ~= 101 req (5.0 MB)
// - worker_app   ~=  99 req (5.0 MB)
// - js_app       ~=  83 req (4.3 MB)
const devtoolsBaseUrl = `https://chrome-devtools-frontend.appspot.com/serve_rev/@${devtoolsGitHash}/js_app.html`;

/**
 * Guaranteed context.querySelector. Always returns an element or throws if nothing matches query.
 * Thx lighthouse's dom.js!
 * @template {string} T
 * @param {T} query
 * @param {ParentNode=} context
 * @return {ParseSelector<T>}
 */
globalThis.$ = function(query, context) {
  const result = (context || document).querySelector(query);
  if (result === null) {
    throw new Error(`query ${query} not found`);
  }
  return /** @type {ParseSelector<T>} */ (result);
}

/**
 * Show devtools now that we have a trace asset URL
 * @param {string | undefined} assetUrl 
 * @param {FullMetadata} fileData 
 * @returns 
 */
async function displayTrace(assetUrl, fileData) {
  if (!assetUrl) {
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
  const iframe = $('iframe#ifr');
  iframe.onload = _ => {
    // Technically devtools iframe just loaded (didnt 404). We assume the trace loaded succfessully too. 
    // Can't really extract errors from that iframe.....
    console.log('Trace loaded.', filename, 'Uploaded:', dateStr);
  }
  iframe.src = hostedDtViewingTraceUrl.href;
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
  // const iframe = $('iframe#ifr');
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

  addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled rejection: ', event?.reason?.message)
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

  // setInterval(_ => {
  //   console.log('hello from', Date.now());
  // }, 1000);
}

hijackConsole();
setupLanding();
readParams(); // Handle permalinks and load stuff
setupDragAndDrop();
setupFileInput();
