// trace-enums:trace-enums
var Types = { Events: { "Phase": { "BEGIN": "B", "END": "E", "COMPLETE": "X", "INSTANT": "I", "COUNTER": "C", "ASYNC_NESTABLE_START": "b", "ASYNC_NESTABLE_INSTANT": "n", "ASYNC_NESTABLE_END": "e", "ASYNC_STEP_INTO": "T", "ASYNC_BEGIN": "S", "ASYNC_END": "F", "ASYNC_STEP_PAST": "p", "FLOW_START": "s", "FLOW_STEP": "t", "FLOW_END": "f", "SAMPLE": "P", "OBJECT_CREATED": "N", "OBJECT_SNAPSHOT": "O", "OBJECT_DESTROYED": "D", "METADATA": "M", "MEMORY_DUMP_GLOBAL": "V", "MEMORY_DUMP_PROCESS": "v", "MARK": "R", "CLOCK_SYNC": "c" }, "Name": { "THREAD_NAME": "thread_name", "PROGRAM": "Program", "RUN_TASK": "RunTask", "ASYNC_TASK": "AsyncTask", "RUN_MICROTASKS": "RunMicrotasks", "XHR_LOAD": "XHRLoad", "XHR_READY_STATE_CHANGED": "XHRReadyStateChange", "PARSE_HTML": "ParseHTML", "PARSE_CSS": "ParseAuthorStyleSheet", "COMPILE_CODE": "V8.CompileCode", "COMPILE_MODULE": "V8.CompileModule", "COMPILE": "v8.compile", "COMPILE_SCRIPT": "V8.CompileScript", "OPTIMIZE": "V8.OptimizeCode", "WASM_STREAM_FROM_RESPONSE_CALLBACK": "v8.wasm.streamFromResponseCallback", "WASM_COMPILED_MODULE": "v8.wasm.compiledModule", "WASM_CACHED_MODULE": "v8.wasm.cachedModule", "WASM_MODULE_CACHE_HIT": "v8.wasm.moduleCacheHit", "WASM_MODULE_CACHE_INVALID": "v8.wasm.moduleCacheInvalid", "PROFILE_CALL": "ProfileCall", "EVALUATE_SCRIPT": "EvaluateScript", "FUNCTION_CALL": "FunctionCall", "EVENT_DISPATCH": "EventDispatch", "EVALUATE_MODULE": "v8.evaluateModule", "REQUEST_MAIN_THREAD_FRAME": "RequestMainThreadFrame", "REQUEST_ANIMATION_FRAME": "RequestAnimationFrame", "CANCEL_ANIMATION_FRAME": "CancelAnimationFrame", "FIRE_ANIMATION_FRAME": "FireAnimationFrame", "REQUEST_IDLE_CALLBACK": "RequestIdleCallback", "CANCEL_IDLE_CALLBACK": "CancelIdleCallback", "FIRE_IDLE_CALLBACK": "FireIdleCallback", "TIMER_INSTALL": "TimerInstall", "TIMER_REMOVE": "TimerRemove", "TIMER_FIRE": "TimerFire", "WEB_SOCKET_CREATE": "WebSocketCreate", "WEB_SOCKET_SEND_HANDSHAKE": "WebSocketSendHandshakeRequest", "WEB_SOCKET_RECEIVE_HANDSHAKE": "WebSocketReceiveHandshakeResponse", "WEB_SOCKET_DESTROY": "WebSocketDestroy", "WEB_SOCKET_SEND": "WebSocketSend", "WEB_SOCKET_RECEIVE": "WebSocketReceive", "CRYPTO_DO_ENCRYPT": "DoEncrypt", "CRYPTO_DO_ENCRYPT_REPLY": "DoEncryptReply", "CRYPTO_DO_DECRYPT": "DoDecrypt", "CRYPTO_DO_DECRYPT_REPLY": "DoDecryptReply", "CRYPTO_DO_DIGEST": "DoDigest", "CRYPTO_DO_DIGEST_REPLY": "DoDigestReply", "CRYPTO_DO_SIGN": "DoSign", "CRYPTO_DO_SIGN_REPLY": "DoSignReply", "CRYPTO_DO_VERIFY": "DoVerify", "CRYPTO_DO_VERIFY_REPLY": "DoVerifyReply", "V8_EXECUTE": "V8.Execute", "V8_CONSOLE_RUN_TASK": "V8Console::runTask", "SCHEDULE_POST_TASK_CALLBACK": "SchedulePostTaskCallback", "RUN_POST_TASK_CALLBACK": "RunPostTaskCallback", "ABORT_POST_TASK_CALLBACK": "AbortPostTaskCallback", "DEBUGGER_ASYNC_TASK_RUN": "v8::Debugger::AsyncTaskRun", "DEBUGGER_ASYNC_TASK_SCHEDULED": "v8::Debugger::AsyncTaskScheduled", "GC": "GCEvent", "DOMGC": "BlinkGC.AtomicPhase", "MAJOR_GC": "MajorGC", "MINOR_GC": "MinorGC", "GC_COLLECT_GARBARGE": "BlinkGC.AtomicPhase", "CPPGC_SWEEP": "CppGC.IncrementalSweep", "SCHEDULE_STYLE_RECALCULATION": "ScheduleStyleRecalculation", "LAYOUT": "Layout", "RECALC_STYLE": "UpdateLayoutTree", "INVALIDATE_LAYOUT": "InvalidateLayout", "LAYOUT_INVALIDATION_TRACKING": "LayoutInvalidationTracking", "COMPUTE_INTERSECTION": "ComputeIntersections", "HIT_TEST": "HitTest", "PRE_PAINT": "PrePaint", "LAYERIZE": "Layerize", "LAYOUT_SHIFT": "LayoutShift", "SYNTHETIC_LAYOUT_SHIFT": "SyntheticLayoutShift", "SYNTHETIC_LAYOUT_SHIFT_CLUSTER": "SyntheticLayoutShiftCluster", "UPDATE_LAYER_TREE": "UpdateLayerTree", "SCHEDULE_STYLE_INVALIDATION_TRACKING": "ScheduleStyleInvalidationTracking", "STYLE_RECALC_INVALIDATION_TRACKING": "StyleRecalcInvalidationTracking", "STYLE_INVALIDATOR_INVALIDATION_TRACKING": "StyleInvalidatorInvalidationTracking", "SELECTOR_STATS": "SelectorStats", "BEGIN_COMMIT_COMPOSITOR_FRAME": "BeginCommitCompositorFrame", "PARSE_META_VIEWPORT": "ParseMetaViewport", "META_CHARSET_CHECK": "MetaCharsetCheck", "SCROLL_LAYER": "ScrollLayer", "UPDATE_LAYER": "UpdateLayer", "PAINT_SETUP": "PaintSetup", "PAINT": "Paint", "PAINT_IMAGE": "PaintImage", "COMMIT": "Commit", "COMPOSITE_LAYERS": "CompositeLayers", "RASTER_TASK": "RasterTask", "IMAGE_DECODE_TASK": "ImageDecodeTask", "IMAGE_UPLOAD_TASK": "ImageUploadTask", "DECODE_IMAGE": "Decode Image", "DRAW_LAZY_PIXEL_REF": "Draw LazyPixelRef", "DECODE_LAZY_PIXEL_REF": "Decode LazyPixelRef", "GPU_TASK": "GPUTask", "RASTERIZE": "Rasterize", "EVENT_TIMING": "EventTiming", "OPTIMIZE_CODE": "V8.OptimizeCode", "CACHE_SCRIPT": "v8.produceCache", "CACHE_MODULE": "v8.produceModuleCache", "V8_SAMPLE": "V8Sample", "JIT_CODE_ADDED": "JitCodeAdded", "JIT_CODE_MOVED": "JitCodeMoved", "STREAMING_COMPILE_SCRIPT": "v8.parseOnBackground", "STREAMING_COMPILE_SCRIPT_WAITING": "v8.parseOnBackgroundWaiting", "STREAMING_COMPILE_SCRIPT_PARSING": "v8.parseOnBackgroundParsing", "BACKGROUND_DESERIALIZE": "v8.deserializeOnBackground", "FINALIZE_DESERIALIZATION": "V8.FinalizeDeserialization", "COMMIT_LOAD": "CommitLoad", "MARK_LOAD": "MarkLoad", "MARK_DOM_CONTENT": "MarkDOMContent", "MARK_FIRST_PAINT": "firstPaint", "MARK_FCP": "firstContentfulPaint", "MARK_SOFT_FCP": "SyntheticSoftFirstContentfulPaint", "MARK_LCP_CANDIDATE": "largestContentfulPaint::Candidate", "MARK_LCP_CANDIDATE_FOR_SOFT_NAVIGATION": "largestContentfulPaint::CandidateForSoftNavigation", "MARK_LCP_INVALIDATE": "largestContentfulPaint::Invalidate", "NAVIGATION_START": "navigationStart", "SOFT_NAVIGATION_START": "SoftNavigationStart", "CONSOLE_TIME": "ConsoleTime", "USER_TIMING": "UserTiming", "INTERACTIVE_TIME": "InteractiveTime", "TIME_STAMP": "TimeStamp", "BEGIN_FRAME": "BeginFrame", "NEEDS_BEGIN_FRAME_CHANGED": "NeedsBeginFrameChanged", "BEGIN_MAIN_THREAD_FRAME": "BeginMainThreadFrame", "ACTIVATE_LAYER_TREE": "ActivateLayerTree", "DRAW_FRAME": "DrawFrame", "DROPPED_FRAME": "DroppedFrame", "FRAME_STARTED_LOADING": "FrameStartedLoading", "PIPELINE_REPORTER": "PipelineReporter", "SCREENSHOT": "Screenshot", "RESOURCE_WILL_SEND_REQUEST": "ResourceWillSendRequest", "RESOURCE_SEND_REQUEST": "ResourceSendRequest", "RESOURCE_RECEIVE_RESPONSE": "ResourceReceiveResponse", "RESOURCE_RECEIVE_DATA": "ResourceReceivedData", "RESOURCE_FINISH": "ResourceFinish", "RESOURCE_MARK_AS_CACHED": "ResourceMarkAsCached", "WEB_SOCKET_SEND_HANDSHAKE_REQUEST": "WebSocketSendHandshakeRequest", "WEB_SOCKET_RECEIVE_HANDSHAKE_REQUEST": "WebSocketReceiveHandshakeResponse", "CPU_PROFILE": "CpuProfile", "PROFILE": "Profile", "START_PROFILING": "CpuProfiler::StartProfiling", "PROFILE_CHUNK": "ProfileChunk", "UPDATE_COUNTERS": "UpdateCounters", "JS_SAMPLE": "JSSample", "ANIMATION": "Animation", "PARSE_AUTHOR_STYLE_SHEET": "ParseAuthorStyleSheet", "EMBEDDER_CALLBACK": "EmbedderCallback", "SET_LAYER_TREE_ID": "SetLayerTreeId", "TRACING_STARTED_IN_PAGE": "TracingStartedInPage", "TRACING_STARTED_IN_BROWSER": "TracingStartedInBrowser", "TRACING_SESSION_ID_FOR_WORKER": "TracingSessionIdForWorker", "LAZY_PIXEL_REF": "LazyPixelRef", "LAYER_TREE_HOST_IMPL_SNAPSHOT": "cc::LayerTreeHostImpl", "PICTURE_SNAPSHOT": "cc::Picture", "LEGACY_DISPLAY_ITEM_LIST_SNAPSHOT": "cc::DisplayItemList", "DISPLAY_ITEM_LIST_SNAPSHOT": "cc::DisplayItemList:snapshot", "INPUT_LATENCY_MOUSE_MOVE": "InputLatency::MouseMove", "INPUT_LATENCY_MOUSE_WHEEL": "InputLatency::MouseWheel", "IMPL_SIDE_FLING": "InputHandlerProxy::HandleGestureFling::started", "SCHEDULE_POST_MESSAGE": "SchedulePostMessage", "HANDLE_POST_MESSAGE": "HandlePostMessage", "RENDER_FRAME_IMPL_CREATE_CHILD_FRAME": "RenderFrameImpl::createChildFrame", "LAYOUT_IMAGE_UNSIZED": "LayoutImageUnsized", "DOM_LOADING": "domLoading", "BEGIN_REMOTE_FONT_LOAD": "BeginRemoteFontLoad", "REMOTE_FONT_LOADED": "RemoteFontLoaded", "ANIMATION_FRAME": "AnimationFrame", "ANIMATION_FRAME_PRESENTATION": "AnimationFrame::Presentation", "SYNTHETIC_NETWORK_REQUEST": "SyntheticNetworkRequest", "USER_TIMING_MEASURE": "UserTiming::Measure", "LINK_PRECONNECT": "LinkPreconnect", "PRELOAD_RENDER_BLOCKING_STATUS_CHANGE": "PreloadRenderBlockingStatusChange" }, "Scope": { "THREAD": "t", "PROCESS": "p", "GLOBAL": "g" } } };

// src/convert/cpuprofile.js
var roundOff = (num) => Math.floor(num * 1e3) / 1e3;
function buildNodes(selfProfile) {
  const nodes = [];
  const _stackIdToNode = /* @__PURE__ */ new Map();
  const scriptId0 = (
    /** @type {Protocol.Runtime.ScriptId} */
    "0"
  );
  const rootNode = { callFrame: { codeType: "other", functionName: "(root)", scriptId: scriptId0 }, id: 1 };
  const programNode = {
    callFrame: { codeType: "other", functionName: "(program)", scriptId: scriptId0 },
    id: 2,
    parent: 1
  };
  const idleNode = { callFrame: { codeType: "other", functionName: "(idle)", scriptId: scriptId0 }, id: 3, parent: 1 };
  nodes.push(rootNode, programNode, idleNode);
  const nodeIdOffset = nodes.length + 1;
  selfProfile.stacks.forEach((stack, stackId) => {
    const frame = selfProfile.frames[stack.frameId];
    const node = {
      callFrame: {
        // @ts-expect-error protocol types are missing codeType attribute
        codeType: "JS",
        functionName: frame.name
      },
      id: stackId + nodeIdOffset
    };
    if ("column" in frame) node.callFrame.columnNumber = frame.column - 1;
    if ("line" in frame) node.callFrame.lineNumber = frame.line - 1;
    if (typeof frame.resourceId !== "undefined") {
      node.callFrame.url = selfProfile.resources[frame.resourceId];
      node.callFrame.scriptId = /** @type {Protocol.Runtime.ScriptId} */
      `${frame.resourceId + 200}`;
    } else {
      node.callFrame.scriptId = scriptId0;
    }
    _stackIdToNode.set(stackId, node);
    const parentStackId = stack.parentId;
    if (typeof parentStackId !== "undefined") {
      const parentNode = _stackIdToNode.get(parentStackId);
      if (!parentNode) throw new Error("parents should have already been discovered\u2026");
      node.parent = parentNode.id;
    } else {
      node.parent = rootNode.id;
    }
    nodes.push(node);
  });
  return {
    nodes,
    _stackIdToNode,
    // @ts-expect-error missing lineNumber, etc.
    programNode,
    // @ts-expect-error missing lineNumber, etc.
    idleNode
  };
}
function selfProfileToCPUProfile(selfProfile) {
  const { nodes, idleNode, _stackIdToNode } = buildNodes(selfProfile);
  const samples = selfProfile.samples.map((samp) => {
    if (typeof samp.stackId === "undefined") return idleNode.id;
    const matchingNode = _stackIdToNode.get(samp.stackId);
    if (!matchingNode) throw new Error("No stack match for sample");
    return matchingNode.id;
  });
  const timeDeltas = selfProfile.samples.map((samp, i2) => {
    if (i2 === 0) return roundOff(toMicrosec(samp.timestamp));
    const timeDeltaMs = samp.timestamp - selfProfile.samples[i2 - 1].timestamp;
    return roundOff(toMicrosec(timeDeltaMs));
  });
  const crdpProfile = {
    startTime: 0,
    endTime: toMicrosec(selfProfile.samples.reduce((acc, i2) => i2.timestamp > acc ? i2.timestamp : acc, 0)),
    nodes,
    samples,
    timeDeltas
  };
  return crdpProfile;
}

// src/third_party/mimetypes.js
var mimeLookup = {
  "123": "application/vnd.lotus-1-2-3",
  "210": "model/step",
  "ez": "application/andrew-inset",
  "appinstaller": "application/appinstaller",
  "aw": "application/applixware",
  "appx": "application/appx",
  "appxbundle": "application/appxbundle",
  "atom": "application/atom+xml",
  "atomcat": "application/atomcat+xml",
  "atomdeleted": "application/atomdeleted+xml",
  "atomsvc": "application/atomsvc+xml",
  "dwd": "application/atsc-dwd+xml",
  "held": "application/atsc-held+xml",
  "rsat": "application/atsc-rsat+xml",
  "aml": "application/automationml-aml+xml",
  "amlx": "application/automationml-amlx+zip",
  "bdoc": "application/bdoc",
  "xcs": "application/calendar+xml",
  "ccxml": "application/ccxml+xml",
  "cdfx": "application/cdfx+xml",
  "cdmia": "application/cdmi-capability",
  "cdmic": "application/cdmi-container",
  "cdmid": "application/cdmi-domain",
  "cdmio": "application/cdmi-object",
  "cdmiq": "application/cdmi-queue",
  "cpl": "application/cpl+xml",
  "cu": "application/cu-seeme",
  "cwl": "application/cwl",
  "mpd": "application/dash+xml",
  "mpp": "application/dash-patch+xml",
  "davmount": "application/davmount+xml",
  "dcm": "application/dicom",
  "dbk": "application/docbook+xml",
  "dssc": "application/dssc+der",
  "xdssc": "application/dssc+xml",
  "ecma": "application/ecmascript",
  "emma": "application/emma+xml",
  "emotionml": "application/emotionml+xml",
  "epub": "application/epub+zip",
  "exi": "application/exi",
  "exp": "application/express",
  "fdf": "application/fdf",
  "fdt": "application/fdt+xml",
  "pfr": "application/font-tdpfr",
  "geojson": "application/geo+json",
  "gml": "application/gml+xml",
  "gpx": "application/gpx+xml",
  "gxf": "application/gxf",
  "gz": "application/gzip",
  "hjson": "application/hjson",
  "stk": "application/hyperstudio",
  "ink": "application/inkml+xml",
  "inkml": "application/inkml+xml",
  "ipfix": "application/ipfix",
  "its": "application/its+xml",
  "jar": "application/java-archive",
  "war": "application/java-archive",
  "ear": "application/java-archive",
  "ser": "application/java-serialized-object",
  "class": "application/java-vm",
  "js": "text/javascript",
  "json": "application/json",
  "map": "application/json",
  "json5": "application/json5",
  "jsonml": "application/jsonml+json",
  "jsonld": "application/ld+json",
  "lgr": "application/lgr+xml",
  "lostxml": "application/lost+xml",
  "hqx": "application/mac-binhex40",
  "cpt": "application/mac-compactpro",
  "mads": "application/mads+xml",
  "webmanifest": "application/manifest+json",
  "mrc": "application/marc",
  "mrcx": "application/marcxml+xml",
  "ma": "application/mathematica",
  "nb": "application/mathematica",
  "mb": "application/mathematica",
  "mathml": "application/mathml+xml",
  "mbox": "application/mbox",
  "mpf": "application/media-policy-dataset+xml",
  "mscml": "application/mediaservercontrol+xml",
  "metalink": "application/metalink+xml",
  "meta4": "application/metalink4+xml",
  "mets": "application/mets+xml",
  "maei": "application/mmt-aei+xml",
  "musd": "application/mmt-usd+xml",
  "mods": "application/mods+xml",
  "m21": "application/mp21",
  "mp21": "application/mp21",
  "mp4": "video/mp4",
  "mpg4": "video/mp4",
  "mp4s": "application/mp4",
  "m4p": "application/mp4",
  "msix": "application/msix",
  "msixbundle": "application/msixbundle",
  "doc": "application/msword",
  "dot": "application/msword",
  "mxf": "application/mxf",
  "nq": "application/n-quads",
  "nt": "application/n-triples",
  "cjs": "application/node",
  "bin": "application/octet-stream",
  "dms": "application/octet-stream",
  "lrf": "application/octet-stream",
  "mar": "application/octet-stream",
  "so": "application/octet-stream",
  "dist": "application/octet-stream",
  "distz": "application/octet-stream",
  "pkg": "application/octet-stream",
  "bpk": "application/octet-stream",
  "dump": "application/octet-stream",
  "elc": "application/octet-stream",
  "deploy": "application/octet-stream",
  "exe": "application/x-msdos-program",
  "dll": "application/x-msdownload",
  "deb": "application/x-debian-package",
  "dmg": "application/x-apple-diskimage",
  "iso": "application/x-iso9660-image",
  "img": "application/octet-stream",
  "msi": "application/x-msdownload",
  "msp": "application/octet-stream",
  "msm": "application/octet-stream",
  "buffer": "application/octet-stream",
  "oda": "application/oda",
  "opf": "application/oebps-package+xml",
  "ogx": "application/ogg",
  "omdoc": "application/omdoc+xml",
  "onetoc": "application/onenote",
  "onetoc2": "application/onenote",
  "onetmp": "application/onenote",
  "onepkg": "application/onenote",
  "one": "application/onenote",
  "onea": "application/onenote",
  "oxps": "application/oxps",
  "relo": "application/p2p-overlay+xml",
  "xer": "application/patch-ops-error+xml",
  "pdf": "application/pdf",
  "pgp": "application/pgp-encrypted",
  "asc": "application/pgp-keys",
  "sig": "application/pgp-signature",
  "prf": "application/pics-rules",
  "p10": "application/pkcs10",
  "p7m": "application/pkcs7-mime",
  "p7c": "application/pkcs7-mime",
  "p7s": "application/pkcs7-signature",
  "p8": "application/pkcs8",
  "ac": "application/pkix-attr-cert",
  "cer": "application/pkix-cert",
  "crl": "application/pkix-crl",
  "pkipath": "application/pkix-pkipath",
  "pki": "application/pkixcmp",
  "pls": "application/pls+xml",
  "ai": "application/postscript",
  "eps": "application/postscript",
  "ps": "application/postscript",
  "provx": "application/provenance+xml",
  "cww": "application/prs.cww",
  "xsf": "application/prs.xsf+xml",
  "pskcxml": "application/pskc+xml",
  "raml": "application/raml+yaml",
  "rdf": "application/rdf+xml",
  "owl": "application/rdf+xml",
  "rif": "application/reginfo+xml",
  "rnc": "application/relax-ng-compact-syntax",
  "rl": "application/resource-lists+xml",
  "rld": "application/resource-lists-diff+xml",
  "rs": "application/rls-services+xml",
  "rapd": "application/route-apd+xml",
  "sls": "application/route-s-tsid+xml",
  "rusd": "application/route-usd+xml",
  "gbr": "application/rpki-ghostbusters",
  "mft": "application/rpki-manifest",
  "roa": "application/rpki-roa",
  "rsd": "application/rsd+xml",
  "rss": "application/rss+xml",
  "rtf": "application/rtf",
  "sbml": "application/sbml+xml",
  "scq": "application/scvp-cv-request",
  "scs": "application/scvp-cv-response",
  "spq": "application/scvp-vp-request",
  "spp": "application/scvp-vp-response",
  "sdp": "application/sdp",
  "senmlx": "application/senml+xml",
  "sensmlx": "application/sensml+xml",
  "setpay": "application/set-payment-initiation",
  "setreg": "application/set-registration-initiation",
  "shf": "application/shf+xml",
  "siv": "application/sieve",
  "sieve": "application/sieve",
  "smi": "application/smil+xml",
  "smil": "application/smil+xml",
  "rq": "application/sparql-query",
  "srx": "application/sparql-results+xml",
  "sql": "application/sql",
  "gram": "application/srgs",
  "grxml": "application/srgs+xml",
  "sru": "application/sru+xml",
  "ssdl": "application/ssdl+xml",
  "ssml": "application/ssml+xml",
  "swidtag": "application/swid+xml",
  "tei": "application/tei+xml",
  "teicorpus": "application/tei+xml",
  "tfi": "application/thraud+xml",
  "tsd": "application/timestamped-data",
  "toml": "application/toml",
  "trig": "application/trig",
  "ttml": "application/ttml+xml",
  "ubj": "application/ubjson",
  "rsheet": "application/urc-ressheet+xml",
  "td": "application/urc-targetdesc+xml",
  "1km": "application/vnd.1000minds.decision-model+xml",
  "plb": "application/vnd.3gpp.pic-bw-large",
  "psb": "application/vnd.3gpp.pic-bw-small",
  "pvb": "application/vnd.3gpp.pic-bw-var",
  "tcap": "application/vnd.3gpp2.tcap",
  "pwn": "application/vnd.3m.post-it-notes",
  "aso": "application/vnd.accpac.simply.aso",
  "imp": "application/vnd.accpac.simply.imp",
  "acu": "application/vnd.acucobol",
  "atc": "application/vnd.acucorp",
  "acutc": "application/vnd.acucorp",
  "air": "application/vnd.adobe.air-application-installer-package+zip",
  "fcdt": "application/vnd.adobe.formscentral.fcdt",
  "fxp": "application/vnd.adobe.fxp",
  "fxpl": "application/vnd.adobe.fxp",
  "xdp": "application/vnd.adobe.xdp+xml",
  "xfdf": "application/xfdf",
  "age": "application/vnd.age",
  "ahead": "application/vnd.ahead.space",
  "azf": "application/vnd.airzip.filesecure.azf",
  "azs": "application/vnd.airzip.filesecure.azs",
  "azw": "application/vnd.amazon.ebook",
  "acc": "application/vnd.americandynamics.acc",
  "ami": "application/vnd.amiga.ami",
  "apk": "application/vnd.android.package-archive",
  "cii": "application/vnd.anser-web-certificate-issue-initiation",
  "fti": "application/vnd.anser-web-funds-transfer-initiation",
  "atx": "application/vnd.antix.game-component",
  "mpkg": "application/vnd.apple.installer+xml",
  "key": "application/vnd.apple.keynote",
  "m3u8": "application/vnd.apple.mpegurl",
  "numbers": "application/vnd.apple.numbers",
  "pages": "application/vnd.apple.pages",
  "pkpass": "application/vnd.apple.pkpass",
  "swi": "application/vnd.aristanetworks.swi",
  "iota": "application/vnd.astraea-software.iota",
  "aep": "application/vnd.audiograph",
  "fbx": "application/vnd.autodesk.fbx",
  "bmml": "application/vnd.balsamiq.bmml+xml",
  "mpm": "application/vnd.blueice.multipass",
  "bmi": "application/vnd.bmi",
  "rep": "application/vnd.businessobjects",
  "cdxml": "application/vnd.chemdraw+xml",
  "mmd": "application/vnd.chipnuts.karaoke-mmd",
  "cdy": "application/vnd.cinderella",
  "csl": "application/vnd.citationstyles.style+xml",
  "cla": "application/vnd.claymore",
  "rp9": "application/vnd.cloanto.rp9",
  "c4g": "application/vnd.clonk.c4group",
  "c4d": "application/vnd.clonk.c4group",
  "c4f": "application/vnd.clonk.c4group",
  "c4p": "application/vnd.clonk.c4group",
  "c4u": "application/vnd.clonk.c4group",
  "c11amc": "application/vnd.cluetrust.cartomobile-config",
  "c11amz": "application/vnd.cluetrust.cartomobile-config-pkg",
  "csp": "application/vnd.commonspace",
  "cdbcmsg": "application/vnd.contact.cmsg",
  "cmc": "application/vnd.cosmocaller",
  "clkx": "application/vnd.crick.clicker",
  "clkk": "application/vnd.crick.clicker.keyboard",
  "clkp": "application/vnd.crick.clicker.palette",
  "clkt": "application/vnd.crick.clicker.template",
  "clkw": "application/vnd.crick.clicker.wordbank",
  "wbs": "application/vnd.criticaltools.wbs+xml",
  "pml": "application/vnd.ctc-posml",
  "ppd": "application/vnd.cups-ppd",
  "car": "application/vnd.curl.car",
  "pcurl": "application/vnd.curl.pcurl",
  "dart": "application/vnd.dart",
  "rdz": "application/vnd.data-vision.rdz",
  "dbf": "application/vnd.dbf",
  "dcmp": "application/vnd.dcmp+xml",
  "uvf": "application/vnd.dece.data",
  "uvvf": "application/vnd.dece.data",
  "uvd": "application/vnd.dece.data",
  "uvvd": "application/vnd.dece.data",
  "uvt": "application/vnd.dece.ttml+xml",
  "uvvt": "application/vnd.dece.ttml+xml",
  "uvx": "application/vnd.dece.unspecified",
  "uvvx": "application/vnd.dece.unspecified",
  "uvz": "application/vnd.dece.zip",
  "uvvz": "application/vnd.dece.zip",
  "fe_launch": "application/vnd.denovo.fcselayout-link",
  "dna": "application/vnd.dna",
  "mlp": "application/vnd.dolby.mlp",
  "dpg": "application/vnd.dpgraph",
  "dfac": "application/vnd.dreamfactory",
  "kpxx": "application/vnd.ds-keypoint",
  "ait": "application/vnd.dvb.ait",
  "svc": "application/vnd.dvb.service",
  "geo": "application/vnd.dynageo",
  "mag": "application/vnd.ecowin.chart",
  "nml": "application/vnd.enliven",
  "esf": "application/vnd.epson.esf",
  "msf": "application/vnd.epson.msf",
  "qam": "application/vnd.epson.quickanime",
  "slt": "application/vnd.epson.salt",
  "ssf": "application/vnd.epson.ssf",
  "es3": "application/vnd.eszigno3+xml",
  "et3": "application/vnd.eszigno3+xml",
  "ez2": "application/vnd.ezpix-album",
  "ez3": "application/vnd.ezpix-package",
  "mseed": "application/vnd.fdsn.mseed",
  "seed": "application/vnd.fdsn.seed",
  "dataless": "application/vnd.fdsn.seed",
  "gph": "application/vnd.flographit",
  "ftc": "application/vnd.fluxtime.clip",
  "fm": "application/vnd.framemaker",
  "frame": "application/vnd.framemaker",
  "maker": "application/vnd.framemaker",
  "book": "application/vnd.framemaker",
  "fnc": "application/vnd.frogans.fnc",
  "ltf": "application/vnd.frogans.ltf",
  "fsc": "application/vnd.fsc.weblaunch",
  "oas": "application/vnd.fujitsu.oasys",
  "oa2": "application/vnd.fujitsu.oasys2",
  "oa3": "application/vnd.fujitsu.oasys3",
  "fg5": "application/vnd.fujitsu.oasysgp",
  "bh2": "application/vnd.fujitsu.oasysprs",
  "ddd": "application/vnd.fujixerox.ddd",
  "xdw": "application/vnd.fujixerox.docuworks",
  "xbd": "application/vnd.fujixerox.docuworks.binder",
  "fzs": "application/vnd.fuzzysheet",
  "txd": "application/vnd.genomatix.tuxedo",
  "ggb": "application/vnd.geogebra.file",
  "ggs": "application/vnd.geogebra.slides",
  "ggt": "application/vnd.geogebra.tool",
  "gex": "application/vnd.geometry-explorer",
  "gre": "application/vnd.geometry-explorer",
  "gxt": "application/vnd.geonext",
  "g2w": "application/vnd.geoplan",
  "g3w": "application/vnd.geospace",
  "gmx": "application/vnd.gmx",
  "gdoc": "application/vnd.google-apps.document",
  "gdraw": "application/vnd.google-apps.drawing",
  "gform": "application/vnd.google-apps.form",
  "gjam": "application/vnd.google-apps.jam",
  "gmap": "application/vnd.google-apps.map",
  "gslides": "application/vnd.google-apps.presentation",
  "gscript": "application/vnd.google-apps.script",
  "gsite": "application/vnd.google-apps.site",
  "gsheet": "application/vnd.google-apps.spreadsheet",
  "kml": "application/vnd.google-earth.kml+xml",
  "kmz": "application/vnd.google-earth.kmz",
  "xdcf": "application/vnd.gov.sk.xmldatacontainer+xml",
  "gqf": "application/vnd.grafeq",
  "gqs": "application/vnd.grafeq",
  "gac": "application/vnd.groove-account",
  "ghf": "application/vnd.groove-help",
  "gim": "application/vnd.groove-identity-message",
  "grv": "application/vnd.groove-injector",
  "gtm": "application/vnd.groove-tool-message",
  "tpl": "application/vnd.groove-tool-template",
  "vcg": "application/vnd.groove-vcard",
  "hal": "application/vnd.hal+xml",
  "zmm": "application/vnd.handheld-entertainment+xml",
  "hbci": "application/vnd.hbci",
  "les": "application/vnd.hhe.lesson-player",
  "hpgl": "application/vnd.hp-hpgl",
  "hpid": "application/vnd.hp-hpid",
  "hps": "application/vnd.hp-hps",
  "jlt": "application/vnd.hp-jlyt",
  "pcl": "application/vnd.hp-pcl",
  "pclxl": "application/vnd.hp-pclxl",
  "sfd-hdstx": "application/vnd.hydrostatix.sof-data",
  "mpy": "application/vnd.ibm.minipay",
  "afp": "application/vnd.ibm.modcap",
  "listafp": "application/vnd.ibm.modcap",
  "list3820": "application/vnd.ibm.modcap",
  "irm": "application/vnd.ibm.rights-management",
  "sc": "application/vnd.ibm.secure-container",
  "icc": "application/vnd.iccprofile",
  "icm": "application/vnd.iccprofile",
  "igl": "application/vnd.igloader",
  "ivp": "application/vnd.immervision-ivp",
  "ivu": "application/vnd.immervision-ivu",
  "igm": "application/vnd.insors.igm",
  "xpw": "application/vnd.intercon.formnet",
  "xpx": "application/vnd.intercon.formnet",
  "i2g": "application/vnd.intergeo",
  "qbo": "application/vnd.intu.qbo",
  "qfx": "application/vnd.intu.qfx",
  "rcprofile": "application/vnd.ipunplugged.rcprofile",
  "irp": "application/vnd.irepository.package+xml",
  "xpr": "application/vnd.is-xpr",
  "fcs": "application/vnd.isac.fcs",
  "jam": "application/vnd.jam",
  "rms": "application/vnd.jcp.javame.midlet-rms",
  "jisp": "application/vnd.jisp",
  "joda": "application/vnd.joost.joda-archive",
  "ktz": "application/vnd.kahootz",
  "ktr": "application/vnd.kahootz",
  "karbon": "application/vnd.kde.karbon",
  "chrt": "application/vnd.kde.kchart",
  "kfo": "application/vnd.kde.kformula",
  "flw": "application/vnd.kde.kivio",
  "kon": "application/vnd.kde.kontour",
  "kpr": "application/vnd.kde.kpresenter",
  "kpt": "application/vnd.kde.kpresenter",
  "ksp": "application/vnd.kde.kspread",
  "kwd": "application/vnd.kde.kword",
  "kwt": "application/vnd.kde.kword",
  "htke": "application/vnd.kenameaapp",
  "kia": "application/vnd.kidspiration",
  "kne": "application/vnd.kinar",
  "knp": "application/vnd.kinar",
  "skp": "application/vnd.koan",
  "skd": "application/vnd.koan",
  "skt": "application/vnd.koan",
  "skm": "application/vnd.koan",
  "sse": "application/vnd.kodak-descriptor",
  "lasxml": "application/vnd.las.las+xml",
  "lbd": "application/vnd.llamagraphics.life-balance.desktop",
  "lbe": "application/vnd.llamagraphics.life-balance.exchange+xml",
  "apr": "application/vnd.lotus-approach",
  "pre": "application/vnd.lotus-freelance",
  "nsf": "application/vnd.lotus-notes",
  "org": "application/vnd.lotus-organizer",
  "scm": "application/vnd.lotus-screencam",
  "lwp": "application/vnd.lotus-wordpro",
  "portpkg": "application/vnd.macports.portpkg",
  "mvt": "application/vnd.mapbox-vector-tile",
  "mcd": "application/vnd.mcd",
  "mc1": "application/vnd.medcalcdata",
  "cdkey": "application/vnd.mediastation.cdkey",
  "mwf": "application/vnd.mfer",
  "mfm": "application/vnd.mfmp",
  "flo": "application/vnd.micrografx.flo",
  "igx": "application/vnd.micrografx.igx",
  "mif": "application/vnd.mif",
  "daf": "application/vnd.mobius.daf",
  "dis": "application/vnd.mobius.dis",
  "mbk": "application/vnd.mobius.mbk",
  "mqy": "application/vnd.mobius.mqy",
  "msl": "application/vnd.mobius.msl",
  "plc": "application/vnd.mobius.plc",
  "txf": "application/vnd.mobius.txf",
  "mpn": "application/vnd.mophun.application",
  "mpc": "application/vnd.mophun.certificate",
  "xul": "application/vnd.mozilla.xul+xml",
  "cil": "application/vnd.ms-artgalry",
  "cab": "application/vnd.ms-cab-compressed",
  "xls": "application/vnd.ms-excel",
  "xlm": "application/vnd.ms-excel",
  "xla": "application/vnd.ms-excel",
  "xlc": "application/vnd.ms-excel",
  "xlt": "application/vnd.ms-excel",
  "xlw": "application/vnd.ms-excel",
  "xlam": "application/vnd.ms-excel.addin.macroenabled.12",
  "xlsb": "application/vnd.ms-excel.sheet.binary.macroenabled.12",
  "xlsm": "application/vnd.ms-excel.sheet.macroenabled.12",
  "xltm": "application/vnd.ms-excel.template.macroenabled.12",
  "eot": "application/vnd.ms-fontobject",
  "chm": "application/vnd.ms-htmlhelp",
  "ims": "application/vnd.ms-ims",
  "lrm": "application/vnd.ms-lrm",
  "thmx": "application/vnd.ms-officetheme",
  "msg": "application/vnd.ms-outlook",
  "cat": "application/vnd.ms-pki.seccat",
  "stl": "model/stl",
  "ppt": "application/vnd.ms-powerpoint",
  "pps": "application/vnd.ms-powerpoint",
  "pot": "application/vnd.ms-powerpoint",
  "ppam": "application/vnd.ms-powerpoint.addin.macroenabled.12",
  "pptm": "application/vnd.ms-powerpoint.presentation.macroenabled.12",
  "sldm": "application/vnd.ms-powerpoint.slide.macroenabled.12",
  "ppsm": "application/vnd.ms-powerpoint.slideshow.macroenabled.12",
  "potm": "application/vnd.ms-powerpoint.template.macroenabled.12",
  "mpt": "application/vnd.ms-project",
  "vdx": "application/vnd.ms-visio.viewer",
  "docm": "application/vnd.ms-word.document.macroenabled.12",
  "dotm": "application/vnd.ms-word.template.macroenabled.12",
  "wps": "application/vnd.ms-works",
  "wks": "application/vnd.ms-works",
  "wcm": "application/vnd.ms-works",
  "wdb": "application/vnd.ms-works",
  "wpl": "application/vnd.ms-wpl",
  "xps": "application/vnd.ms-xpsdocument",
  "mseq": "application/vnd.mseq",
  "mus": "application/vnd.musician",
  "msty": "application/vnd.muvee.style",
  "taglet": "application/vnd.mynfc",
  "bdo": "application/vnd.nato.bindingdataobject+xml",
  "nlu": "application/vnd.neurolanguage.nlu",
  "ntf": "application/vnd.nitf",
  "nitf": "application/vnd.nitf",
  "nnd": "application/vnd.noblenet-directory",
  "nns": "application/vnd.noblenet-sealer",
  "nnw": "application/vnd.noblenet-web",
  "ngdat": "application/vnd.nokia.n-gage.data",
  "n-gage": "application/vnd.nokia.n-gage.symbian.install",
  "rpst": "application/vnd.nokia.radio-preset",
  "rpss": "application/vnd.nokia.radio-presets",
  "edm": "application/vnd.novadigm.edm",
  "edx": "application/vnd.novadigm.edx",
  "ext": "application/vnd.novadigm.ext",
  "odc": "application/vnd.oasis.opendocument.chart",
  "otc": "application/vnd.oasis.opendocument.chart-template",
  "odb": "application/vnd.oasis.opendocument.database",
  "odf": "application/vnd.oasis.opendocument.formula",
  "odft": "application/vnd.oasis.opendocument.formula-template",
  "odg": "application/vnd.oasis.opendocument.graphics",
  "otg": "application/vnd.oasis.opendocument.graphics-template",
  "odi": "application/vnd.oasis.opendocument.image",
  "oti": "application/vnd.oasis.opendocument.image-template",
  "odp": "application/vnd.oasis.opendocument.presentation",
  "otp": "application/vnd.oasis.opendocument.presentation-template",
  "ods": "application/vnd.oasis.opendocument.spreadsheet",
  "ots": "application/vnd.oasis.opendocument.spreadsheet-template",
  "odt": "application/vnd.oasis.opendocument.text",
  "odm": "application/vnd.oasis.opendocument.text-master",
  "ott": "application/vnd.oasis.opendocument.text-template",
  "oth": "application/vnd.oasis.opendocument.text-web",
  "xo": "application/vnd.olpc-sugar",
  "dd2": "application/vnd.oma.dd2+xml",
  "obgx": "application/vnd.openblox.game+xml",
  "oxt": "application/vnd.openofficeorg.extension",
  "osm": "application/vnd.openstreetmap.data+xml",
  "pptx": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  "sldx": "application/vnd.openxmlformats-officedocument.presentationml.slide",
  "ppsx": "application/vnd.openxmlformats-officedocument.presentationml.slideshow",
  "potx": "application/vnd.openxmlformats-officedocument.presentationml.template",
  "xlsx": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "xltx": "application/vnd.openxmlformats-officedocument.spreadsheetml.template",
  "docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "dotx": "application/vnd.openxmlformats-officedocument.wordprocessingml.template",
  "mgp": "application/vnd.osgeo.mapguide.package",
  "dp": "application/vnd.osgi.dp",
  "esa": "application/vnd.osgi.subsystem",
  "pdb": "application/vnd.palm",
  "pqa": "application/vnd.palm",
  "oprc": "application/vnd.palm",
  "paw": "application/vnd.pawaafile",
  "str": "application/vnd.pg.format",
  "ei6": "application/vnd.pg.osasli",
  "efif": "application/vnd.picsel",
  "wg": "application/vnd.pmi.widget",
  "plf": "application/vnd.pocketlearn",
  "pbd": "application/vnd.powerbuilder6",
  "box": "application/vnd.previewsystems.box",
  "brushset": "application/vnd.procrate.brushset",
  "brush": "application/vnd.procreate.brush",
  "drm": "application/vnd.procreate.dream",
  "mgz": "application/vnd.proteus.magazine",
  "qps": "application/vnd.publishare-delta-tree",
  "ptid": "application/vnd.pvi.ptid1",
  "xhtm": "application/vnd.pwg-xhtml-print+xml",
  "qxd": "application/vnd.quark.quarkxpress",
  "qxt": "application/vnd.quark.quarkxpress",
  "qwd": "application/vnd.quark.quarkxpress",
  "qwt": "application/vnd.quark.quarkxpress",
  "qxl": "application/vnd.quark.quarkxpress",
  "qxb": "application/vnd.quark.quarkxpress",
  "rar": "application/vnd.rar",
  "bed": "application/vnd.realvnc.bed",
  "mxl": "application/vnd.recordare.musicxml",
  "musicxml": "application/vnd.recordare.musicxml+xml",
  "cryptonote": "application/vnd.rig.cryptonote",
  "cod": "application/vnd.rim.cod",
  "rm": "application/vnd.rn-realmedia",
  "rmvb": "application/vnd.rn-realmedia-vbr",
  "link66": "application/vnd.route66.link66+xml",
  "st": "application/vnd.sailingtracker.track",
  "see": "application/vnd.seemail",
  "sema": "application/vnd.sema",
  "semd": "application/vnd.semd",
  "semf": "application/vnd.semf",
  "ifm": "application/vnd.shana.informed.formdata",
  "itp": "application/vnd.shana.informed.formtemplate",
  "iif": "application/vnd.shana.informed.interchange",
  "ipk": "application/vnd.shana.informed.package",
  "twd": "application/vnd.simtech-mindmapper",
  "twds": "application/vnd.simtech-mindmapper",
  "mmf": "application/vnd.smaf",
  "teacher": "application/vnd.smart.teacher",
  "fo": "application/vnd.software602.filler.form+xml",
  "sdkm": "application/vnd.solent.sdkm+xml",
  "sdkd": "application/vnd.solent.sdkm+xml",
  "dxp": "application/vnd.spotfire.dxp",
  "sfs": "application/vnd.spotfire.sfs",
  "sdc": "application/vnd.stardivision.calc",
  "sda": "application/vnd.stardivision.draw",
  "sdd": "application/vnd.stardivision.impress",
  "smf": "application/vnd.stardivision.math",
  "sdw": "application/vnd.stardivision.writer",
  "vor": "application/vnd.stardivision.writer",
  "sgl": "application/vnd.stardivision.writer-global",
  "smzip": "application/vnd.stepmania.package",
  "sm": "application/vnd.stepmania.stepchart",
  "wadl": "application/vnd.sun.wadl+xml",
  "sxc": "application/vnd.sun.xml.calc",
  "stc": "application/vnd.sun.xml.calc.template",
  "sxd": "application/vnd.sun.xml.draw",
  "std": "application/vnd.sun.xml.draw.template",
  "sxi": "application/vnd.sun.xml.impress",
  "sti": "application/vnd.sun.xml.impress.template",
  "sxm": "application/vnd.sun.xml.math",
  "sxw": "application/vnd.sun.xml.writer",
  "sxg": "application/vnd.sun.xml.writer.global",
  "stw": "application/vnd.sun.xml.writer.template",
  "sus": "application/vnd.sus-calendar",
  "susp": "application/vnd.sus-calendar",
  "svd": "application/vnd.svd",
  "sis": "application/vnd.symbian.install",
  "sisx": "application/vnd.symbian.install",
  "xsm": "application/vnd.syncml+xml",
  "bdm": "application/vnd.syncml.dm+wbxml",
  "xdm": "application/vnd.syncml.dm+xml",
  "ddf": "application/vnd.syncml.dmddf+xml",
  "tao": "application/vnd.tao.intent-module-archive",
  "pcap": "application/vnd.tcpdump.pcap",
  "cap": "application/vnd.tcpdump.pcap",
  "dmp": "application/vnd.tcpdump.pcap",
  "tmo": "application/vnd.tmobile-livetv",
  "tpt": "application/vnd.trid.tpt",
  "mxs": "application/vnd.triscape.mxs",
  "tra": "application/vnd.trueapp",
  "ufd": "application/vnd.ufdl",
  "ufdl": "application/vnd.ufdl",
  "utz": "application/vnd.uiq.theme",
  "umj": "application/vnd.umajin",
  "unityweb": "application/vnd.unity",
  "uoml": "application/vnd.uoml+xml",
  "uo": "application/vnd.uoml+xml",
  "vcx": "application/vnd.vcx",
  "vsd": "application/vnd.visio",
  "vst": "application/vnd.visio",
  "vss": "application/vnd.visio",
  "vsw": "application/vnd.visio",
  "vsdx": "application/vnd.visio",
  "vtx": "application/vnd.visio",
  "vis": "application/vnd.visionary",
  "vsf": "application/vnd.vsf",
  "wbxml": "application/vnd.wap.wbxml",
  "wmlc": "application/vnd.wap.wmlc",
  "wmlsc": "application/vnd.wap.wmlscriptc",
  "wtb": "application/vnd.webturbo",
  "nbp": "application/vnd.wolfram.player",
  "wpd": "application/vnd.wordperfect",
  "wqd": "application/vnd.wqd",
  "stf": "application/vnd.wt.stf",
  "xar": "application/vnd.xara",
  "xfdl": "application/vnd.xfdl",
  "hvd": "application/vnd.yamaha.hv-dic",
  "hvs": "application/vnd.yamaha.hv-script",
  "hvp": "application/vnd.yamaha.hv-voice",
  "osf": "application/vnd.yamaha.openscoreformat",
  "osfpvg": "application/vnd.yamaha.openscoreformat.osfpvg+xml",
  "saf": "application/vnd.yamaha.smaf-audio",
  "spf": "application/vnd.yamaha.smaf-phrase",
  "cmp": "application/vnd.yellowriver-custom-menu",
  "zir": "application/vnd.zul",
  "zirz": "application/vnd.zul",
  "zaz": "application/vnd.zzazz.deck+xml",
  "vxml": "application/voicexml+xml",
  "wasm": "application/wasm",
  "wif": "application/watcherinfo+xml",
  "wgt": "application/widget",
  "hlp": "application/winhlp",
  "wsdl": "application/wsdl+xml",
  "wspolicy": "application/wspolicy+xml",
  "7z": "application/x-7z-compressed",
  "abw": "application/x-abiword",
  "ace": "application/x-ace-compressed",
  "arj": "application/x-arj",
  "aab": "application/x-authorware-bin",
  "x32": "application/x-authorware-bin",
  "u32": "application/x-authorware-bin",
  "vox": "application/x-authorware-bin",
  "aam": "application/x-authorware-map",
  "aas": "application/x-authorware-seg",
  "bcpio": "application/x-bcpio",
  "torrent": "application/x-bittorrent",
  "blend": "application/x-blender",
  "blb": "application/x-blorb",
  "blorb": "application/x-blorb",
  "bz": "application/x-bzip",
  "bz2": "application/x-bzip2",
  "boz": "application/x-bzip2",
  "cbr": "application/x-cbr",
  "cba": "application/x-cbr",
  "cbt": "application/x-cbr",
  "cbz": "application/x-cbr",
  "cb7": "application/x-cbr",
  "vcd": "application/x-cdlink",
  "cfs": "application/x-cfs-compressed",
  "chat": "application/x-chat",
  "pgn": "application/x-chess-pgn",
  "crx": "application/x-chrome-extension",
  "cco": "application/x-cocoa",
  "nsc": "application/x-conference",
  "cpio": "application/x-cpio",
  "csh": "application/x-csh",
  "udeb": "application/x-debian-package",
  "dgc": "application/x-dgc-compressed",
  "dir": "application/x-director",
  "dcr": "application/x-director",
  "dxr": "application/x-director",
  "cst": "application/x-director",
  "cct": "application/x-director",
  "cxt": "application/x-director",
  "w3d": "application/x-director",
  "fgd": "application/x-director",
  "swa": "application/x-director",
  "wad": "application/x-doom",
  "ncx": "application/x-dtbncx+xml",
  "dtb": "application/x-dtbook+xml",
  "res": "application/x-dtbresource+xml",
  "dvi": "application/x-dvi",
  "evy": "application/x-envoy",
  "eva": "application/x-eva",
  "bdf": "application/x-font-bdf",
  "gsf": "application/x-font-ghostscript",
  "psf": "application/x-font-linux-psf",
  "pcf": "application/x-font-pcf",
  "snf": "application/x-font-snf",
  "pfa": "application/x-font-type1",
  "pfb": "application/x-font-type1",
  "pfm": "application/x-font-type1",
  "afm": "application/x-font-type1",
  "arc": "application/x-freearc",
  "spl": "application/x-futuresplash",
  "gca": "application/x-gca-compressed",
  "ulx": "application/x-glulx",
  "gnumeric": "application/x-gnumeric",
  "gramps": "application/x-gramps-xml",
  "gtar": "application/x-gtar",
  "hdf": "application/x-hdf",
  "php": "application/x-httpd-php",
  "install": "application/x-install-instructions",
  "ipynb": "application/x-ipynb+json",
  "jardiff": "application/x-java-archive-diff",
  "jnlp": "application/x-java-jnlp-file",
  "kdbx": "application/x-keepass2",
  "latex": "application/x-latex",
  "luac": "application/x-lua-bytecode",
  "lzh": "application/x-lzh-compressed",
  "lha": "application/x-lzh-compressed",
  "run": "application/x-makeself",
  "mie": "application/x-mie",
  "prc": "model/prc",
  "mobi": "application/x-mobipocket-ebook",
  "application": "application/x-ms-application",
  "lnk": "application/x-ms-shortcut",
  "wmd": "application/x-ms-wmd",
  "wmz": "application/x-ms-wmz",
  "xbap": "application/x-ms-xbap",
  "mdb": "application/x-msaccess",
  "obd": "application/x-msbinder",
  "crd": "application/x-mscardfile",
  "clp": "application/x-msclip",
  "com": "application/x-msdownload",
  "bat": "application/x-msdownload",
  "mvb": "application/x-msmediaview",
  "m13": "application/x-msmediaview",
  "m14": "application/x-msmediaview",
  "wmf": "image/wmf",
  "emf": "image/emf",
  "emz": "application/x-msmetafile",
  "mny": "application/x-msmoney",
  "pub": "application/x-mspublisher",
  "scd": "application/x-msschedule",
  "trm": "application/x-msterminal",
  "wri": "application/x-mswrite",
  "nc": "application/x-netcdf",
  "cdf": "application/x-netcdf",
  "pac": "application/x-ns-proxy-autoconfig",
  "nzb": "application/x-nzb",
  "pl": "application/x-perl",
  "pm": "application/x-perl",
  "p12": "application/x-pkcs12",
  "pfx": "application/x-pkcs12",
  "p7b": "application/x-pkcs7-certificates",
  "spc": "application/x-pkcs7-certificates",
  "p7r": "application/x-pkcs7-certreqresp",
  "rpm": "application/x-redhat-package-manager",
  "ris": "application/x-research-info-systems",
  "sea": "application/x-sea",
  "sh": "application/x-sh",
  "shar": "application/x-shar",
  "swf": "application/x-shockwave-flash",
  "xap": "application/x-silverlight-app",
  "sit": "application/x-stuffit",
  "sitx": "application/x-stuffitx",
  "srt": "application/x-subrip",
  "sv4cpio": "application/x-sv4cpio",
  "sv4crc": "application/x-sv4crc",
  "t3": "application/x-t3vm-image",
  "gam": "application/x-tads",
  "tar": "application/x-tar",
  "tcl": "application/x-tcl",
  "tk": "application/x-tcl",
  "tex": "application/x-tex",
  "tfm": "application/x-tex-tfm",
  "texinfo": "application/x-texinfo",
  "texi": "application/x-texinfo",
  "obj": "model/obj",
  "ustar": "application/x-ustar",
  "hdd": "application/x-virtualbox-hdd",
  "ova": "application/x-virtualbox-ova",
  "ovf": "application/x-virtualbox-ovf",
  "vbox": "application/x-virtualbox-vbox",
  "vbox-extpack": "application/x-virtualbox-vbox-extpack",
  "vdi": "application/x-virtualbox-vdi",
  "vhd": "application/x-virtualbox-vhd",
  "vmdk": "application/x-virtualbox-vmdk",
  "src": "application/x-wais-source",
  "webapp": "application/x-web-app-manifest+json",
  "der": "application/x-x509-ca-cert",
  "crt": "application/x-x509-ca-cert",
  "pem": "application/x-x509-ca-cert",
  "fig": "application/x-xfig",
  "xlf": "application/xliff+xml",
  "xpi": "application/x-xpinstall",
  "xz": "application/x-xz",
  "zip": "application/zip",
  "z1": "application/x-zmachine",
  "z2": "application/x-zmachine",
  "z3": "application/x-zmachine",
  "z4": "application/x-zmachine",
  "z5": "application/x-zmachine",
  "z6": "application/x-zmachine",
  "z7": "application/x-zmachine",
  "z8": "application/x-zmachine",
  "xaml": "application/xaml+xml",
  "xav": "application/xcap-att+xml",
  "xca": "application/xcap-caps+xml",
  "xdf": "application/xcap-diff+xml",
  "xel": "application/xcap-el+xml",
  "xns": "application/xcap-ns+xml",
  "xenc": "application/xenc+xml",
  "xhtml": "application/xhtml+xml",
  "xht": "application/xhtml+xml",
  "xml": "application/xml",
  "xsl": "application/xml",
  "xsd": "application/xml",
  "rng": "application/xml",
  "dtd": "application/xml-dtd",
  "xop": "application/xop+xml",
  "xpl": "application/xproc+xml",
  "xslt": "application/xslt+xml",
  "xspf": "application/xspf+xml",
  "mxml": "application/xv+xml",
  "xhvml": "application/xv+xml",
  "xvml": "application/xv+xml",
  "xvm": "application/xv+xml",
  "yang": "application/yang",
  "yin": "application/yin+xml",
  "lottie": "application/zip+dotlottie",
  "3gpp": "video/3gpp",
  "adts": "audio/aac",
  "aac": "audio/aac",
  "adp": "audio/adpcm",
  "amr": "audio/amr",
  "au": "audio/basic",
  "snd": "audio/basic",
  "mid": "audio/midi",
  "midi": "audio/midi",
  "kar": "audio/midi",
  "rmi": "audio/midi",
  "mxmf": "audio/mobile-xmf",
  "mp3": "audio/mpeg",
  "m4a": "audio/mp4",
  "mp4a": "audio/mp4",
  "m4b": "audio/mp4",
  "mpga": "audio/mpeg",
  "mp2": "audio/mpeg",
  "mp2a": "audio/mpeg",
  "m2a": "audio/mpeg",
  "m3a": "audio/mpeg",
  "oga": "audio/ogg",
  "ogg": "audio/ogg",
  "spx": "audio/ogg",
  "opus": "audio/ogg",
  "s3m": "audio/s3m",
  "sil": "audio/silk",
  "uva": "audio/vnd.dece.audio",
  "uvva": "audio/vnd.dece.audio",
  "eol": "audio/vnd.digital-winds",
  "dra": "audio/vnd.dra",
  "dts": "audio/vnd.dts",
  "dtshd": "audio/vnd.dts.hd",
  "lvp": "audio/vnd.lucent.voice",
  "pya": "audio/vnd.ms-playready.media.pya",
  "ecelp4800": "audio/vnd.nuera.ecelp4800",
  "ecelp7470": "audio/vnd.nuera.ecelp7470",
  "ecelp9600": "audio/vnd.nuera.ecelp9600",
  "rip": "audio/vnd.rip",
  "wav": "audio/wav",
  "weba": "audio/webm",
  "aif": "audio/x-aiff",
  "aiff": "audio/x-aiff",
  "aifc": "audio/x-aiff",
  "caf": "audio/x-caf",
  "flac": "audio/x-flac",
  "mka": "audio/x-matroska",
  "m3u": "audio/x-mpegurl",
  "wax": "audio/x-ms-wax",
  "wma": "audio/x-ms-wma",
  "ram": "audio/x-pn-realaudio",
  "ra": "audio/x-pn-realaudio",
  "rmp": "audio/x-pn-realaudio-plugin",
  "xm": "audio/xm",
  "cdx": "chemical/x-cdx",
  "cif": "chemical/x-cif",
  "cmdf": "chemical/x-cmdf",
  "cml": "chemical/x-cml",
  "csml": "chemical/x-csml",
  "xyz": "chemical/x-xyz",
  "ttc": "font/collection",
  "otf": "font/otf",
  "ttf": "font/ttf",
  "woff": "font/woff",
  "woff2": "font/woff2",
  "exr": "image/aces",
  "apng": "image/apng",
  "avci": "image/avci",
  "avcs": "image/avcs",
  "avif": "image/avif",
  "bmp": "image/bmp",
  "dib": "image/bmp",
  "cgm": "image/cgm",
  "drle": "image/dicom-rle",
  "dpx": "image/dpx",
  "fits": "image/fits",
  "g3": "image/g3fax",
  "gif": "image/gif",
  "heic": "image/heic",
  "heics": "image/heic-sequence",
  "heif": "image/heif",
  "heifs": "image/heif-sequence",
  "hej2": "image/hej2k",
  "ief": "image/ief",
  "jaii": "image/jaii",
  "jais": "image/jais",
  "jls": "image/jls",
  "jp2": "image/jp2",
  "jpg2": "image/jp2",
  "jpg": "image/jpeg",
  "jpeg": "image/jpeg",
  "jpe": "image/jpeg",
  "jph": "image/jph",
  "jhc": "image/jphc",
  "jpm": "image/jpm",
  "jpgm": "image/jpm",
  "jpx": "image/jpx",
  "jpf": "image/jpx",
  "jxl": "image/jxl",
  "jxr": "image/jxr",
  "jxra": "image/jxra",
  "jxrs": "image/jxrs",
  "jxs": "image/jxs",
  "jxsc": "image/jxsc",
  "jxsi": "image/jxsi",
  "jxss": "image/jxss",
  "ktx": "image/ktx",
  "ktx2": "image/ktx2",
  "jfif": "image/pjpeg",
  "png": "image/png",
  "btif": "image/prs.btif",
  "btf": "image/prs.btif",
  "pti": "image/prs.pti",
  "sgi": "image/sgi",
  "svg": "image/svg+xml",
  "svgz": "image/svg+xml",
  "t38": "image/t38",
  "tif": "image/tiff",
  "tiff": "image/tiff",
  "tfx": "image/tiff-fx",
  "psd": "image/vnd.adobe.photoshop",
  "azv": "image/vnd.airzip.accelerator.azv",
  "uvi": "image/vnd.dece.graphic",
  "uvvi": "image/vnd.dece.graphic",
  "uvg": "image/vnd.dece.graphic",
  "uvvg": "image/vnd.dece.graphic",
  "djvu": "image/vnd.djvu",
  "djv": "image/vnd.djvu",
  "sub": "text/vnd.dvb.subtitle",
  "dwg": "image/vnd.dwg",
  "dxf": "image/vnd.dxf",
  "fbs": "image/vnd.fastbidsheet",
  "fpx": "image/vnd.fpx",
  "fst": "image/vnd.fst",
  "mmr": "image/vnd.fujixerox.edmics-mmr",
  "rlc": "image/vnd.fujixerox.edmics-rlc",
  "ico": "image/vnd.microsoft.icon",
  "dds": "image/vnd.ms-dds",
  "mdi": "image/vnd.ms-modi",
  "wdp": "image/vnd.ms-photo",
  "npx": "image/vnd.net-fpx",
  "b16": "image/vnd.pco.b16",
  "tap": "image/vnd.tencent.tap",
  "vtf": "image/vnd.valve.source.texture",
  "wbmp": "image/vnd.wap.wbmp",
  "xif": "image/vnd.xiff",
  "pcx": "image/vnd.zbrush.pcx",
  "webp": "image/webp",
  "3ds": "image/x-3ds",
  "dng": "image/x-adobe-dng",
  "ras": "image/x-cmu-raster",
  "cmx": "image/x-cmx",
  "fh": "image/x-freehand",
  "fhc": "image/x-freehand",
  "fh4": "image/x-freehand",
  "fh5": "image/x-freehand",
  "fh7": "image/x-freehand",
  "jng": "image/x-jng",
  "sid": "image/x-mrsid-image",
  "pic": "image/x-pict",
  "pct": "image/x-pict",
  "pnm": "image/x-portable-anymap",
  "pbm": "image/x-portable-bitmap",
  "pgm": "image/x-portable-graymap",
  "ppm": "image/x-portable-pixmap",
  "rgb": "image/x-rgb",
  "tga": "image/x-tga",
  "xbm": "image/x-xbitmap",
  "xpm": "image/x-xpixmap",
  "xwd": "image/x-xwindowdump",
  "disposition-notification": "message/disposition-notification",
  "u8msg": "message/global",
  "u8dsn": "message/global-delivery-status",
  "u8mdn": "message/global-disposition-notification",
  "u8hdr": "message/global-headers",
  "eml": "message/rfc822",
  "mime": "message/rfc822",
  "mht": "message/rfc822",
  "mhtml": "message/rfc822",
  "wsc": "message/vnd.wfa.wsc",
  "3mf": "model/3mf",
  "gltf": "model/gltf+json",
  "glb": "model/gltf-binary",
  "igs": "model/iges",
  "iges": "model/iges",
  "jt": "model/jt",
  "msh": "model/mesh",
  "mesh": "model/mesh",
  "silo": "model/mesh",
  "mtl": "model/mtl",
  "step": "model/step",
  "stp": "model/step",
  "stpnc": "model/step",
  "p21": "model/step",
  "stpx": "model/step+xml",
  "stpz": "model/step+zip",
  "stpxz": "model/step-xml+zip",
  "u3d": "model/u3d",
  "bary": "model/vnd.bary",
  "cld": "model/vnd.cld",
  "dae": "model/vnd.collada+xml",
  "dwf": "model/vnd.dwf",
  "gdl": "model/vnd.gdl",
  "gtw": "model/vnd.gtw",
  "mts": "video/mp2t",
  "ogex": "model/vnd.opengex",
  "x_b": "model/vnd.parasolid.transmit.binary",
  "x_t": "model/vnd.parasolid.transmit.text",
  "pyo": "model/vnd.pytha.pyox",
  "pyox": "model/vnd.pytha.pyox",
  "vds": "model/vnd.sap.vds",
  "usda": "model/vnd.usda",
  "usdz": "model/vnd.usdz+zip",
  "bsp": "model/vnd.valve.source.compiled-map",
  "vtu": "model/vnd.vtu",
  "wrl": "model/vrml",
  "vrml": "model/vrml",
  "x3db": "model/x3d+fastinfoset",
  "x3dbz": "model/x3d+binary",
  "x3dv": "model/x3d-vrml",
  "x3dvz": "model/x3d+vrml",
  "x3d": "model/x3d+xml",
  "x3dz": "model/x3d+xml",
  "appcache": "text/cache-manifest",
  "manifest": "text/cache-manifest",
  "ics": "text/calendar",
  "ifb": "text/calendar",
  "coffee": "text/coffeescript",
  "litcoffee": "text/coffeescript",
  "css": "text/css",
  "csv": "text/csv",
  "html": "text/html",
  "htm": "text/html",
  "shtml": "text/html",
  "jade": "text/jade",
  "mjs": "text/javascript",
  "jsx": "text/jsx",
  "less": "text/less",
  "md": "text/markdown",
  "markdown": "text/markdown",
  "mml": "text/mathml",
  "mdx": "text/mdx",
  "n3": "text/n3",
  "txt": "text/plain",
  "text": "text/plain",
  "conf": "text/plain",
  "def": "text/plain",
  "list": "text/plain",
  "log": "text/plain",
  "in": "text/plain",
  "ini": "text/plain",
  "dsc": "text/prs.lines.tag",
  "rtx": "text/richtext",
  "sgml": "text/sgml",
  "sgm": "text/sgml",
  "shex": "text/shex",
  "slim": "text/slim",
  "slm": "text/slim",
  "spdx": "text/spdx",
  "stylus": "text/stylus",
  "styl": "text/stylus",
  "tsv": "text/tab-separated-values",
  "t": "text/troff",
  "tr": "text/troff",
  "roff": "text/troff",
  "man": "text/troff",
  "me": "text/troff",
  "ms": "text/troff",
  "ttl": "text/turtle",
  "uri": "text/uri-list",
  "uris": "text/uri-list",
  "urls": "text/uri-list",
  "vcard": "text/vcard",
  "curl": "text/vnd.curl",
  "dcurl": "text/vnd.curl.dcurl",
  "mcurl": "text/vnd.curl.mcurl",
  "scurl": "text/vnd.curl.scurl",
  "ged": "text/vnd.familysearch.gedcom",
  "fly": "text/vnd.fly",
  "flx": "text/vnd.fmi.flexstor",
  "gv": "text/vnd.graphviz",
  "3dml": "text/vnd.in3d.3dml",
  "spot": "text/vnd.in3d.spot",
  "jad": "text/vnd.sun.j2me.app-descriptor",
  "wml": "text/vnd.wap.wml",
  "wmls": "text/vnd.wap.wmlscript",
  "vtt": "text/vtt",
  "wgsl": "text/wgsl",
  "s": "text/x-asm",
  "asm": "text/x-asm",
  "c": "text/x-c",
  "cc": "text/x-c",
  "cxx": "text/x-c",
  "cpp": "text/x-c",
  "h": "text/x-c",
  "hh": "text/x-c",
  "dic": "text/x-c",
  "htc": "text/x-component",
  "f": "text/x-fortran",
  "for": "text/x-fortran",
  "f77": "text/x-fortran",
  "f90": "text/x-fortran",
  "hbs": "text/x-handlebars-template",
  "java": "text/x-java-source",
  "lua": "text/x-lua",
  "mkd": "text/x-markdown",
  "nfo": "text/x-nfo",
  "opml": "text/x-opml",
  "p": "text/x-pascal",
  "pas": "text/x-pascal",
  "pde": "text/x-processing",
  "sass": "text/x-sass",
  "scss": "text/x-scss",
  "etx": "text/x-setext",
  "sfv": "text/x-sfv",
  "ymp": "text/x-suse-ymp",
  "uu": "text/x-uuencode",
  "vcs": "text/x-vcalendar",
  "vcf": "text/x-vcard",
  "yaml": "text/yaml",
  "yml": "text/yaml",
  "3gp": "video/3gpp",
  "3g2": "video/3gpp2",
  "h261": "video/h261",
  "h263": "video/h263",
  "h264": "video/h264",
  "m4s": "video/iso.segment",
  "jpgv": "video/jpeg",
  "mj2": "video/mj2",
  "mjp2": "video/mj2",
  "ts": "video/mp2t",
  "m2t": "video/mp2t",
  "m2ts": "video/mp2t",
  "mp4v": "video/mp4",
  "mpeg": "video/mpeg",
  "mpg": "video/mpeg",
  "mpe": "video/mpeg",
  "m1v": "video/mpeg",
  "m2v": "video/mpeg",
  "ogv": "video/ogg",
  "qt": "video/quicktime",
  "mov": "video/quicktime",
  "uvh": "video/vnd.dece.hd",
  "uvvh": "video/vnd.dece.hd",
  "uvm": "video/vnd.dece.mobile",
  "uvvm": "video/vnd.dece.mobile",
  "uvp": "video/vnd.dece.pd",
  "uvvp": "video/vnd.dece.pd",
  "uvs": "video/vnd.dece.sd",
  "uvvs": "video/vnd.dece.sd",
  "uvv": "video/vnd.dece.video",
  "uvvv": "video/vnd.dece.video",
  "dvb": "video/vnd.dvb.file",
  "fvt": "video/vnd.fvt",
  "mxu": "video/vnd.mpegurl",
  "m4u": "video/vnd.mpegurl",
  "pyv": "video/vnd.ms-playready.media.pyv",
  "uvu": "video/vnd.uvvu.mp4",
  "uvvu": "video/vnd.uvvu.mp4",
  "viv": "video/vnd.vivo",
  "webm": "video/webm",
  "f4v": "video/x-f4v",
  "fli": "video/x-fli",
  "flv": "video/x-flv",
  "m4v": "video/x-m4v",
  "mkv": "video/x-matroska",
  "mk3d": "video/x-matroska",
  "mks": "video/x-matroska",
  "mng": "video/x-mng",
  "asf": "video/x-ms-asf",
  "asx": "video/x-ms-asf",
  "vob": "video/x-ms-vob",
  "wm": "video/x-ms-wm",
  "wmv": "video/x-ms-wmv",
  "wmx": "video/x-ms-wmx",
  "wvx": "video/x-ms-wvx",
  "avi": "video/x-msvideo",
  "movie": "video/x-sgi-movie",
  "smv": "video/x-smv",
  "ice": "x-conference/x-cooltalk"
};

// src/convert/trace/network.js
function innerConstructNetworkRequest(entry, requestId) {
  const baseNetworkEvt = (
    /** @type {const} */
    {
      ph: Types.Events.Phase.INSTANT,
      s: Types.Events.Scope.THREAD
    }
  );
  const relativeToReq = (timing) => (
    /** @type MilliSeconds */
    timing - entry.startTime
  );
  const renderBlocking = entry.renderBlockingStatus === "non-blocking" ? "non_blocking" : entry.renderBlockingStatus === "blocking" ? "blocking" : void 0;
  const resolveMimeType = (entry2) => {
    const url = entry2.name.replaceAll("=", "?=");
    const filename = URL.parse(url)?.pathname.replace(/^\//, "");
    const extension = filename?.split(".").pop();
    const mimeType = entry2.entryType === "navigation" ? "text/html" : extension && /** @type {{[key: string]: string}} */
    mimeLookup[extension] || "application/octet-stream";
    return mimeType;
  };
  const requestInitiatorToEnumMap = {
    // Navigation requests are often parser-initiated or a specific user action
    // but conceptually they are distinct, I'll map it to Parser for now.
    navigation: "parser",
    css: "parser",
    // CSS processing is part of parsing/rendering
    script: "script",
    xmlhttprequest: "script",
    fetch: "script",
    beacon: "script",
    // sendBeacon is a script API
    video: "parser",
    // <video> element's src
    audio: "parser",
    // <audio> element's src
    track: "parser",
    // <track> element's src
    img: "parser",
    // <img> element's src/srcset
    image: "parser",
    // <image> element (SVG)
    input: "parser",
    // <input type="image">
    a: "parser",
    // <a> download/ping
    iframe: "parser",
    // <iframe> src
    frame: "parser",
    // <frame> loading
    other: "other"
  };
  const sendReq = makeTraceEvent("ResourceSendRequest", {
    ...baseNetworkEvt,
    ts: toMicrosec(entry.startTime) || \u03BCs(1),
    args: {
      data: {
        requestId,
        frame: frameData.frame,
        url: entry.name,
        priority: renderBlocking === "blocking" ? (
          /** @type {Network.ResourcePriority.High} */
          "High"
        ) : (
          /** @type {Network.ResourcePriority.Low} */
          "Low"
        ),
        renderBlocking,
        // Added those as default values since they are missing.
        // TODO: we should establish them from the actual resource entry
        resourceType: (
          /** @type {Network.ResourceType.Other} */
          "Other"
        ),
        fetchPriorityHint: "auto",
        initiator: entry.initiatorType ? {
          // This is probably imperfect but so close.
          type: (
            /** @type {Types.Events.Initiator['type']} */
            requestInitiatorToEnumMap[entry.initiatorType] || "other"
          ),
          fetchType: entry.initiatorType
        } : void 0
      }
    }
  });
  const requestStartMs = Math.max(entry.startTime, entry.requestStart);
  const responseStartMs = Math.max(entry.startTime, entry.responseStart);
  const receiveResp = makeTraceEvent("ResourceReceiveResponse", {
    ...baseNetworkEvt,
    ts: toMicrosec(responseStartMs) || \u03BCs(1),
    args: {
      data: {
        requestId,
        protocol: entry.nextHopProtocol || "unknown",
        // TODO: select something from http/0.9, http/1.0, http/1.1, http, h2, h3,   h3-Q050, data, blob
        connectionId: 0,
        connectionReused: false,
        encodedDataLength: 0,
        // entry.transferSize, // TODO: Gotta resolve the transfer size numbers needed for RPP.
        fromCache: entry.deliveryType === "cache",
        fromServiceWorker: entry.workerStart !== 0,
        frame: frameData.frame,
        mimeType: resolveMimeType(entry),
        // Trace value for responseTime looks like unix epoch in seconds. dunno what the point of that is.
        // This is ignored in RPP
        responseTime: (
          /** @type {Types.Timing.Milli} */
          responseStartMs
        ),
        statusCode: entry.responseStatus || 200,
        // not sure if 200 is a sane default
        timing: {
          // While the rest of timing is relative to the request, this is a actual timestamp.
          requestTime: (
            /** @type {Types.Timing.Seconds} */
            entry.startTime / 1e3
          ),
          // requestTime is in SECONDS (lol)
          // All these timings should be relative to the requestTime. Also they're in millisec.
          connectEnd: (
            /** @type MilliSeconds */
            -1
          ),
          connectStart: (
            /** @type MilliSeconds */
            -1
          ),
          dnsEnd: (
            /** @type MilliSeconds */
            -1
          ),
          dnsStart: (
            /** @type MilliSeconds */
            -1
          ),
          proxyEnd: (
            /** @type MilliSeconds */
            -1
          ),
          proxyStart: (
            /** @type MilliSeconds */
            -1
          ),
          pushEnd: (
            /** @type MilliSeconds */
            0
          ),
          pushStart: (
            /** @type MilliSeconds */
            0
          ),
          sendStart: relativeToReq(requestStartMs),
          sendEnd: relativeToReq(requestStartMs),
          receiveHeadersEnd: relativeToReq(responseStartMs),
          sslEnd: (
            /** @type MilliSeconds */
            -1
          ),
          sslStart: (
            /** @type MilliSeconds */
            -1
          ),
          workerReady: (
            /** @type MilliSeconds */
            -1
          ),
          workerStart: (
            /** @type MilliSeconds */
            -1
          ),
          receiveHeadersStart: relativeToReq(responseStartMs)
        }
      }
    }
  });
  const responseEndMs = entry.entryType === "navigation" ? (
    // Nav Timing ends at loadEventEnd: https://w3c.github.io/navigation-timing/#performanceentry
    // But responseEnd is end of the network request.
    entry.responseEnd
  ) : (
    // For resource-timing, I have no reason to think these two values aren't identical.
    Math.max(entry.responseEnd, entry.startTime + entry.duration)
  );
  const resFinish = makeTraceEvent("ResourceFinish", {
    ...baseNetworkEvt,
    // This .ts controls the right whisker. We _could_ use onload handlers to find where they land. But.. eh.
    ts: toMicrosec(responseEndMs) || \u03BCs(1),
    // monotonic. microsec.
    args: {
      data: {
        requestId,
        finishTime: (
          /** @type {Types.Timing.Seconds} */
          responseEndMs / 1e3
        ),
        // Monotonic timescale, but in seconds.
        encodedDataLength: entry.transferSize,
        // there's also entry.encodedBodySize but i think this should include headers?
        decodedBodyLength: entry.decodedBodySize,
        didFail: false
      }
    }
  });
  return [sendReq, receiveResp, resFinish];
}

// src/convert/trace/loaf.js
function innerHandleLongTask(entry) {
  return makeTraceEvent(Types.Events.Name.RUN_TASK, {
    // Long Tasks are NOT the same thing as RunTasks, (per my Feb 2023 findings) but.. no trace event equivalent exists.
    // TODO: Find a resolution to this.
    cat: "disabled-by-default-devtools.timeline",
    ts: toMicrosec(entry.startTime),
    dur: toMicrosec(entry.duration),
    args: (
      /** @type {Types.Events.Args} */
      {
        attribution: entry.attribution
      }
    )
  });
}
function innerHandleLoAF(entry) {
  const evts = [];
  const entryWithoutScripts = { ...entry.toJSON?.() || entry, scripts: [] };
  craftUserTimingForDebugging(entryWithoutScripts, "Long Animation Frames", "loAF");
  const loafDuration = Math.max(entry.duration, entry.styleAndLayoutStart - entry.startTime + 0.1);
  const endMs = entry.startTime + loafDuration;
  const animationFrameId = String(toMicrosec(entry.startTime));
  const beginMainFrameStart = entry.renderStart;
  if (entry.styleAndLayoutStart < beginMainFrameStart) {
    console.warn("styleAndLayoutStart found before BMF!?");
  }
  const beginMainFrameDuration = endMs - beginMainFrameStart;
  if (beginMainFrameStart !== 0) {
    evts.push(
      makeTraceEvent("ProxyMain::BeginMainFrame", {
        ts: toMicrosec(beginMainFrameStart),
        dur: toMicrosec(beginMainFrameDuration),
        args: {}
      })
    );
  }
  evts.push(
    makeTraceEvent(Types.Events.Name.ANIMATION_FRAME, {
      ph: Types.Events.Phase.ASYNC_NESTABLE_START,
      id: animationFrameId,
      ts: toMicrosec(entry.startTime),
      args: {
        id: animationFrameId,
        animation_frame_timing_info: {
          blocking_duration_ms: entry.blockingDuration,
          duration_ms: entry.duration,
          num_scripts: entry.scripts.length
        }
      }
    })
  );
  if (entry.firstUIEventTimestamp !== 0) {
    evts.push(
      makeTraceEvent(
        /** @type {LoafEvents.Name.AnimationFrameFirstUIEvent} */
        "AnimationFrame::FirstUIEvent",
        {
          ph: Types.Events.Phase.ASYNC_NESTABLE_INSTANT,
          ts: toMicrosec(entry.firstUIEventTimestamp)
        }
      )
    );
  }
  entry.scripts.forEach((script) => {
    craftUserTimingForDebugging(script, "Long Animation Frames", "script");
    const scriptDurationMs = Math.max(script.duration, script.executionStart - script.startTime + 0.1);
    const compileDurationMs = script.executionStart - script.startTime;
    evts.push(
      /** @type {Types.Events.Event} */
      {
        // Interestingly there's not a specific type for this
        ...baseEvt,
        cat: "disabled-by-default-v8.compile",
        name: "V8.CompileCode",
        ts: toMicrosec(script.startTime),
        dur: toMicrosec(compileDurationMs)
      }
    );
    evts.push(
      makeTraceEvent(Types.Events.Name.FUNCTION_CALL, {
        ts: toMicrosec(script.executionStart),
        dur: toMicrosec(scriptDurationMs - compileDurationMs),
        args: {
          data: {
            lineNumber: 0,
            columnNumber: script.sourceCharPosition,
            // This is wrong, but.. might be right if it was minified to 1 line.
            frame: frameData.frame,
            functionName: script.sourceFunctionName,
            scriptId: "-1",
            // No matching script is available for a LoAF timing entry.
            url: script.sourceURL
          }
        }
      })
    );
    const profileCall = (
      /** @type {Types.Events.SyntheticProfileCall} */
      {
        ...baseEvt,
        name: "ProfileCall",
        ts: toMicrosec(script.executionStart),
        dur: toMicrosec(scriptDurationMs - compileDurationMs),
        callFrame: {
          codeType: "JS",
          lineNumber: 0,
          columnNumber: script.sourceCharPosition,
          // This is wrong, but.. might be right if it was minified to 1 line.
          frame: frameData.frame,
          functionName: `${script.sourceFunctionName || "(anonymous)"} (loAF script)`,
          scriptId: -1,
          // Not valid.
          url: script.sourceURL
        }
        // nodeId: -1,
        // sampleIndex: -1,
        // profileId: '',
      }
    );
    evts.push(profileCall);
    if (script.startTime < script.executionStart) {
      evts.push({
        ...baseEvt,
        name: (
          /** @type {LoafEvents.Name.AnimationFrameScriptCompile} */
          "AnimationFrame::Script::Compile"
        ),
        ph: Types.Events.Phase.ASYNC_NESTABLE_START,
        ts: toMicrosec(script.startTime),
        args: {
          data: {
            invokerType: script.invokerType,
            pauseDuration: script.pauseDuration,
            sourceLocationUrl: script.sourceURL,
            sourceLocationFunctionName: script.sourceFunctionName || "(anonymous)",
            sourceLocationCharPosition: script.sourceCharPosition,
            // not available on the attribution model, yet
            layoutDuration: 0,
            // script.layoutDuration
            styleDuration: 0
            // script.styleDuration
          }
        }
      });
      evts.push({
        ...baseEvt,
        name: (
          /** @type {LoafEvents.Name.AnimationFrameScriptCompile} */
          "AnimationFrame::Script::Compile"
        ),
        ph: Types.Events.Phase.ASYNC_NESTABLE_END,
        ts: toMicrosec(script.executionStart)
      });
    }
    evts.push(
      makeTraceEvent(
        /** @type {LoafEvents.Name.AnimationFrameScriptExecute} */
        "AnimationFrame::Script::Execute",
        {
          ph: Types.Events.Phase.ASYNC_NESTABLE_START,
          ts: toMicrosec(script.startTime),
          args: {
            data: {
              invokerType: script.invokerType,
              pauseDuration: script.pauseDuration,
              sourceLocationUrl: script.sourceURL,
              sourceLocationFunctionName: script.sourceFunctionName || "(anonymous)",
              sourceLocationCharPosition: script.sourceCharPosition,
              // not available on the attribution model, yet
              layoutDuration: 0,
              // script.layoutDuration
              styleDuration: 0
              // script.styleDuration
            }
          }
        }
      )
    );
    evts.push(
      makeTraceEvent(
        /** @type {LoafEvents.Name.AnimationFrameScriptExecute} */
        "AnimationFrame::Script::Execute",
        {
          ph: Types.Events.Phase.ASYNC_NESTABLE_END,
          ts: toMicrosec(script.startTime + script.duration)
        }
      )
    );
    if (script.forcedStyleAndLayoutDuration) {
      const scriptEnd = script.startTime + script.duration;
      const forcedStyleAndLayoutStart = scriptEnd - script.forcedStyleAndLayoutDuration;
      addStyleAndLayoutPair(forcedStyleAndLayoutStart, script.forcedStyleAndLayoutDuration);
    }
  });
  evts.push(
    makeTraceEvent(Types.Events.Name.ANIMATION_FRAME, {
      ph: Types.Events.Phase.ASYNC_NESTABLE_END,
      id: animationFrameId,
      ts: toMicrosec(endMs),
      args: void 0
    })
  );
  function addStyleAndLayoutPair(start, duration) {
    const half = toMicrosec(duration / 2 - 1e-3);
    evts.push(
      makeTraceEvent(Types.Events.Name.RECALC_STYLE, {
        ts: toMicrosec(start),
        dur: half,
        args: {
          beginData: { frame: frameData.frame },
          elementCount: -1
        }
      })
    );
    evts.push(
      makeTraceEvent(Types.Events.Name.LAYOUT, {
        ts: (
          /** @type {Types.Timing.Micro} */
          toMicrosec(start) + half
        ),
        dur: half,
        args: {
          beginData: { dirtyObjects: -1, totalObjects: -1, partialLayout: false, frame: frameData.frame },
          endData: { layoutRoots: [{ depth: 1, nodeId: (
            /** @type {DOM.BackendNodeId} */
            -1
          ), quads: [[0, 0, 1979, 0, 1979, 1982, 0, 1982]] }] }
        }
      })
    );
    evts.push(
      makeTraceEvent(
        /** @type {LoafEvents.Name.AnimationFrameStyleAndLayout} */
        "AnimationFrame::StyleAndLayout",
        {
          ph: Types.Events.Phase.ASYNC_NESTABLE_START,
          ts: toMicrosec(start)
        }
      )
    );
    evts.push(
      makeTraceEvent(
        /** @type {LoafEvents.Name.AnimationFrameStyleAndLayout} */
        "AnimationFrame::StyleAndLayout",
        {
          ph: Types.Events.Phase.ASYNC_NESTABLE_END,
          ts: toMicrosec(endMs - start)
        }
      )
    );
  }
  if (entry.styleAndLayoutStart !== 0) {
    const operationDuration = (endMs - entry.styleAndLayoutStart) * 1 / 6;
    addStyleAndLayoutPair(entry.styleAndLayoutStart, operationDuration * 2);
    const renderingEvent = (index) => ({
      ts: toMicrosec(entry.styleAndLayoutStart + (index + 2) * operationDuration),
      dur: toMicrosec(operationDuration - 1e-3)
      // Leave 1 microsecond between flamechart items.
    });
    evts.push(
      makeTraceEvent(Types.Events.Name.PRE_PAINT, {
        ...renderingEvent(0),
        args: { data: { frame: frameData.frame } }
      }),
      makeTraceEvent(Types.Events.Name.PAINT, {
        ...renderingEvent(1),
        args: {
          data: {
            frame: frameData.frame,
            layerId: -1,
            nodeId: (
              /** @type {DOM.BackendNodeId} */
              -1
            ),
            clip: [-1, -1, -1, -1, -1, -1, -1, -1]
          }
        }
      }),
      // Layerize has a runtime name but no upstream event interface. Its data
      // matches Chrome's frame metadata rather than Paint or Commit's payload.
      makeTraceEvent(Types.Events.Name.LAYERIZE, {
        ...renderingEvent(2),
        args: { data: { frame: frameData.frame, isMainFrame: true, isOutermostMainFrame: true, page: frameData.frame } }
      }),
      makeTraceEvent(Types.Events.Name.COMMIT, {
        cat: "disabled-by-default-devtools.timeline",
        ph: Types.Events.Phase.INSTANT,
        s: Types.Events.Scope.THREAD,
        ts: toMicrosec(entry.styleAndLayoutStart + 5 * operationDuration),
        args: { frameSeqId: -1, layerTreeId: -1 }
      })
    );
    evts.push(
      makeTraceEvent(
        /** @type {LoafEvents.Name.AnimationFrameRender} */
        "AnimationFrame::Render",
        {
          ph: Types.Events.Phase.ASYNC_NESTABLE_START,
          ts: toMicrosec(beginMainFrameStart)
        }
      )
    );
    evts.push(
      makeTraceEvent(
        /** @type {LoafEvents.Name.AnimationFrameRender} */
        "AnimationFrame::Render",
        {
          ph: Types.Events.Phase.ASYNC_NESTABLE_END,
          ts: toMicrosec(beginMainFrameDuration)
        }
      )
    );
  }
  return evts;
}

// src/convert/trace/sources.js
function enhanceWithSources(fieldTrace) {
  const { sources } = fieldTrace;
  if (!sources?.length) return;
  for (const source of sources || []) {
    const scriptCompiled = makeTraceEvent(source.isModule ? "ModuleEvaluated" : "ScriptCompiled", {
      cat: "disabled-by-default-devtools.target-rundown",
      ts: \u03BCs(0),
      dur: \u03BCs(1),
      args: {
        data: {
          frame: (
            /** @type {Page.FrameId} */
            source.frameId || "_frameid_"
          ),
          frameType: source.frameType,
          url: source.url,
          isolate: "0x1",
          v8context: "0x1",
          origin: "<origin>",
          // this ok?
          scriptId: source.scriptId
        }
      }
    });
    const sourceRundown = makeTraceEvent("ScriptCatchup", {
      cat: "disabled-by-default-devtools.v8-source-rundown",
      ts: \u03BCs(0),
      dur: \u03BCs(1),
      args: {
        data: {
          isolate: "0x1",
          executionContextId: (
            /** @type {Runtime.ExecutionContextId} */
            1
          ),
          isModule: source.isModule,
          hasSourceUrl: source.hasSourceUrl,
          url: source.url,
          hash: void 0,
          sourceUrl: source.sourceUrl,
          sourceMapUrl: source.sourceMapUrl,
          scriptId: source.scriptId
        }
      }
    });
    const rundownSourceText = makeTraceEvent("ScriptCatchup", {
      cat: "disabled-by-default-devtools.v8-source-rundown-sources",
      ts: \u03BCs(0),
      dur: \u03BCs(1),
      args: {
        data: {
          isolate: 1,
          scriptId: source.scriptId,
          length: source.content?.length,
          sourceText: source.content
        }
      }
    });
    currentTrace.push(scriptCompiled, sourceRundown, rundownSourceText);
  }
  const scriptIdByUrl = new Map(sources.map((source) => [source.url, source.scriptId]));
  for (const evt of currentTrace) {
    if (evt.name === Types.Events.Name.FUNCTION_CALL && evt.ph === Types.Events.Phase.COMPLETE) {
      const data = (
        /** @type {Types.Events.FunctionCall} */
        evt.args.data
      );
      if (data?.url !== void 0) {
        const scriptId = scriptIdByUrl.get(data.url);
        if (scriptId !== void 0) data.scriptId = String(scriptId);
      }
    }
    if (evt.name === "ProfileCall" && "callFrame" in evt && evt.callFrame && typeof evt.callFrame === "object" && "scriptId" in evt.callFrame && "url" in evt.callFrame && typeof evt.callFrame.url === "string") {
      const scriptId = scriptIdByUrl.get(evt.callFrame.url);
      if (scriptId !== void 0) evt.callFrame.scriptId = scriptId;
    }
  }
}

// src/convert/trace/trace.js
var toMicrosec = (milliNum) => (
  /** @type {Types.Timing.Micro} */
  milliNum * 1e3
);
var Ms = (value) => (
  /** @type {Types.Timing.Milli} */
  value
);
var \u03BCs = (value) => (
  /** @type {Types.Timing.Micro} */
  value
);
var currentTrace = [];
var i = 0;
var getId = () => (
  /** @type {Types.Events.ProfileID} */
  `0x${(i++).toString(16)}`
);
var totalInteractionCount = 0;
var cumulativeLayoutShiftScore = 0;
var overallLayoutShiftMaxDistance = 0;
var profileEndTime = \u03BCs(0);
var baseEvt = {
  cat: "devtools.timeline",
  pid: (
    /** @type {Types.Events.ProcessID} */
    7
  ),
  tid: (
    /** @type {Types.Events.ThreadID} */
    9
  ),
  ph: Types.Events.Phase.COMPLETE,
  args: {},
  // Hack: Use one to avoid some mishandling in the devtools of valid trace events
  // with a ts of 0. We should fix the bug there, but making this a microsecond off
  // seems an okay tradeoff.
  ts: \u03BCs(1),
  name: "UNSET_NAME"
};
function makeTraceEvent(name, init) {
  const evt = (
    /** @type {FieldTraceEventByName<N>} */
    /** @type {unknown} */
    {
      pid: baseEvt.pid,
      tid: baseEvt.tid,
      cat: "devtools.timeline",
      ph: Types.Events.Phase.COMPLETE,
      args: {},
      name,
      ...init
    }
  );
  if ("args" in init && init.args === void 0) delete evt.args;
  return evt;
}
var frameData = {
  processId: baseEvt.pid,
  frame: "_frameid_",
  name: "_frame_name_",
  url: "https://www.UNSET_URL.com/",
  navigationId: "_navid_"
};
function reset() {
  currentTrace.length = 0;
  i = 0;
  totalInteractionCount = 0;
  cumulativeLayoutShiftScore = 0;
  overallLayoutShiftMaxDistance = 0;
  profileEndTime = \u03BCs(0);
  frameData.processId = baseEvt.pid;
  frameData.frame = "_frameid_";
  frameData.name = "_frame_name_";
  frameData.url = "https://www.UNSET_URL.com/";
  frameData.navigationId = "_navid_";
  addBaselineTraceEvents();
}
function craftUTEvent(entry) {
  const markEvt = {
    ...baseEvt,
    name: entry.name,
    cat: "blink.user_timing",
    ts: toMicrosec(entry.startTime),
    ph: Types.Events.Phase.INSTANT
  };
  if (entry.entryType === "mark") {
    return currentTrace.push(markEvt);
  }
  const measureBegin = {
    ...markEvt,
    id2: { local: getId() },
    ph: Types.Events.Phase.ASYNC_NESTABLE_START
  };
  const measureEnd = {
    ...measureBegin,
    ph: Types.Events.Phase.ASYNC_NESTABLE_END,
    ts: toMicrosec(entry.startTime + entry.duration)
  };
  currentTrace.push(measureBegin, measureEnd);
}
function craftUserTimingForDebugging(entry, trackName, entryName) {
  const typeToColorMap = {
    navigation: "primary",
    resource: "primary",
    longtask: "secondary",
    "long-animation-frame": "tertiary",
    script: "tertiary-light",
    // loaf script
    "layout-shift": "secondary-dark",
    event: "tertiary-light",
    paint: "tertiary",
    "largest-contentful-paint": "tertiary",
    "profiler-trace": "secondary-dark",
    mark: "tertiary-light",
    measure: "tertiary-light",
    "first-input": "primary-light",
    "visibility-state": "secondary-light"
  };
  const entryMasqueradingAsString = (
    /** @type {string} */
    entry
  );
  const detail = {
    // Create custom tracks with extra control over presentation: https://developer.chrome.com/docs/devtools/performance/extension
    devtools: (
      /** @type {Types.Extensions.DevToolsObjEntry} */
      {
        dataType: "track-entry",
        track: trackName,
        trackGroup: "\u{1F331} fieldtrace",
        color: typeToColorMap[entry.entryType] ?? "tertiary",
        // Include the full entry in here so it's visible in the devtools UI.
        properties: [["entry", entryMasqueradingAsString]]
      }
    ),
    // Include raw perf entry data for presenting in devtools UI
    ...entry
  };
  if (entry.entryType === "script") {
    const loafScript = entry;
    detail.devtools.tooltipText = `${loafScript.sourceFunctionName} ${loafScript.sourceURL}`;
  }
  const traceEvent = {
    ...baseEvt,
    name: entryName || `${entry.entryType}::${entry.name}`,
    cat: "blink.user_timing",
    ts: toMicrosec(entry.startTime),
    args: {
      data: {
        // Smushing the whole thing into detail. Thanks alexnj!
        detail: JSON.stringify(detail)
      }
    },
    ph: Types.Events.Phase.INSTANT
  };
  if (entry.entryType === "mark" || entry.duration === 0) {
    currentTrace.push(traceEvent);
    return;
  }
  const measureBegin = {
    ...traceEvent,
    id2: { local: getId() },
    ph: Types.Events.Phase.ASYNC_NESTABLE_START,
    args: {
      // It's on `args` on a measure, and `args.data` on a mark. Deal with it 8-D
      detail: JSON.stringify(detail)
    }
  };
  const measureEnd = {
    ...measureBegin,
    ph: Types.Events.Phase.ASYNC_NESTABLE_END,
    ts: toMicrosec(entry.startTime + entry.duration)
  };
  if (entry.entryType === "navigation") {
    const navEntry = (
      /** @type {PerformanceNavigationTiming} */
      entry
    );
    measureBegin.ts = toMicrosec(navEntry.fetchStart);
    measureBegin.dur = toMicrosec(measureBegin.ts + navEntry.responseEnd);
    measureEnd.ts = \u03BCs(measureBegin.ts + measureBegin.dur);
  }
  currentTrace.push(measureBegin, measureEnd);
}
function constructNetworkRequest(entry) {
  currentTrace.push(...innerConstructNetworkRequest(entry, `${baseEvt.pid}.${++i}`));
}
function handleNavigation(entry) {
  frameData.url = entry.name;
  currentTrace.push(...innerConstructNetworkRequest(entry, frameData.navigationId));
  currentTrace.push(
    makeTraceEvent(Types.Events.Name.NAVIGATION_START, {
      cat: "blink.user_timing",
      // Hack: Add one to avoid some mishandling in the devtools of valid trace events
      // with a ts of 0. We should fix the bug there, but making this a microsecond off
      // seems an okay tradeoff.
      ts: toMicrosec(entry.startTime) || \u03BCs(1),
      ph: Types.Events.Phase.MARK,
      args: {
        data: {
          documentLoaderURL: frameData.url,
          isLoadingMainFrame: true,
          isOutermostMainFrame: true,
          navigationId: frameData.navigationId
        },
        frame: frameData.frame
      }
    })
  );
  currentTrace.push(
    makeTraceEvent("EventDispatch", {
      ts: toMicrosec(entry.loadEventStart),
      dur: toMicrosec(entry.loadEventEnd - entry.loadEventStart),
      args: {
        data: {
          type: "load"
        }
      }
    })
  );
  currentTrace.push(
    makeTraceEvent("EventDispatch", {
      ts: toMicrosec(entry.unloadEventStart),
      dur: toMicrosec(entry.unloadEventEnd - entry.unloadEventStart),
      args: {
        data: {
          type: "unload"
        }
      }
    })
  );
  currentTrace.push(
    makeTraceEvent("EventDispatch", {
      ts: toMicrosec(entry.domContentLoadedEventStart),
      dur: toMicrosec(entry.domContentLoadedEventEnd - entry.domContentLoadedEventStart),
      args: {
        data: {
          type: "DOMContentLoaded"
        }
      }
    })
  );
  if (entry.domContentLoadedEventEnd)
    currentTrace.push(
      makeTraceEvent(Types.Events.Name.MARK_DOM_CONTENT, {
        ph: Types.Events.Phase.INSTANT,
        ts: toMicrosec(entry.domContentLoadedEventEnd),
        args: {
          data: {
            frame: frameData.frame,
            isMainFrame: true,
            // TODO(AD) - probably OK until iframes can opt into their parent's perf timeline but will need reviewing then
            isOutermostMainFrame: true,
            page: frameData.frame
          }
        },
        s: Types.Events.Scope.THREAD
      })
    );
  if (entry.loadEventEnd)
    currentTrace.push(
      makeTraceEvent(Types.Events.Name.MARK_LOAD, {
        ph: Types.Events.Phase.INSTANT,
        ts: toMicrosec(entry.loadEventEnd),
        args: {
          data: {
            frame: frameData.frame,
            isMainFrame: true,
            // TODO(AD) - probably OK until iframes can opt into their parent's perf timeline but will need reviewing then // TODO(AD) ???s
            isOutermostMainFrame: true,
            page: frameData.frame
          }
        },
        s: Types.Events.Scope.THREAD
      })
    );
}
function craftLongTaskEvent(entry) {
  currentTrace.push(innerHandleLongTask(entry));
}
function handleLoafEvent(entry) {
  currentTrace.push(...innerHandleLoAF(entry));
}
function craftEventTimingEvent(entry) {
  const { cancelable, duration, processingEnd, processingStart, interactionId } = entry;
  const id = getId();
  const beginEvent = makeTraceEvent(Types.Events.Name.EVENT_TIMING, {
    ph: Types.Events.Phase.ASYNC_NESTABLE_START,
    ts: toMicrosec(entry.startTime),
    args: {
      data: {
        frame: frameData.frame,
        cancelable,
        duration: Ms(duration),
        processingEnd: Ms(processingEnd),
        processingStart: Ms(processingStart),
        interactionId,
        interactionOffset: ++totalInteractionCount,
        // https://crrev.com/c/5009064
        nodeId: (
          /** @type {DOM.BackendNodeId} */
          -1
        ),
        // This is invalid, but we have no way of determining what backendNodeId it should be.
        type: entry.name,
        timeStamp: Ms(entry.startTime)
        // nodeId, enqueuedToMainThreadTime, interactionOffset
      }
    },
    id
  });
  const endEvent = makeTraceEvent(Types.Events.Name.EVENT_TIMING, {
    ph: Types.Events.Phase.ASYNC_NESTABLE_END,
    ts: toMicrosec(entry.startTime + entry.duration),
    id,
    args: {}
  });
  currentTrace.push(beginEvent, endEvent);
}
function craftLayoutShiftEvent(entry) {
  const cumulativeScoreSoFar = cumulativeLayoutShiftScore;
  cumulativeLayoutShiftScore += entry.value;
  const frameMaxDistance = entry.sources.reduce((maxDistance, source) => {
    const xDistance = Math.abs(source.currentRect.left - source.previousRect.left);
    const yDistance = Math.abs(source.currentRect.top - source.previousRect.top);
    return Math.max(maxDistance, xDistance, yDistance);
  }, 0);
  overallLayoutShiftMaxDistance = Math.max(overallLayoutShiftMaxDistance, frameMaxDistance);
  currentTrace.push(
    makeTraceEvent(Types.Events.Name.LAYOUT_SHIFT, {
      cat: "loading",
      ph: Types.Events.Phase.INSTANT,
      s: Types.Events.Scope.THREAD,
      ts: toMicrosec(entry.startTime),
      args: {
        frame: frameData.frame,
        // `impacted_nodes` is required by the trace-engine type, but the
        // Performance API does not expose backend node IDs, so omit it.
        data: (
          /** @type {Types.Events.LayoutShift['args']['data']} */
          {
            score: entry.value,
            weighted_score_delta: entry.value,
            cumulative_score: entry.value + cumulativeScoreSoFar,
            had_recent_input: entry.hadRecentInput,
            is_main_frame: true,
            frame_max_distance: frameMaxDistance,
            overall_max_distance: overallLayoutShiftMaxDistance,
            // The Performance API exposes source rects but not Blink's clipped and
            // merged region, so retain the available old/new rects individually.
            region_rects: entry.sources.flatMap((source) => {
              if (source.currentRect.left === source.previousRect.left && source.currentRect.top === source.previousRect.top) {
                return [];
              }
              return [
                [source.previousRect.left, source.previousRect.top, source.previousRect.width, source.previousRect.height],
                [source.currentRect.left, source.currentRect.top, source.currentRect.width, source.currentRect.height]
              ];
            })
          }
        )
      }
    })
  );
}
function craftMetricEvent(entry) {
  if (entry.entryType === "largest-contentful-paint") {
    currentTrace.push(
      makeTraceEvent(Types.Events.Name.MARK_LCP_CANDIDATE, {
        cat: "loading,rail,devtools.timeline",
        ph: Types.Events.Phase.MARK,
        ts: toMicrosec(entry.startTime),
        args: (
          /** @type {Types.Events.LargestContentfulPaintCandidate['args']} */
          {
            data: {
              candidateIndex: 1,
              isMainFrame: true,
              isOutermostMainFrame: true,
              navigationId: frameData.navigationId,
              nodeId: (
                /** @type {DOM.BackendNodeId} */
                150
              ),
              size: 15904,
              type: "text",
              loadingAttr: ""
              // TODO: Maybe we can extract loading=lazy signal for this.
            },
            frame: frameData.frame
          }
        )
        // args.data.nodeId points to the element. that's in `entry.element` but.. can't serialize that.
        // TODO: figure out if i wanna do something harder here. like nodePath
      })
    );
    return;
  }
  if (entry.name === "first-contentful-paint") {
    currentTrace.push(
      makeTraceEvent(Types.Events.Name.MARK_FCP, {
        cat: "loading,rail,devtools.timeline",
        ph: Types.Events.Phase.MARK,
        ts: toMicrosec(entry.startTime),
        args: { data: { navigationId: frameData.navigationId }, frame: frameData.frame }
      })
    );
    return;
  }
  if (entry.name === "first-paint") {
    currentTrace.push(
      makeTraceEvent(Types.Events.Name.MARK_FIRST_PAINT, {
        cat: "loading,rail,devtools.timeline",
        ph: Types.Events.Phase.MARK,
        ts: toMicrosec(entry.startTime),
        args: { data: { navigationId: frameData.navigationId }, frame: frameData.frame }
      })
    );
    return;
  }
  console.warn("Handling unexpected metric event", entry.entryType, entry.name);
  currentTrace.push(
    /** @type {Types.Events.Event} */
    {
      ...baseEvt,
      name: "",
      cat: "loading,rail,devtools.timeline",
      ph: Types.Events.Phase.MARK,
      ts: toMicrosec(entry.startTime),
      args: (
        /** @type {Types.Events.Args} */
        { data: { navigationId: frameData.navigationId }, frame: frameData.frame }
      )
    }
  );
}
function addBaselineTraceEvents() {
  currentTrace.push(
    /** @type {Types.Events.Event} */
    {
      ...baseEvt,
      cat: "__metadata",
      ph: Types.Events.Phase.METADATA,
      name: "process_labels",
      args: (
        /** @type {Types.Events.Args} */
        { labels: "ProcessLabel" }
      ),
      ts: \u03BCs(0)
    }
  );
  currentTrace.push(
    makeTraceEvent(Types.Events.Name.THREAD_NAME, {
      cat: "__metadata",
      ph: Types.Events.Phase.METADATA,
      args: { name: "CrRendererMain" },
      ts: \u03BCs(0)
    })
  );
  currentTrace.push(
    makeTraceEvent("process_name", {
      cat: "__metadata",
      ph: Types.Events.Phase.METADATA,
      args: { name: "Renderer" },
      ts: \u03BCs(0)
    })
  );
}
function constructCpuProfileEvents(selfProfile) {
  const sortedProfile = {
    ...selfProfile,
    samples: selfProfile.samples ? [...selfProfile.samples].sort((a, b) => a.timestamp - b.timestamp) : void 0
  };
  const cpuProfile = selfProfileToCPUProfile(
    /** @type {any} */
    sortedProfile
  );
  const profilerChunkEvts = cpuProfileToProfileChunk(cpuProfile);
  currentTrace.push(...profilerChunkEvts);
  constructMarkerEvents(
    /** @type {any} */
    sortedProfile
  );
}
function constructMarkerEvents(selfProfile) {
  const samples = selfProfile.samples || [];
  if (samples.length === 0) return;
  const events = markerRangesFromSamples(samples).map(markerRangeToTraceEvent);
  currentTrace.push(...events);
}
function markerRangesFromSamples(samples) {
  const markerRanges = [];
  let activeMarker = null;
  let activeMarkerStart = 0;
  const finishActiveMarker = (end) => {
    if (activeMarker === null) return;
    markerRanges.push({
      marker: activeMarker,
      start: activeMarkerStart,
      end
    });
    activeMarker = null;
  };
  for (const sample of samples) {
    const marker = renderableMarker(sample.marker);
    if (marker === null) {
      finishActiveMarker(sample.timestamp);
      continue;
    }
    if (activeMarker === null) {
      activeMarker = marker;
      activeMarkerStart = sample.timestamp;
      continue;
    }
    if (activeMarker !== marker) {
      finishActiveMarker(sample.timestamp);
      activeMarker = marker;
      activeMarkerStart = sample.timestamp;
    }
  }
  finishActiveMarker(samples[samples.length - 1].timestamp + averageSampleInterval(samples));
  return markerRanges;
}
function averageSampleInterval(samples) {
  if (samples.length <= 1) return 10;
  return (samples[samples.length - 1].timestamp - samples[0].timestamp) / (samples.length - 1);
}
function renderableMarker(marker) {
  if (!marker || marker === "script" || marker === "other") return null;
  return marker;
}
function markerRangeToTraceEvent(markerRange) {
  const { marker, start, end } = markerRange;
  const details = markerTraceDetails(marker);
  return {
    ...baseEvt,
    ...details,
    ph: Types.Events.Phase.COMPLETE,
    ts: toMicrosec(start),
    dur: toMicrosec(end - start)
  };
}
function markerTraceDetails(marker) {
  const markerDetails = {
    layout: () => ({ name: "Layout", args: { beginData: { frame: frameData.frame } } }),
    style: () => ({ name: "UpdateLayoutTree", args: { beginData: { frame: frameData.frame } } }),
    paint: () => ({ name: "Paint", args: { data: { frame: frameData.frame } } }),
    gc: () => ({ name: "GCEvent", cat: "devtools.timeline,v8", args: {} })
  };
  return markerDetails[marker]?.() ?? { name: `BrowserWork:${marker}`, cat: "devtools.timeline", args: {} };
}
function cpuProfileToProfileChunk(cpuProfile) {
  const { nodes, samples, timeDeltas, endTime } = cpuProfile;
  if (!samples) throw new Error("CPU profile is missing samples");
  profileEndTime = \u03BCs(endTime);
  const id = getId();
  const profileEvt = makeTraceEvent(Types.Events.Name.PROFILE, {
    ph: Types.Events.Phase.SAMPLE,
    cat: "disabled-by-default-v8.cpu_profiler",
    ts: \u03BCs(1),
    args: {
      data: {
        startTime: \u03BCs(0)
      }
    },
    id
  });
  const profileChunkEvt = makeTraceEvent(Types.Events.Name.PROFILE_CHUNK, {
    ph: Types.Events.Phase.SAMPLE,
    cat: "disabled-by-default-v8.cpu_profiler",
    // Hack: Use one to avoid some mishandling in the devtools of valid trace events
    // with a ts of 0. We should fix the bug there, but making this a microsecond off
    // seems an okay tradeoff.
    ts: \u03BCs(1),
    args: {
      data: {
        cpuProfile: {
          nodes: nodes?.map((node) => ({
            ...node,
            id: (
              /** @type {Types.Events.CallFrameID} */
              node.id
            )
          })),
          samples: samples.map((id2) => (
            /** @type {Types.Events.CallFrameID} */
            id2
          ))
        },
        timeDeltas: timeDeltas?.map(\u03BCs)
      }
    },
    id
  });
  return [profileEvt, profileChunkEvt];
}
function flagInvalidData() {
  function checkForNaN(obj) {
    if (!obj || typeof obj !== "object") return;
    Object.entries(obj).forEach(([key, value]) => {
      if (typeof value === "number" && isNaN(value)) {
        console.warn(`Ruhroh. NaN found on (${key}) within:`, obj);
        if (globalThis.process?.env.NODE_TEST_CONTEXT) throw new Error(`NaN found on (${key}) within: ${JSON.stringify(obj)}`);
      } else if (value && typeof value === "object") {
        checkForNaN(value);
      }
    });
  }
  currentTrace.forEach((evt) => {
    checkForNaN(evt);
    if (typeof evt.dur === "number" && evt.dur < 0) {
      console.warn(`Ruhroh. Negative duration found on:`, evt);
      if (globalThis.process?.env.NODE_TEST_CONTEXT) throw new Error(`Negative duration found on: ${JSON.stringify(evt)}`);
    }
  });
}
function collectTrace(fieldTrace, options = {}) {
  currentTrace.push(
    makeTraceEvent(Types.Events.Name.TRACING_STARTED_IN_BROWSER, {
      cat: "disabled-by-default-devtools.timeline",
      ph: Types.Events.Phase.INSTANT,
      s: Types.Events.Scope.THREAD,
      ts: \u03BCs(0),
      args: {
        data: {
          frameTreeNodeId: 1,
          persistentIds: true,
          frames: [{ ...frameData }]
        }
      }
    })
  );
  currentTrace.push(
    makeTraceEvent("FrameCommittedInBrowser", {
      cat: "disabled-by-default-devtools.timeline",
      ph: Types.Events.Phase.INSTANT,
      s: Types.Events.Scope.THREAD,
      ts: \u03BCs(0),
      args: {
        data: { ...frameData }
      }
    })
  );
  const metadata = {
    // TODO: use a navigation timestamp for startTime.
  };
  if (options.enhanceWithSources && fieldTrace.sources?.length) {
    enhanceWithSources(fieldTrace);
    metadata.enhancedTraceVersion = 1;
  }
  const lastTs = Math.max(
    profileEndTime,
    currentTrace.reduce((acc, e) => e.ts + (e.dur ?? 0) > acc ? e.ts + (e.dur ?? 0) : acc, 0)
  );
  const lastEvent = {
    ...baseEvt,
    name: "RunTask",
    cat: "disabled-by-default-devtools.timeline",
    ts: \u03BCs(Math.floor(lastTs + 1e5)),
    dur: \u03BCs(2)
  };
  currentTrace.push(lastEvent);
  flagInvalidData();
  const preferredSortOrderByName = ["RunTask", "FunctionCall", "ProfileCall"];
  currentTrace.sort((a, b) => {
    const ret = a.ts - b.ts || (b.dur ?? 0) - (a.dur ?? 0);
    if (ret !== 0) return ret;
    const aI = preferredSortOrderByName.indexOf(a.name);
    const bI = preferredSortOrderByName.indexOf(b.name);
    return aI - bI;
  });
  return { metadata, traceEvents: currentTrace };
}

// src/convert/convert.js
function toTrace(fieldTrace, options = {}) {
  reset();
  const entries = Array.isArray(fieldTrace) ? fieldTrace : fieldTrace.entries;
  entries.sort((a, b) => a.startTime - b.startTime);
  for (const entry of entries) {
    switch (entry.entryType) {
      case "navigation":
        handleNavigation(
          /** @type {PerformanceNavigationTiming} */
          entry
        );
        break;
      case "resource":
        constructNetworkRequest(
          /** @type {PerformanceResourceTiming} */
          entry
        );
        break;
      case "longtask":
        craftLongTaskEvent(
          /** @type {PerfEntries.PerformanceLongTaskTiming} */
          entry
        );
        break;
      case "long-animation-frame":
        handleLoafEvent(
          /** @type {PerfEntries.PerformanceLongAnimationFrameTiming} */
          entry
        );
        break;
      case "layout-shift":
        craftLayoutShiftEvent(
          /** @type {PerfEntries.LayoutShift} */
          entry
        );
        break;
      case "event":
        craftEventTimingEvent(
          /** @type {PerformanceEventTiming} */
          entry
        );
        break;
      case "paint":
      case "largest-contentful-paint":
        craftMetricEvent(
          /** @type {PerformancePaintTiming} */
          entry
        );
        break;
      // TODO: remove. Legacy approach of using an artificial Perf Entry to hold the JS Self Profile
      case "profiler-trace":
        constructCpuProfileEvents(
          /** @type {PerfEntries.PerformanceArtificialProfilerTraceEntry} */
          entry.profilerTrace
        );
        break;
      case "mark":
      case "measure":
        craftUTEvent(
          /** @type {PerformanceMark|PerformanceMeasure} */
          entry
        );
        break;
      case "first-input":
      case "visibility-state":
        break;
      default:
        console.warn("Unhandled eventType!", entry.entryType, entry.name);
        break;
    }
  }
  if (fieldTrace.profile) {
    constructCpuProfileEvents(fieldTrace.profile);
  }
  const traceEvts = collectTrace(fieldTrace, options);
  return traceEvts;
}
export {
  toTrace
};
//# sourceMappingURL=fieldtrace-convert.js.map
