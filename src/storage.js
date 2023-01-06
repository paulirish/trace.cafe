import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import {customAlphabet} from 'nanoid';

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
  console.log(`Looking for trace with ID:  (${traceId})`);

  const currentRef = (traceId === 'demo') 
    ? ref(storage, `permatraces/demotrace.json`)
    : ref(storage, `traces/${traceId}`);

  const bucket =  (traceId === 'demo') 
    ? 'tum-permatraces2'
    : firebaseConfig.storageBucket;

  // Could use getDownloadURL(currentRef) and getMetadata(currentRef) but at the REST level they're the same request and it adds ~300ms of extra latency
  // So instead we fetch this data ourselves (instead of firebase JS API)
  // TODO: might have to add timeouts/retries to this. i've seen it hang.
  const fileDataUrl = `https://firebasestorage.googleapis.com/v0/b/${bucket}/o/${encodeURIComponent(currentRef.fullPath)}`;
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

  console.log('Trace found in cloud storage.', currentRef.name);

  // eg. https://firebasestorage.googleapis.com/v0/b/trace-uploading-maybe.appspot.com/o/traces%2FsfmYyqoGXa?alt=media&token=b9cf1da7-7120-4d3a-8d5b-e9e54146cdf9
  const dlurl = new URL(fileDataUrl);
  dlurl.searchParams.append('alt', 'media');
  dlurl.searchParams.append('token', fileData.downloadTokens);

  return {dlurl, fileData};
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
async function upload(fileItem) {

  // I see .json.gz as  "application/x-gzip"
  if (!fileItem.type.endsWith('/json') && !fileItem.type.endsWith('gzip')) {
    throw console.error('Only .json and .json.gz is accepted');
  }

  const {encoding, buffer} = await encodeFileMaybe(fileItem);

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

  const cuteId = getCuteId(fileItem);
  const storageRef = ref(storage, `traces/${cuteId}`);
  const uploadTask = uploadBytesResumable(storageRef, buffer, metadata);

  console.log(`Upload starting… Trace ID: (${cuteId})`);
  // Listen for state changes, errors, and completion of the upload.
  uploadTask.on('state_changed',
    (snapshot) => {
      console.log('state_changed', snapshot.bytesTransferred, snapshot.totalBytes);
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log(`Upload is ${snapshot.state}. ${progress.toLocaleString()}% done.`);
    }, 
    (error) => {
      console.error('Upload error', error);       // https://firebase.google.com/docs/storage/web/handle-errors
    }, 
    async () => {
      console.log(`Upload complete. Trace ID: (${uploadTask.snapshot.ref.name})`);


      const urlToView = new URL(`/t/${uploadTask.snapshot.ref.name}`, location.href);
      console.log('Navigating to', urlToView.href);
      // pushState is for the birds. State-wise this is more straightforward.
      // location.href = urlToView.href;
    }
  );
}



/**
 * thx aerotwist for writing these for NPP!
 * @param {ArrayBuffer} buffer 
 * @param {CompressionStream|DecompressionStream} codecStream 
 * @returns Promise<ArrayBuffer>
 */
function codec(buffer, codecStream)  {
  const {readable, writable} = new TransformStream();
  const codecReadable = readable.pipeThrough(codecStream);

  const writer = writable.getWriter();
  void writer.write(buffer);
  void writer.close();

  // Wrap in a response for convenience.
  const response = new Response(codecReadable);
  return response.arrayBuffer();
}

async function gzipString(str) {
  const encoder = new TextEncoder();
  const encoded = encoder.encode(str);
  const buffer = await codec(encoded, new CompressionStream('gzip'));
  return buffer;
}

async function decodeGzipBufferToString(gzippedBuffer) {
  const buffer =  await codec(gzippedBuffer, new DecompressionStream('gzip'));
  const decoder = new TextDecoder('utf-8');
  const str = decoder.decode(buffer);
  return str;
}


/**
 * @param {File} fileItem
 */
async function encodeFileMaybe(fileItem) {
  // Fallback case for... browser support?
  if (typeof CompressionStream === 'undefined') {
    const buffer = await fileItem.arrayBuffer();
    return {
      encoding: 'text',
      buffer,
    }
  }
  // Already gzip (from NPP or otherwise)
  if (fileItem.type.endsWith('gzip')) {
    const buffer = await normalizeCompressedTrace(fileItem);
    return {
      encoding: 'gzip',
      buffer,
    }
  }
  if (!fileItem.type.endsWith('json')) {
    throw console.error('Unexpected file type', fileItem);
  }
  // 
  const textData = await fileItem.text();
  const buffer = await gzipString(textData);
  return {
    encoding: 'gzip',
    buffer,
  } 
}

/**
 * NPP traces are {traceEvents, metadata} whereas
 * OPP traces just traceEvent[]
 * @param {File} fileItem
 */
async function normalizeCompressedTrace(fileItem) {
  const gzippedBuffer = await fileItem.arrayBuffer();
  const str = await decodeGzipBufferToString(gzippedBuffer);
  const traceFile  = JSON.parse(str);

  // Perhaps someone manually gzipped an OPP trace
  if (Array.isArray(traceFile)) {
    return gzippedBuffer;
  } 
  if (traceFile.metadata) {
    // move NPP metadata into a __metadata event
    const evt = {
      args: traceFile.metadata,
      cat: '__metadata',
      name: 'npp_meta',
      ph: 'M',
      pid: 0,
      tid: 0,
      ts: 0,
    };
    traceFile.traceEvents?.push(evt);
  }
  const updatedEvents = traceFile.traceEvents;
  if (!Array.isArray(updatedEvents)) {
    throw console.error('Unexpected gzip trace file');
  }
  const traceStr = JSON.stringify(updatedEvents);
  const buffer = await gzipString(traceStr);
  return buffer;
}

export {
  getTraceDlUrl,
  upload
}