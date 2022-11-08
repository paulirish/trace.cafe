
import { setupDragAndDrop } from './dragndrop';
import { getTraceDlUrl } from './storage';
import { hijackConsole } from './log';

// traceid param (either query param or path param) is a a ref.name


// getTraceDlUrl(traceFilename).then(viewTraceFromUrl)

const devtoolsBaseUrl = `https://chrome-devtools-frontend.appspot.com/serve_rev/@3d5948960d62418160796d5831a4d2d7d6c90fa8/worker_app.html`;

async function viewTraceFromUrl(downloadUrl) {
  if (!downloadUrl) return;
 
  document.body.className = 'state--viewing';
  setTimeout(_ => {
    document.querySelector('details').open = false;
  }, 1_000);

  const encodedDlurl = encodeURIComponent(downloadUrl)
    .replace('traces%252F', encodeURIComponent('traces%252F')); // why? dunno.

  // No workie cuz of browser protections on devtools:// URLs
  const dtViewingTraceUrl = `devtools://devtools/bundled/devtools_app.html?loadTimelineFromURL=${encodedDlurl}`;
  // worker_app has less deps than devtools_app so.. should load faster. dunno if theres a faster one than that
  // TODO: find mechanism to update this or make sure it matches the trace version
  const hostedDtViewingTraceUrl = `${devtoolsBaseUrl}?loadTimelineFromURL=${encodedDlurl}`;
  
  console.log('Loading trace in DevTools…');
  const iframe = document.querySelector('#ifr');
  iframe.src = hostedDtViewingTraceUrl;
}

hijackConsole();

(async function readParams(){
  const parsed = new URL(location.href);
  // Pull from query param
  const traceId = parsed.searchParams.get('trace');
  if (traceId) {
    const dlurl = await getTraceDlUrl(traceId);
    viewTraceFromUrl(dlurl);
    return;
  }
  // Pull from path
  const pathTraceId = parsed.pathname.match(/\/trace\/(?<traceid>[^/]*)/)?.groups?.traceid;
  if (pathTraceId) {
    const dlurl = await getTraceDlUrl(pathTraceId);
    viewTraceFromUrl(dlurl);
  }
})();

setupDragAndDrop()


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



export {
  viewTraceFromUrl,
}
