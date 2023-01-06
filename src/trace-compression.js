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
  // Already gzip (from NPP or otherwise)
  if (fileItem.type.endsWith('gzip')) {
    const buffer = await normalizeCompressedTrace(fileItem);
    return {
      encoding: 'gzip',
      buffer,
    };
  }
  if (!fileItem.type.endsWith('/json')) {
    throw console.error('Unexpected file type', fileItem);
  }
  // At this point we assume its a trace as JSON, (though we don't explicitly check)
  const textData = await fileItem.text();
  const buffer = await gzipString(textData);
  return {
    encoding: 'gzip',
    buffer,
  };
}

/**
 * NPP traces are {traceEvents, metadata} whereas
 * OPP traces just traceEvent[]
 * @param {File} fileItem
 */
async function normalizeCompressedTrace(fileItem) {
  const gzippedBuffer = await fileItem.arrayBuffer();
  const str = await decodeGzipBufferToString(gzippedBuffer);
  const traceFile = JSON.parse(str);

  // Perhaps someone manually gzipped an OPP trace
  if (Array.isArray(traceFile)) {
    return gzippedBuffer;
  }
  if (traceFile.metadata) {
    console.log('Discovered NPP trace. Massaging it back to canonical trace format.');
    // move NPP metadata into a __metadata event. Why keep it? Just for fun.
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

export {compressTrace};
