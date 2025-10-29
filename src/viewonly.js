import {setupDragAndDrop} from './dragndrop.js';
import {arrayBufferToString} from './trace-compression.js';

const chromiumHashVer = ['afb989e0e1cd54ffc8edd6b4865e32aef9ae3245', '143.0.7494.0'];
const devtoolsBaseUrl = `https://chrome-devtools-frontend.appspot.com/serve_rev/@${chromiumHashVer[0]}/trace_app.html`;

/**
 * Guaranteed context.querySelector. Always returns an element or throws if nothing matches query.
 * @template {string} T
 * @param {T} query
 * @param {ParentNode=} context
 * @return {import('typed-query-selector/parser').ParseSelector<T, Element>}
 */
globalThis.$ = function (query, context) {
  const result = (context || document).querySelector(query);
  if (result === null) {
    throw new Error(`query ${query} not found`);
  }
  return /** @type {import('typed-query-selector/parser').ParseSelector<T, Element>} */ (result);
};


const iframeReady = new Promise(resolve => {
  window.addEventListener('message', e => {
    if (e.data.type === 'REHYDRATING_IFRAME_READY') {
      resolve(void 0);
    }
  });
});


/**
 * @returns {{dialog: HTMLDialogElement, progress: HTMLProgressElement}}
 */
function createProgressDialog() {
  const dialog = document.createElement('dialog');
  dialog.id = 'progress-dialog';
  dialog.style.cssText = `
    color-scheme: light dark;
    inset: 0.5rem;
    margin: auto;
    position: fixed;
    border: 1px solid #ccc;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    background-color: light-dark(#efefec, #333b3c);
    color: light-dark(#333b3c, #efefec);
    border-radius: 8px;
    z-index: 1000;
  `;

  const p = document.createElement('p');
  p.textContent = 'Status: Reticulating trace splines';

  const progress = document.createElement('progress');
  progress.id = 'trace-progress';
  progress.value = 0;
  progress.max = 100;
  progress.style.width = '300px';

  dialog.appendChild(p);
  dialog.appendChild(progress);

  const animationDuration = 5_000;
  const startTime = performance.now();

  function animateProgress() {
    const elapsed = performance.now() - startTime;
    const progressPct = Math.min(elapsed / animationDuration, 1);
    progress.value = progressPct * 100;
    if (progressPct < 1) requestAnimationFrame(animateProgress);
  }
  requestAnimationFrame(animateProgress);

  return {dialog, progress};
}


/**
 * @param {string} traceContent
 */
async function displayTrace(traceContent) {
  document.documentElement.className = 'state--viewing';

  // Create and show the progress dialog
  const {dialog} = createProgressDialog();
  document.body.appendChild(dialog);
  dialog.showModal();


  let parsed = JSON.parse(traceContent);
  if (Array.isArray(parsed.entries)) {
    const mainUrl = parsed.entries.filter(e => e.entryType === 'navigation')?.at(-1).name;
    const origin = URL.parse(mainUrl)?.origin?.replace('https://','').replace('http://','').replace('www.','');
    if (origin) {
      document.title = `${origin} | fieldtrace`;
    }
    // It's a fieldtrace. Convert!
    parsed = FieldTrace.toTrace(parsed);
  }
  const traceJson = JSON.stringify(parsed);

  const iframe = $('iframe#ifr-dt');
  iframe.src = `${devtoolsBaseUrl}`; // ?loadTimelineFromURL=data:

  await new Promise(resolve => {iframe.onload = resolve});
  await iframeReady;

  // const wait = (ms = 100) => new Promise(resolve => setTimeout(resolve, ms));
  // await wait(1500);

  // Close and remove the progress dialog
  dialog.close();
  dialog.remove();

  // Thanks Sam! https://crrev.com/c/7076796 "Add targetOrigin parameter to postMessage in RehydratingConnection (7076796)"
  iframe.contentWindow?.postMessage({type: 'REHYDRATING_TRACE_FILE', traceJson}, '*');
}


/**
 * @param {File} file
 */
async function handleFile(file) {
  const traceBuffer = await file.arrayBuffer();
  const traceContent = await arrayBufferToString(traceBuffer);
  displayTrace(traceContent);
}

function setupFileInput() {
  const fileinput = $('input#fileinput');
  $('#selectfile').addEventListener('click', e => {
    e.preventDefault();
    fileinput.showPicker();
  });
  fileinput.addEventListener('change', async e => {
    const files = e.target?.files;
    if (!files) return;
    handleFile(files[0]);
  });
}

setupDragAndDrop(handleFile);

setupFileInput();

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
