import {setupDragAndDrop} from './dragndrop';

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
    if (e.data === 'REHYDRATING_IFRAME_READY') {
      console.log('iframe is ready');
      resolve();
    }
  });
});


/**
 * @param {string} traceContent
 */
async function displayTrace(traceContent) {
  document.documentElement.className = 'state--viewing';

  const iframe = $('iframe#ifr-dt');
  iframe.src = `${devtoolsBaseUrl}`; // ?loadTimelineFromURL=data:

  // await new Promise(resolve => {iframe.onload = resolve});
  // await iframeReady;
  const wait = (ms = 100) => new Promise(resolve => setTimeout(resolve, ms));
  await wait(1500);

  // Thanks Sam! https://crrev.com/c/7076796 "Add targetOrigin parameter to postMessage in RehydratingConnection (7076796)"
  iframe.contentWindow?.postMessage({type: 'REHYDRATING_TRACE_FILE', traceJson: traceContent}, '*');
}

/**
 * @param {File} file
 */
async function handleFile(file) {
  const traceContent = await file.text();
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


