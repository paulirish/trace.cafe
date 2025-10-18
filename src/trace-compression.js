/**
 * thx aerotwist for writing these for NPP!
 * @param {ArrayBuffer} buffer
 * @param {CompressionStream|DecompressionStream} codecStream
 * @returns Promise<ArrayBuffer>
 */
function codec(buffer, codecStream) {
  const {readable, writable} = new TransformStream();
  const codecReadable = readable.pipeThrough(codecStream);

  const writer = writable.getWriter();
  void writer.write(buffer);
  void writer.close();

  // Wrap in a response for convenience.
  const response = new Response(codecReadable);
  return response.arrayBuffer();
}

/**
 * @param {string} str 
 */
async function gzipString(str) {
  /** @param {number} num */
  const mbStr = num => (num / 1_000_000).toLocaleString() + '\xa0MB';
  console.log('Compressing with gzip…', mbStr(str.length));
  await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));

  const encoder = new TextEncoder();
  const encoded = encoder.encode(str);
  const buffer = await codec(encoded, new CompressionStream('gzip'));

  console.log(`Compressed with gzip. `, mbStr(buffer.byteLength),
    `(${(buffer.byteLength / str.length * 100).toLocaleString()}\xa0% of original)`,
  );
  return buffer;
}

/**
 * @param {ArrayBuffer} gzippedBuffer 
 */
async function decodeGzipBufferToString(gzippedBuffer) {
  console.log('Decompressing gzip data…');
  await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));

  const buffer = await codec(gzippedBuffer, new DecompressionStream('gzip'));
  const decoder = new TextDecoder('utf-8');
  const str = decoder.decode(buffer);
  return str;
}

/**
 * @param {File} fileItem
 */
async function compressTrace(fileItem) {
  // Fallback case for... browser support?
  if (typeof CompressionStream === 'undefined') {
    const buffer = await fileItem.arrayBuffer();
    return {
      encoding: 'text',
      buffer,
    };
  }
  // Already gzip. Let's make sure it looks right and then upload the file as is.
  if (fileItem.type.endsWith('gzip')) {
    const gzippedBuffer = await fileItem.arrayBuffer();
    const textData = await decodeGzipBufferToString(gzippedBuffer);

    await verifyItLooksLikeATrace(textData);
    const buffer = await fileItem.arrayBuffer();
    return {
      encoding: 'gzip',
      buffer,
    };
  }

  // Seems like basic JSON
  let textData = await fileItem.text();
  await verifyItLooksLikeATrace(textData);
  const buffer = await gzipString(textData);
  return {
    encoding: 'gzip',
    buffer,
  };
}

/**
 * Old OPP traces were just `traceEvent[]`, but RPP/NPP/traceviewer traces are `{traceEvents, metadata}`
 * Just basic clientside validation.
 * @param {string} textData
 */
async function verifyItLooksLikeATrace(textData) {
  const traceFile = JSON.parse(textData);

  // Old bare array style.
  if (Array.isArray(traceFile)) {
    if (traceFile[0].cat && traceFile[0].ph) {
      return;
    }
  }
  // Modern style
  if (Array.isArray(traceFile.traceEvents)) {
    return;
  }
  throw console.error('Unexpected gzip trace file');
}

export {compressTrace};
