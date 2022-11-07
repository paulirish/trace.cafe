

import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytesResumable, getDownloadURL, listAll, getStream } from "firebase/storage";


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


const traceFilename = 'loadingtrace-in-opp.json';
// TODO: need to add FunkedFileReader's gzip support to TimelineLoader.loadFromURL
// const traceFilename = 'cnnindo-click.json.gz';


const dlurl = await getDownloadURL(ref(storage, `${encodeURIComponent('traces/')}${traceFilename}`));
const iframe = document.querySelector('#ifr');
const encodedDlurl = encodeURIComponent(dlurl);
  // .replace('traces%252F', encodeURIComponent('traces%252F')); // why? dunno.
console.log({encodedDlurl})
// No workie cuz of browser protections on devtools:// URLs
const dtViewingTraceUrl = `devtools://devtools/bundled/devtools_app.html?loadTimelineFromURL=${encodedDlurl}`;
// worker_app has less deps than devtools_app so.. should load faster. dunno if theres a faster one than that
// TODO: find mechanism to update this or make sure it matches the trace version
const hostedDtViewingTraceUrl = `https://chrome-devtools-frontend.appspot.com/serve_rev/@3d5948960d62418160796d5831a4d2d7d6c90fa8/worker_app.html?loadTimelineFromURL=${encodedDlurl}`;

console.log(hostedDtViewingTraceUrl) 
// iframe.src = `devtools://devtools/bundled/devtools_app.html?loadTimelineFromURL=${url}`;
iframe.src = hostedDtViewingTraceUrl;
// document.location.href = dtViewingTraceUrl;

// Create the file metadata
/** @type {any} */
const metadata = {
  contentType: 'image/jpeg'
};

// Upload file and metadata to the object 'images/mountains.jpg'
const storageRef = ref(storage, 'images/' + file.name);
const uploadTask = uploadBytesResumable(storageRef, file, metadata);

// Listen for state changes, errors, and completion of the upload.
uploadTask.on('state_changed',
  (snapshot) => {
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
    }
  }, 
  (error) => {
    // A full list of error codes is available at
    // https://firebase.google.com/docs/storage/web/handle-errors
    switch (error.code) {
      case 'storage/unauthorized':
        // User doesn't have permission to access the object
        break;
      case 'storage/canceled':
        // User canceled the upload
        break;

      // ...

      case 'storage/unknown':
        // Unknown error occurred, inspect error.serverResponse
        break;
    }
  }, 
  () => {
    // Upload completed successfully, now we can get the download URL
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      console.log('File available at', downloadURL);
    });
  }
);
