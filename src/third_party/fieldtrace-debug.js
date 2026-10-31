"use strict";
(() => {
  // src/collect/sources.js
  async function collectSources() {
    const scripts = Array.from(document.scripts);
    const isTopFrame = window.self === window.top;
    const frameType = isTopFrame ? "page" : "iframe";
    let frameId = "";
    if (isTopFrame) {
      frameId = "_frameid_";
    } else {
      try {
        frameId = window.frameElement?.id ?? "";
        const top = window.top;
        if (!frameId && top) {
          frameId = Object.keys(top).find((idx) => (
            /** @type {any} */
            top[idx] === window.self
          )) ?? "";
        }
      } catch (_e) {
      }
    }
    const p = scripts.map(async (script, i) => {
      let content = script.textContent || "";
      if (!content && script.src) {
        try {
          const res = await fetch(script.src);
          content = res.ok ? await res.text() : "";
        } catch {
        }
      }
      const sourceURLMatch = content.match(/\/\/#\s*sourceURL=([^\s]+)/);
      const sourceMappingURLMatch = content.match(/\/\/#\s*sourceMappingURL=([^\s]+)/);
      const sourceMappingURL = sourceMappingURLMatch?.[1];
      const sourceMapUrl = sourceMappingURL ? sourceMappingURL.startsWith("data:") ? sourceMappingURL : new URL(sourceMappingURL, script.src || location.href).href : void 0;
      return (
        /** @type {Source} */
        {
          url: script.src || `${script.ownerDocument.location.href}(inline-script-${i})`,
          sourceUrl: sourceURLMatch?.[1],
          content: content || void 0,
          // TODO should be number.
          scriptId: i,
          isModule: script.type === "module",
          hasSourceUrl: !!sourceURLMatch,
          sourceMapUrl,
          frameType,
          frameId
        }
      );
    });
    const results = (await Promise.allSettled(p)).flatMap((r) => r.status === "fulfilled" ? r.value : []);
    return results;
  }

  // src/collect/collect.js
  var obs;
  var entries = [];
  var profiler;
  (function start() {
    if (obs) return;
    try {
      profiler = window.Profiler && new window.Profiler({ sampleInterval: 1, maxBufferSize: Number.MAX_SAFE_INTEGER });
    } catch {
    }
    obs = new PerformanceObserver((list) => entries.push(...list.getEntries()));
    for (const type of PerformanceObserver.supportedEntryTypes) {
      obs.observe({ type, buffered: true, durationThreshold: 0, includeSoftNavigationObservations: true });
    }
  })();
  async function finish(options = {}) {
    if (!obs) {
      console.warn("FieldTrace finish() called but not started");
    }
    const profile = await profiler?.stop() ?? void 0;
    entries.push(...obs?.takeRecords() || []);
    obs?.disconnect();
    const result = { entries: Array.from(new Set(entries)), profile };
    if (options.sources) {
      result.sources = await collectSources();
    }
    return result;
  }
  async function toGzipBuffer(fieldTrace) {
    const cs = new Blob([JSON.stringify(fieldTrace)], { type: "application/json" }).stream().pipeThrough(new CompressionStream("gzip"));
    const gzAb = await new Response(cs).arrayBuffer();
    return gzAb;
  }

  // src/collect/entry-debug.js
  async function viewFT(viewerUrl = "https://trace.cafe/viewonly.html") {
    let cafeOpen = false;
    let win = null;
    let payload = null;
    window.addEventListener("message", function onMsg(e) {
      if (e.data === "CAFEOPEN" && e.source === win) {
        window.removeEventListener("message", onMsg);
        cafeOpen = true;
        if (payload) win?.postMessage({ msg: "VIEW", data: payload }, "*");
      }
    });
    win = window.open(viewerUrl, "_blank");
    const ft = await finish();
    if (!win) {
      console.warn("Popup blocked. Run `copy(await stopFT())` and paste into", viewerUrl);
      return ft;
    }
    payload = JSON.stringify(ft);
    if (cafeOpen) {
      win.postMessage({ msg: "VIEW", data: payload }, "*");
    }
    return ft;
  }
  globalThis.FieldTrace = { finish, toGzipBuffer, viewFT };
  globalThis.stopFT = finish;
  globalThis.viewFT = viewFT;
})();
