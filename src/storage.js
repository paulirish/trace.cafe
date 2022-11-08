import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytesResumable, getDownloadURL, listAll, getStream } from "firebase/storage";

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


const traceFilename = 'loadingtrace-in-opp.json';
// TODO: need to add FunkedFileReader's gzip support to TimelineLoader.loadFromURL
// const traceFilename = 'cnnindo-click.json.gz';


async function getTraceDlUrl(traceFilename) {
  const dlurl = await getDownloadURL(ref(storage, `${'traces/'}${traceFilename}`));
  return dlurl;
}



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
  upload
}