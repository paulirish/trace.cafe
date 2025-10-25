import {setupDragAndDrop} from './dragndrop';

const chromiumHashVer = ['681dfb8a5521ddd46f837577e3696ca477812f17', '143.0.7485.0'];
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

/**
 * @param {string} traceContent
 */
async function displayTrace(traceContent) {
  document.documentElement.className = 'state--viewing';

  const iframe = $('iframe#ifr-dt');
  iframe.src = `${devtoolsBaseUrl}?loadTimelineFromURL=data:`;

  iframe.onload = () => {
    iframe.contentWindow.postMessage({
      method: 'loadTimelineFromURL',
      params: [traceContent],
    }, '*');
  };
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

window.addEventListener('message', async e => {
  if (e.data.msg === 'PING') {
    e.source?.postMessage('PONG', e.origin);
  }
});
