import {setupDragAndDrop} from './dragndrop.js';
import {arrayBufferToString} from './trace-compression.js';
import './dom-utils.js'; // Registers globalThis.$
import {setupFileInput} from './dom-utils.js';
import {createProgressDialog} from './progress-dialog.js';

const chromiumHashVer = ['afb989e0e1cd54ffc8edd6b4865e32aef9ae3245', '143.0.7494.0'];
const devtoolsBaseUrl = `https://chrome-devtools-frontend.appspot.com/serve_rev/@${chromiumHashVer[0]}/trace_app.html?panel=timeline`;


const iframeReady = new Promise(resolve => {
  window.addEventListener('message', e => {
    if (e.data.type === 'REHYDRATING_IFRAME_READY') {
      resolve(void 0);
    }
  });
});





/**
 * @param {string} traceContent
 */
async function displayTrace(traceContent) {
  document.documentElement.className = 'state--viewing';

  // Create and show the progress dialog
  const {dialog} = createProgressDialog(['Converting', 'Reticulating trace splines'], 2000);
  document.body.appendChild(dialog);
  dialog.showModal();


  let parsed = JSON.parse(traceContent);
  if (Array.isArray(parsed.entries)) {
    console.log('Received fieldtrace: ', parsed);
    const mainUrl = parsed.entries.filter(e => e.entryType === 'navigation')?.at(-1).name;
    const origin = URL.parse(mainUrl)?.origin?.replace('https://','').replace('http://','').replace('www.','');
    if (origin) {
      document.title = `${origin} | fieldtrace`;
    }
    // It's a fieldtrace. Convert!
    console.log('Dynamically importing fieldtrace-convert.js...');
    // @ts-expect-error - fieldtrace-convert.js is compiled and copied to dist/ at build time
    const { toTrace } = await import('./fieldtrace-convert.js');
    parsed = toTrace(parsed);
    console.log('Converted to trace format', parsed);
  } else {
    console.log('Already in trace format:', parsed);
  }
  const traceJson = JSON.stringify(parsed);

  const iframe = $('iframe#ifr-dt');
  iframe.src = `${devtoolsBaseUrl}`; // ?loadTimelineFromURL=data:

  await new Promise(resolve => {iframe.onload = resolve});
  await iframeReady;
  // just a lil bit more.
  await new Promise(resolve => setTimeout(resolve, 500));

  // Close and remove the progress dialog
  dialog.close();
  dialog.remove();

  // Thanks Sam! https://crrev.com/c/7076796 "Add targetOrigin parameter to postMessage in RehydratingConnection (7076796)"
  iframe.contentWindow?.postMessage({type: 'REHYDRATING_TRACE_FILE', traceJson}, '*');
}


async function readParams() {
  const url = URL.parse(location.href);
  const fieldTrace = url?.searchParams.get('fieldtrace');
  if (!fieldTrace) return;

  await fetch(fieldTrace).then(r => r.text()).then(displayTrace);
}

/**
 * @param {FileList|null} fileList
 */
async function handleFile(fileList) {
  if (!fileList || fileList.length === 0) return;
  if (fileList.length !== 1) {
    throw console.error('Can only upload 1 trace at a time');
  }
  const fileItem = fileList[0];

  const traceBuffer = await fileItem.arrayBuffer();
  const traceContent = await arrayBufferToString(traceBuffer);
  displayTrace(traceContent);
}

$('.toolbar-button--home').addEventListener('click', e => {
  e.preventDefault();
  location.href = '/view/';
});

setupDragAndDrop(handleFile);
readParams(); // Handle permalinks and load stuff
setupFileInput(handleFile);


// Handle pasting of trace file contents.
document.body.addEventListener('paste', async e => {
  const pastedText = e.clipboardData?.getData('text/plain');
  if (!pastedText) return;
  if (!(pastedText.startsWith('[') || pastedText.startsWith('{'))) return;

  displayTrace(pastedText);
});

// If anyone opens trace.cafe as a popup, inform them
window.addEventListener('load', _ => {
  window.opener?.postMessage('CAFEOPEN', '*');
});

// Allow receiving traces over postMessage
window.addEventListener('message', async e => {
  const msg = e.data.msg ?? e.data;
  const data = e.data.data;
  console.log('postMessage received', msg, data && Object.keys(data).length ? 'with data' : '');

  switch (msg) {
    case 'PING':
      e.source?.postMessage('PONG', {targetOrigin: e.origin});
      break;
    case 'VIEW':
      await displayTrace(data);
      e.source?.postMessage({msg: 'UPLOADCOMPLETE'}, {targetOrigin: e.origin});
      break;
    case 'UPLOADCOMPLETE-softnav':
      console.log('Trace sent to softnav viewer!')
      break;
    default:
  }
});
