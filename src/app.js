import {setupDragAndDrop} from './dragndrop';
import {getTraceDlUrl} from './storage';
import {hijackConsole} from './log';

// traceid param (either query param or path param) is a a ref.name

// Ideally we'd use `devtools://devtools/bundled/devtools_app.html...` …
// but the browser has extra protection on devtools:// URLS..

// TODO: find a way to update this as it's currently frozen in time (~oct 2022) .. or make sure it matches the trace version?

// worker_app has less deps than devtools_app so.. should load faster. dunno if theres a faster one than that
const devtoolsBaseUrl = `https://chrome-devtools-frontend.appspot.com/serve_rev/@3d5948960d62418160796d5831a4d2d7d6c90fa8/worker_app.html`;

async function viewTraceFromUrl(downloadUrl) {
  if (!downloadUrl) return;

  document.body.className = 'state--viewing';
  setTimeout(_ => {
    document.querySelector('details').open = false;
  }, 1_000);

  const encodedDlurl = encodeURIComponent(downloadUrl).replace(
    'traces%252F',
    encodeURIComponent('traces%252F')
  ); // why? dunno.

  const hostedDtViewingTraceUrl = `${devtoolsBaseUrl}?loadTimelineFromURL=${encodedDlurl}`;

  console.log('Loading trace in DevTools…');
  const iframe = document.querySelector('#ifr');
  iframe.src = hostedDtViewingTraceUrl;
}

async function readParams() {
  const parsed = new URL(location.href);
  // Pull from path
  let pathTraceId = parsed.pathname.match(/\/trace\/(?<traceid>[^/]*)/)?.groups?.traceid;
  if (pathTraceId) {
    const {dlurl} = await getTraceDlUrl(pathTraceId);
    viewTraceFromUrl(dlurl);
  }

  // Pull from query param
  const traceId = parsed.searchParams.get('trace');
  if (traceId) {
    const {dlurl} = await getTraceDlUrl(traceId);
    viewTraceFromUrl(dlurl);
    return;
  }
}

function setupLanding() {
  // Preload iframe
  const iframe = document.createElement('iframe');
  iframe.id = 'ifr';
  iframe.src = devtoolsBaseUrl;
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

export {viewTraceFromUrl};
