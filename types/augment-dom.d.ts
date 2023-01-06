

namespace globalThis {
  var CompressionStream: {
    prototype: CompressionStream,
    new (format: string): CompressionStream,
  };

  interface CompressionStream extends GenericTransformStream {
    readonly format: string;
  }

  var DecompressionStream: {
    prototype: DecompressionStream,
    new (format: string): DecompressionStream,
  };

  interface DecompressionStream extends GenericTransformStream {
    readonly format: string;
  }
}
