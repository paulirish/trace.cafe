import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import {customAlphabet} from 'nanoid';
import { compressTrace } from './trace-compression';
import { looksLikeLighthouseLHR, uploadLhr } from './lighthouse-lhr';

/** @typedef {import('firebase/storage').UploadMetadata} UploadMetadata */
/** @typedef {import('firebase/storage').FullMetadata} FullMetadata */



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

/**
 * From the traceId, find the full URL (with token) that'll receive the correct asset.
 * @param {string} traceId 
 */
async function getAssetUrl(traceId) {
  console.log(`Looking for trace with ID:  (${traceId})`);

  const currentRef = (traceId === 'demo') 
    ? ref(storage, `permatraces/7qvReGZ6RU`) // loadingtrace-in-opp. Alternatively `gh-chained.fetches-anno.gz` works as an enhnanced trace.
    : ref(storage, `traces/${traceId}`);

  const bucket =  (traceId === 'demo') 
    ? 'tum-permatraces2'
    : firebaseConfig.storageBucket;

  // Could use getDownloadURL(currentRef) and getMetadata(currentRef) but at the REST level they're the same request and it adds ~300ms of extra latency
  // So instead we fetch this data ourselves (instead of firebase JS API)
  const objectUrlPrefix = `https://firebasestorage.googleapis.com/v0/b/${bucket}/o`;
  const objectDataUrl = `${objectUrlPrefix}/${encodeURIComponent(currentRef.fullPath)}`;
  const resp = await fetch(objectDataUrl);
  if (!resp.ok) {
    const err = await resp.json()
    if (err?.error?.code === 404) {
      console.error(`Trace (${traceId}) not found. Perhaps it's been more than 1 year since upload?`);
    } else {
      console.error(err);
    } 
    return {dlurl: undefined, metadata: undefined};
  }
  /** @type {FullMetadata} */
  const fileData = await resp.json()
  console.log('Trace found in cloud storage.', currentRef.name);

  // eg. https://firebasestorage.googleapis.com/v0/b/trace-uploading-maybe.appspot.com/o/traces%2FsfmYyqoGXa?alt=media&token=b9cf1da7-7120-4d3a-8d5b-e9e54146cdf9
  const assetUrl = new URL(objectDataUrl);
  assetUrl.searchParams.set('alt', 'media');
  assetUrl.searchParams.set('token', fileData.downloadTokens);
  return {assetUrl: assetUrl.href, fileData};
}

/**
 * 
 * @param {*} fileItem 
 */
function getNanoId(fileItem) {
  const allowedIDCharacters = 'abcdefghijklmnopqrstuvwxyz' + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + '0123456789';
  const nanoid = customAlphabet(allowedIDCharacters, 10);
  return nanoid();
}

/**
 * @param {File} fileItem 
 */
async function upload(fileItem) {

  // I see .json.gz as  "application/x-gzip"
  if (!fileItem.type.endsWith('/json') && !fileItem.type.endsWith('gzip') && !fileItem.name.endsWith('.cpuprofile')) {
    throw console.error('Only .json and .json.gz is accepted');
  }

  // if it looks like an LHR, do dat.
  try {
    const lhr = await looksLikeLighthouseLHR(fileItem);
    await uploadLhr(lhr);
    return;
  } catch (e) {
    if (/** @type {Error} */ (e).message.includes('traceish') === false) {
      // Couldn't upload or something
      console.error(e);
      return;
    } else {
      // It wasn't an LHR, let's continue with trace uploading.
    }
  }

  const {encoding, buffer} = await compressTrace(fileItem);

  /** @type {UploadMetadata} */
  const metadata = {
    contentType: 'application/json',
    contentEncoding: encoding === 'gzip' ? 'gzip' : undefined,
    cacheControl: 'max-age=31536000', // 1yr. https://developer.chrome.com/docs/lighthouse/performance/uses-long-cache-ttl/
    customMetadata: {
      // Readable in `x-goog-meta-oname` response header.
      oName: fileItem.name,
    },
  };

  const nanoId = getNanoId(fileItem);
  const storageRef = ref(storage, `traces/${nanoId}`);
  const uploadTask = uploadBytesResumable(storageRef, buffer, metadata);
  const traceViewUrl = new URL(`/t/${uploadTask.snapshot.ref.name}`, location.href);
  let tryCopyToClipboard = true;

  const uploadDone = Promise.withResolvers();

  console.log(`Upload starting… Trace ID: (${nanoId})`);
  // Listen for state changes, errors, and completion of the upload.
  uploadTask.on('state_changed',
    (snapshot) => {
      // Copy link to clipboard
      //    Note to self. any pushState creates history entries and messes with backnav on the iframe.. Its just not worth it.
      if (snapshot.bytesTransferred > 0 && tryCopyToClipboard) {
        navigator.clipboard.writeText(traceViewUrl.href).then(_ => {
          console.log('Trace URL has been copied to your clipboard! 📋');
          tryCopyToClipboard = false;
        }, e => {
          // console.warn(e);
          tryCopyToClipboard = false;
        });
      }

      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log(`Upload ${progress.toLocaleString()}% done. (${snapshot.state})`);
    }, 
    (error) => {
      console.error('Upload error', error);       // https://firebase.google.com/docs/storage/web/handle-errors
      uploadDone.reject(error);
    }, 
    async () => {
      console.log(`Upload complete. Trace ID: (${uploadTask.snapshot.ref.name})`);
      uploadDone.resolve(traceViewUrl);

      console.log('Navigating to', traceViewUrl.href);
      // pushState is for the birds. State-wise this is more straightforward.
      location.href = traceViewUrl.href;
    }
  );

  return uploadDone.promise;
}

export {
  getAssetUrl,
  upload
}
