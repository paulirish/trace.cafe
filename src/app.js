import {setupDragAndDrop, handleDrop} from './dragndrop';
import {getAssetUrl} from './storage';
import {hijackConsole} from './log';
import {recentlyViewed} from './recently-viewed';
import {upload} from './storage';

/** @typedef {import('firebase/storage').FullMetadata} FullMetadata */
/** @template {string} T @typedef {import('typed-query-selector/parser').ParseSelector<T, Element>} ParseSelector */

// TODO: find a way to update this as it's currently frozen in time .. or make sure it matches the trace version?
//    Current workflow: grab the Revision from chrome:version
//    These hashes match up with the "Updating trunk VERSION" commits: https://chromium.googlesource.com/chromium/src/+log/main/chrome/VERSION
const chromiumHashVer = ['681dfb8a5521ddd46f837577e3696ca477812f17', '143.0.7485.0'];

// Ideally we'd use `devtools://devtools/bundled/js_app.html...` …
//     but the browser has extra protection on devtools:// URLS..
// There are multiple "entrypoints". We go for a smaller one (even tho it still loads LOTS that we don't need)
// - devtools_app             ~= 139 req (6.5 MB resources)
// - worker_app               ~= 134 req (6.5 MB)
// - js_app                   ~= 131 req (6.5 MB)  but sets isNode:true, which removes Screenshots and more. crbug.com/1487369
// - ~rehydrated_devtools_app ~= 104 req (4.9 MB)  but throws an error if no `window.opener`~   removed in Oct 2025.
// - trace_app                ~= 128 req (6.2 MB)
const devtoolsBaseUrl = `https://chrome-devtools-frontend.appspot.com/serve_rev/@${chromiumHashVer[0]}/trace_app.html`;

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
    document.documentElement.className = 'state--landing';
    $('iframe#ifr-perfetto').classList.remove('visible', 'perfetto-tracedatasent');
    $('iframe#ifr-softnav').classList.remove('visible', 'softnav-tracedatasent');
    return;
  }

  document.documentElement.className = 'state--viewing';

  // Set human-friendly title
  const filename = (fileData.metadata?.oName || fileData.name).replace('.json', '');
  const date = new Date(fileData.timeCreated);
  const fmter = new Intl.DateTimeFormat(undefined, {dateStyle: 'medium', timeStyle: 'medium'});
  const dateStr = fmter.format(date);
  recentlyViewed.add(fileData, filename);

  document.title = `${filename} — ${dateStr} - trace.cafe`;

  setTimeout(_ => {
    $('details').open = false;
  }, 1_000);

  /**
   * `loadTimelineFromURL` required double-encoded values, but we fixed that when introducing its replacement `traceURL`. :)
   * This means the normal `searchParam.set('traceURL', actualURL)` will work fine, but there's a small wrinkle for trace.cafe's firebase URLs…
   * 
   * Our Firebase asset urls include a url-encoded escaped slash `%2F` which is left as is in the canonical URL for that asset. (essentially the folder path is treated as part of the filename)
   * A tad more explictly:
   * ```js
   * copy(`trace_app.html?traceURL=${encodeURIComponent(`https://firebasestorage.googleapis.com/v0/b/tum-permatraces2/o/permatraces${encodeURIComponent('/')}web-dev-annot.json.gz?alt=media&token=10a74a6c-5e3b-46a2-b202-f55032a54766`)}`)
   * ```
   * That'll work.
   */
  const hostedDtViewingTraceUrl = new URL(devtoolsBaseUrl);
  hostedDtViewingTraceUrl.searchParams.set('traceURL', assetUrl);
  hostedDtViewingTraceUrl.searchParams.set('panel', 'timeline');

  console.log('Trace opening in DevTools…', filename);
  const iframe = $('iframe#ifr-dt');
  // I experimenting with a srcdoc loading screen but it doesn't work cuz the .src assignment will nuke the srcdoc state entirly.
  // Kinda weird but w/e. Also srcdoc messes with history entries.
  iframe.onload = _ => {
    // Technically devtools iframe just loaded (didnt 404). We assume the trace loaded succfessully too.
    // Can't really extract errors from that iframe.....
    console.log('Trace loaded.', filename, 'Uploaded:', dateStr);
    document.documentElement.classList.add('ifr-dt-loaded');
  };
  iframe.src = hostedDtViewingTraceUrl.href;

  // Warm up perfetto iframe. // Eh... it's so loud for something that's a 10% usecase.
  // const iframePerfetto = $('iframe#ifr-perfetto');
  // iframePerfetto.src = 'https://ui.perfetto.dev/';

  // global vars for the perfetto load... it's gross. i'm sorry.
  globalThis.traceAssetUrl = assetUrl;
  globalThis.traceTitle = `${filename} — ${dateStr}`;
}

// https://perfetto.dev/docs/visualization/deep-linking-to-perfetto-ui
async function showTraceInPerfetto(iframePerfetto, traceAssetUrl, traceTitle) {
  const ORIGIN = 'https://ui.perfetto.dev';
  iframePerfetto.src = 'https://ui.perfetto.dev/';
  const timer = setInterval(() => iframePerfetto.contentWindow.postMessage('PING', ORIGIN), 50);

  const onPerfettoMsg = async evt => {
    if (evt.data !== 'PONG') return;
    // We got a PONG, the UI is ready.
    window.clearInterval(timer);
    window.removeEventListener('message', onPerfettoMsg);

    const traceBuffer = await fetch(traceAssetUrl).then(r => r.arrayBuffer());
    // Send trace
    const payload = {
      perfetto: {
        buffer: traceBuffer,
        title: traceTitle,
      },
    };
    iframePerfetto.contentWindow.postMessage(payload, ORIGIN);
    iframePerfetto.classList.add('perfetto-tracedatasent');
  };

  window.addEventListener('message', onPerfettoMsg);
}

async function showTraceInSoftNavViewer(iframeSoftNav, traceAssetUrl) {
  // demo: https://trace.cafe/t/qvYZmG22OT
  const text = await fetch(traceAssetUrl).then(r => r.text());
  iframeSoftNav.contentWindow.postMessage({msg: 'TRACE', data: text}, 'https://trace.cafe');
  $('.toolbar-button--softnav-toggle').classList.remove('loading');
  iframeSoftNav.classList.add('softnav-tracedatasent');
}

function toggleBetweenPerfettoAndDevTools() {
  const iframePerfetto = $('iframe#ifr-perfetto');
  const shouldShowPerfetto = iframePerfetto.classList.toggle('visible');
  // Only load it once. but user can toggle visibility all they want
  if (shouldShowPerfetto && !iframePerfetto.classList.contains('perfetto-tracedatasent')) {
    showTraceInPerfetto(iframePerfetto, globalThis.traceAssetUrl, globalThis.traceTitle);
  }
}

async function readParams() {
  const parsed = new URL(location.href);
  const traceId =
    // Pull from path
    parsed.pathname.match(/\/(trace|t)\/(?<traceid>[^/]*)/)?.groups?.traceid ??
    // Pull from query param
    parsed.searchParams.get('trace') ??
    // Pull from hash (intermediate-while-uploading url)
    parsed.hash.match(/\/(trace|t)\/(?<traceid>[^/]*)/)?.groups?.traceid;

  if (!traceId) return;


  const canonicalUrl = new URL(`/t/${traceId}`, location.href);
  // Download convenience fn
  if (location.href.startsWith(`${canonicalUrl.href}/download`)) {
    const {assetUrl, fileData} = await getAssetUrl(traceId);
    void downloadTrace(assetUrl, fileData);
    return;
  }

  // Let's get everyone on the canonical thing.
  if (location.href !== canonicalUrl.href) {
    location.href = canonicalUrl.href;
    return;
  }

  document.documentElement.className = 'state--viewing';
  const {assetUrl, fileData} = await getAssetUrl(traceId);
  displayTrace(assetUrl, fileData);
}

function setupLanding() {
  // // Preload iframe
  // TODO: use Navigation API to avoid the preload from adding a history entry.
  // const iframe = $('iframe#ifr-dt');
  // iframe.src = `${devtoolsBaseUrl}?traceURL=`;

  $('.landing-ui').appendChild(recentlyViewed.listAsDOM());

  const verEl = $('a#chromever');
  verEl.href = `https://chromiumdash.appspot.com/commits?commit=${chromiumHashVer[0]}&platform=Linux`;
  const mstone = chromiumHashVer[1].split('.').at(0);
  verEl.hidden = false;
  verEl.textContent = `chrome m${mstone}`;
  verEl.title = `${chromiumHashVer[1]} == ${verEl.title}`;

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

  // Toggle icon between Perfetto and PP
  $('.toolbar-button--perfetto-toggle').addEventListener('click', e => {
    const isDT = e.target.classList.toggle('toolbar-button--perfetto-toggle-devtools');
    e.target.title = `Show in ${isDT ? 'DevTools Perf Panel' : 'Perfetto UI'}`;
    toggleBetweenPerfettoAndDevTools();
  });

  $('.toolbar-button--softnav-toggle').addEventListener('click', e => {
    const showSoftNav = !$('.toolbar-button--softnav-toggle').classList.contains('on');
    $('.toolbar-button--softnav-toggle').classList.toggle('on', showSoftNav);
    $('.toolbar-button--softnav-toggle').classList.toggle('loading', showSoftNav);
    $('iframe#ifr-softnav').classList.toggle('visible', showSoftNav);
    showTraceInSoftNavViewer($('iframe#ifr-softnav'), globalThis.traceAssetUrl).catch(err => {
      console.error('Error showing trace in SoftNav viewer:', err.message);
      $('.toolbar-button--softnav-toggle').classList.remove('loading');
    })
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

/**
 * @param {string} assetUrl
 * @param {FullMetadata} fileData
 */
async function downloadTrace(assetUrl, fileData) {
    const a = document.createElement('a');
    a.title = assetUrl;
    const blob = await fetch(assetUrl).then(r => r.blob());
    if (blob.type !== 'application/json') throw new Error('Unsupported blob type');
    a.href = URL.createObjectURL(blob);

    const filename = (fileData?.metadata?.oName || fileData.name).replace('.json', '');
    // TODO: add a compressionstream for gz.
    a.download = filename.replace('.gz', '');
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 500);
}

hijackConsole();
setupLanding();
readParams(); // Handle permalinks and load stuff
setupDragAndDrop();
setupFileInput();

// Allow receiving traces over postMessage
window.addEventListener('message', async e => {
  const msg = e.data.msg ?? e.data;
  const data = e.data.data;
  console.log('postMessage received', msg, data && Object.keys(data).length ? 'with data' : '');

  switch (msg) {
    case 'PING':
      e.source?.postMessage('PONG', e.origin);
      break;
    case 'TRACE':
      const traceViewUrl = await upload(data);
      e.source?.postMessage({msg: 'UPLOADCOMPLETE', data: {url: traceViewUrl.href}}, e.origin);
      break;
    case 'UPLOADCOMPLETE-softnav':
      console.log('Trace sent to softnav viewer!')
      break;
    default:
  }
});

// If anyone opens trace.cafe as a popup, inform them
window.addEventListener('load', _ => {
  window.opener?.postMessage('CAFEOPEN', '*');
});

// Handle pasting of trace file contents. (weird edge case but mostly for me :)
document.body.addEventListener('paste', async e => {
  const pastedText = e.clipboardData?.getData('text/plain');
  if (!pastedText) return;
  if (!(pastedText.startsWith('[') || pastedText.startsWith('{'))) return;

  const traceText = pastedText;
  const file = new File([traceText], 'pasted-trace.json', {type: 'application/json'});
  upload(file).catch(err => console.error('Error uploading pasted trace:', err.message));
});
