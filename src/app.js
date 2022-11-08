

import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytesResumable, getDownloadURL, listAll, getStream } from "firebase/storage";

import { setupDragAndDrop } from './dragndrop';


/** @typedef {import('firebase/storage').UploadMetadata} UploadMetadata */

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjAcwMxZ52x_FTKX7T2zw76WVAhJYraCM",
  authDomain: "trace-uploading-maybe.firebaseapp.com",
  projectId: "trace-uploading-maybe",
  storageBucket: "trace-uploading-maybe.appspot.com",
  messagingSenderId: "421832348775",
  appId: "1:421832348775:web:7a17cdf08288ce90baf0c2",
};


const app = initializeApp(firebaseConfig);


const storage = getStorage(app);


// traceid param (either query param or path param) is a a ref.name

const traceFilename = 'loadingtrace-in-opp.json';
// TODO: need to add FunkedFileReader's gzip support to TimelineLoader.loadFromURL
// const traceFilename = 'cnnindo-click.json.gz';


async function getTraceDlUrl(traceFilename) {
  const dlurl = await getDownloadURL(ref(storage, `${'traces/'}${traceFilename}`));
  return dlurl;
}

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


/**
 * @param {File} fileItem 
 */
function upload(fileItem) {
  // Create the file metadata
  /** @type {UploadMetadata} */
  const metadata = {
    contentType: fileItem.type,
    cacheControl: 'max-age=31536000', // 1yr. https://developer.chrome.com/docs/lighthouse/performance/uses-long-cache-ttl/
    contentEncoding: 'br'
  };

  // Upload file and metadata to the object 'images/mountains.jpg'
  const storageRef = ref(storage, 'traces/' + fileItem.name);
  const uploadTask = uploadBytesResumable(storageRef, fileItem, metadata);

  // Listen for state changes, errors, and completion of the upload.
  uploadTask.on('state_changed',
    (snapshot) => {
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log(`Upload is ${snapshot.state} at ${progress.toLocaleString()}% done.`);
    }, 
    (error) => {
      console.error('Upload error', error);       // https://firebase.google.com/docs/storage/web/handle-errors
    }, 
    async () => {
      console.log('upload complete', uploadTask.snapshot.ref, uploadTask);
      const urlToView = new URL('/', location.href);
      urlToView.searchParams.set('trace', uploadTask.snapshot.ref.name);
      console.log('OK done', urlToView.href);

      history.pushState({}, null, urlToView.href);
      // Upload completed successfully, now we can get the download URL

      const dlurl = await getDownloadURL(uploadTask.snapshot.ref);
      viewTraceFromUrl(dlurl);
    }
  );
}

export {
  getTraceDlUrl,
  viewTraceFromUrl,
  upload,
}
