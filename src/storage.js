import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytesResumable, getDownloadURL, getMetadata, listAll, getStream } from 'firebase/storage';
import {customAlphabet} from 'nanoid';

import { viewTraceFromUrl } from './app';

/** @typedef {import('firebase/storage').UploadMetadata} UploadMetadata */


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


// TODO: need to add FunkedFileReader's gzip support to TimelineLoader.loadFromURL
async function getTraceDlUrl(traceId) {
  console.log('Looking for trace:', traceId);

  const currentRef = (traceId === 'demo') 
    ? ref(storage, `permatraces/demotrace.json`)
    : ref(storage, `traces/${traceId}`);

  // Could use getDownloadURL(currentRef) and getMetadata(currentRef) but at the REST level they're the same request and it adds ~300ms of extra latency
  // So instead we fetch this data ourselves (instead of firebase JS API)
  const bucketPrefix = 'https://firebasestorage.googleapis.com/v0/b/trace-uploading-maybe.appspot.com/o';
  const fileDataUrl = `${bucketPrefix}/${encodeURIComponent(currentRef.fullPath)}`;
  const resp = await fetch(fileDataUrl);
  if (!resp.ok) {
    const err = await resp.json()
    if (err?.error?.code === 404) {
      console.error(`Trace (${traceId}) not found. Perhaps it's been more than 30 days since upload?`);
    } else {
      console.error(err);
    } 
    return {dlurl: undefined, metadata: undefined};
  }
  const fileData = await resp.json()

  const date = new Date(fileData.timeCreated);
  console.log('Trace found in storage.', currentRef.name, 'from', `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`);

  // eg. https://firebasestorage.googleapis.com/v0/b/trace-uploading-maybe.appspot.com/o/traces%2FsfmYyqoGXa?alt=media&token=b9cf1da7-7120-4d3a-8d5b-e9e54146cdf9
  const dlurl = new URL(fileDataUrl);
  dlurl.searchParams.append('alt', 'media');
  dlurl.searchParams.append('token', fileData.downloadTokens);
  const metadata = fileData.customMetadata;

  return {dlurl, metadata};
}

/**
 * 
 * @param {*} fileItem 
 */
function getCuteId(fileItem) {
  const allowedIDCharacters = 'abcdefghijklmnopqrstuvwxyz' + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + '0123456789';
  const nanoid = customAlphabet(allowedIDCharacters, 10);
  return nanoid();
}

/**
 * @param {File} fileItem 
 */
function upload(fileItem) {
  /** @type {UploadMetadata} */
  const metadata = {
    contentType: fileItem.type,
    cacheControl: 'max-age=31536000', // 1yr. https://developer.chrome.com/docs/lighthouse/performance/uses-long-cache-ttl/
    customMetadata: {
      // Readable in `x-goog-meta-oname` response header.
      oName: fileItem.name,
    },
    // contentEncoding: 'br' // Doesn't work right.
  };

  const cuteId = getCuteId(fileItem);
  const storageRef = ref(storage, `traces/${cuteId}`);
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
      console.debug('upload complete', uploadTask.snapshot.ref, uploadTask);
      console.log('Upload complete', uploadTask.snapshot.ref.name);

      const urlToView = new URL(`/trace/${uploadTask.snapshot.ref.name}`, location.href);
      // pushState is for the birds
      location.href = urlToView.href;

      // Upload completed successfully, now we can get the download URL
      const dlurl = await getDownloadURL(uploadTask.snapshot.ref);
      viewTraceFromUrl(dlurl);
    }
  );
}

export {
  getTraceDlUrl,
  upload
}