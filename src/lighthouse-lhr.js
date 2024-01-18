import {getFlowResultFilenamePrefix, getLhrFilenamePrefix} from './third_party/file-namer';
import {uploadLhrToTraceCafe} from './third_party/lhr-storage';

/**
 * Softly and efficently determines if its LHR-y. Returns early if it looks trace-ish.
 * @param {File} fileItem
 * @return {LH.Result|LH.FlowResult}
 */
export async function looksLikeLighthouseLHR(fileItem) {
  if (fileItem.type.endsWith('gzip')) throw Error('traceish. gzip');
  // Bigger than 10MB and no chance its an LHR. Mostly a perf optimization to avoid extra text()/json()
  if (fileItem.size > 10_000_000) throw Error('traceish. larger than 10mb');

  let textData = await fileItem.text();
  if (!textData.includes('fetchTime')) throw Error('traceish. dont see fetchTime in payload');
  let json = JSON.parse(textData);

  // This bit from: viewer/app/src/lighthouse-report-viewer.js
  if ('lhr' in json) {
    const runnerResult = /** @type {{lhr: LH.Result}} */ (/** @type {unknown} */ (json));
    json = runnerResult.lhr;
  }
  // Allow users to drop in PSI's json
  if ('lighthouseResult' in json) {
    const psiResp = /** @type {{lighthouseResult: LH.Result}} */ (/** @type {unknown} */ (json));
    json = psiResp.lighthouseResult;
  }
  // Is this definitely an LHR now?
  if (!('fetchTime' in json)) throw Error('traceish. no fetchTime in JSON');
  console.log('Found Lighthouse LHR.');
  return json;
}

/**
 * @param  {LH.Result|LH.FlowResult} reportJson
 * @return
 */
export async function uploadLhr(reportJson) {
  let filename;
  if ('steps' in reportJson) {
    filename = getFlowResultFilenamePrefix(reportJson);
  } else {
    const finalDisplayedUrl = reportJson.finalDisplayedUrl ?? reportJson.finalUrl;
    filename = getLhrFilenamePrefix({
      finalDisplayedUrl,
      fetchTime: reportJson.fetchTime,
    });
  }
  console.log('Uploading LHR as', filename);
  const id = await uploadLhrToTraceCafe(reportJson, filename);
  console.log('Uploaded', id);

  loadLhrInViewer(id);
}

/**
 * @param {string} id
 */
function loadLhrInViewer(id) {
  const fetchableUrl = `https://firebasestorage.googleapis.com/v0/b/tum-lhrs/o/lhrs%2F${id}?alt=media`;

  const viewer = new URL(`https://googlechrome.github.io/lighthouse/viewer/`);
  viewer.searchParams.set('jsonurl', fetchableUrl);

  console.log('Navigating you to Lighthouse Viewer…');
  document.location.href = viewer.href;
}
