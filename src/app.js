
import { setupDragAndDrop } from './dragndrop';
import { upload, getTraceDlUrl } from './storage';


// traceid param (either query param or path param) is a a ref.name


// getTraceDlUrl(traceFilename).then(viewTraceFromUrl)

const devtoolsBaseUrl = `https://chrome-devtools-frontend.appspot.com/serve_rev/@3d5948960d62418160796d5831a4d2d7d6c90fa8/worker_app.html`;

async function viewTraceFromUrl(downloadUrl) {
  console.log('File exists in storage. Fetching ' + downloadUrl);
  document.body.className = 'state--viewing';
  const encodedDlurl = encodeURIComponent(downloadUrl)
    .replace('traces%252F', encodeURIComponent('traces%252F')); // why? dunno.

  // No workie cuz of browser protections on devtools:// URLs
  const dtViewingTraceUrl = `devtools://devtools/bundled/devtools_app.html?loadTimelineFromURL=${encodedDlurl}`;
  // worker_app has less deps than devtools_app so.. should load faster. dunno if theres a faster one than that
  // TODO: find mechanism to update this or make sure it matches the trace version
  const hostedDtViewingTraceUrl = `${devtoolsBaseUrl}?loadTimelineFromURL=${encodedDlurl}`;
  
  const iframe = document.querySelector('#ifr');
  iframe.src = hostedDtViewingTraceUrl;

}

(async function readParams(){
  const parsed = new URL(location.href);
  // Pull from query param
  const traceId = parsed.searchParams.get('trace');
  if (traceId) {
    const dlurl = await getTraceDlUrl(traceId);
    viewTraceFromUrl(dlurl);
  }
  // Pull from path
  const pathTraceId = parsed.pathname.match(/\/trace\/(?<traceid>\w+)/)?.groups?.traceid;
  if (pathTraceId) {
    const dlurl = await getTraceDlUrl(traceId);
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
  getTraceDlUrl,
  viewTraceFromUrl,
  upload,
}
