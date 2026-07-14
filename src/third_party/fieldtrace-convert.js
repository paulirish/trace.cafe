var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// node_modules/.pnpm/@paulirish+trace_engine@0.0.61/node_modules/@paulirish/trace_engine/models/trace/types/File.js
var DataOrigin;
(function(DataOrigin2) {
  DataOrigin2["CPU_PROFILE"] = "CPUProfile";
  DataOrigin2["TRACE_EVENTS"] = "TraceEvents";
})(DataOrigin || (DataOrigin = {}));
var EntriesLinkState;
(function(EntriesLinkState2) {
  EntriesLinkState2["CREATION_NOT_STARTED"] = "creation_not_started";
  EntriesLinkState2["PENDING_TO_EVENT"] = "pending_to_event";
  EntriesLinkState2["CONNECTED"] = "connected";
})(EntriesLinkState || (EntriesLinkState = {}));
var EventKeyType;
(function(EventKeyType2) {
  EventKeyType2["RAW_EVENT"] = "r";
  EventKeyType2["SYNTHETIC_EVENT"] = "s";
  EventKeyType2["PROFILE_CALL"] = "p";
  EventKeyType2["LEGACY_TIMELINE_FRAME"] = "l";
})(EventKeyType || (EventKeyType = {}));

// node_modules/.pnpm/@paulirish+trace_engine@0.0.61/node_modules/@paulirish/trace_engine/models/trace/types/Timing.js
var Timing_exports = {};
__export(Timing_exports, {
  Micro: () => Micro,
  Milli: () => Milli,
  Seconds: () => Seconds
});
function Micro(value) {
  return value;
}
function Milli(value) {
  return value;
}
function Seconds(value) {
  return value;
}

// node_modules/.pnpm/@paulirish+trace_engine@0.0.61/node_modules/@paulirish/trace_engine/models/trace/types/TraceEvents.js
var TraceEvents_exports = {};
__export(TraceEvents_exports, {
  AuctionWorkletType: () => AuctionWorkletType,
  CallFrameID: () => CallFrameID,
  Categories: () => Categories,
  InvalidationEventType: () => InvalidationEventType,
  LayoutInvalidationReason: () => LayoutInvalidationReason,
  MarkerName: () => MarkerName,
  NO_NAVIGATION: () => NO_NAVIGATION,
  Name: () => Name,
  Phase: () => Phase,
  ProcessID: () => ProcessID,
  ProfileID: () => ProfileID,
  SampleIndex: () => SampleIndex,
  Scope: () => Scope,
  SelectorTimingsKey: () => SelectorTimingsKey,
  StyleRecalcInvalidationReason: () => StyleRecalcInvalidationReason,
  ThreadID: () => ThreadID,
  WorkerId: () => WorkerId,
  eventIsPageLoadEvent: () => eventIsPageLoadEvent,
  isAbortPostTaskCallback: () => isAbortPostTaskCallback,
  isActivateLayerTree: () => isActivateLayerTree,
  isAnimation: () => isAnimation,
  isAnimationFrameAsyncEnd: () => isAnimationFrameAsyncEnd,
  isAnimationFrameAsyncStart: () => isAnimationFrameAsyncStart,
  isAnimationFramePresentation: () => isAnimationFramePresentation,
  isAnyScriptSourceEvent: () => isAnyScriptSourceEvent,
  isAuctionWorkletDoneWithProcess: () => isAuctionWorkletDoneWithProcess,
  isAuctionWorkletRunningInProcess: () => isAuctionWorkletRunningInProcess,
  isBegin: () => isBegin,
  isBeginCommitCompositorFrame: () => isBeginCommitCompositorFrame,
  isBeginFrame: () => isBeginFrame,
  isBeginMainThreadFrame: () => isBeginMainThreadFrame,
  isBeginRemoteFontLoad: () => isBeginRemoteFontLoad,
  isCommit: () => isCommit,
  isCommitLoad: () => isCommitLoad,
  isComplete: () => isComplete,
  isCompositeLayers: () => isCompositeLayers,
  isConsoleRunTask: () => isConsoleRunTask,
  isConsoleTime: () => isConsoleTime,
  isConsoleTimeStamp: () => isConsoleTimeStamp,
  isDOMStats: () => isDOMStats,
  isDebuggerAsyncTaskRun: () => isDebuggerAsyncTaskRun,
  isDebuggerAsyncTaskScheduled: () => isDebuggerAsyncTaskScheduled,
  isDecodeImage: () => isDecodeImage,
  isDecodeLazyPixelRef: () => isDecodeLazyPixelRef,
  isDidCommitSameDocumentNavigation: () => isDidCommitSameDocumentNavigation,
  isDispatch: () => isDispatch,
  isDisplayListItemListSnapshot: () => isDisplayListItemListSnapshot,
  isDomLoading: () => isDomLoading,
  isDrawFrame: () => isDrawFrame,
  isDrawLazyPixelRef: () => isDrawLazyPixelRef,
  isDroppedFrame: () => isDroppedFrame,
  isEnd: () => isEnd,
  isEventTiming: () => isEventTiming,
  isEventTimingEnd: () => isEventTimingEnd,
  isEventTimingStart: () => isEventTimingStart,
  isFireAnimationFrame: () => isFireAnimationFrame,
  isFireIdleCallback: () => isFireIdleCallback,
  isFirstContentfulPaint: () => isFirstContentfulPaint,
  isFirstPaint: () => isFirstPaint,
  isFlowPhase: () => isFlowPhase,
  isFlowPhaseEvent: () => isFlowPhaseEvent,
  isFrameCommittedInBrowser: () => isFrameCommittedInBrowser,
  isFunctionCall: () => isFunctionCall,
  isGPUTask: () => isGPUTask,
  isHandlePostMessage: () => isHandlePostMessage,
  isInstant: () => isInstant,
  isInteractiveTime: () => isInteractiveTime,
  isInvalidateLayout: () => isInvalidateLayout,
  isInvalidationTracking: () => isInvalidationTracking,
  isJSInvocationEvent: () => isJSInvocationEvent,
  isLargestContentfulPaintCandidate: () => isLargestContentfulPaintCandidate,
  isLargestImagePaintCandidate: () => isLargestImagePaintCandidate,
  isLargestTextPaintCandidate: () => isLargestTextPaintCandidate,
  isLayerTreeHostImplSnapshot: () => isLayerTreeHostImplSnapshot,
  isLayout: () => isLayout,
  isLayoutImageUnsized: () => isLayoutImageUnsized,
  isLayoutInvalidationTracking: () => isLayoutInvalidationTracking,
  isLayoutShift: () => isLayoutShift,
  isLegacyScreenshot: () => isLegacyScreenshot,
  isLegacySyntheticScreenshot: () => isLegacySyntheticScreenshot,
  isLegacyTimelineFrame: () => isLegacyTimelineFrame,
  isLinkPreconnect: () => isLinkPreconnect,
  isMainFrameViewport: () => isMainFrameViewport,
  isMarkDOMContent: () => isMarkDOMContent,
  isMarkLoad: () => isMarkLoad,
  isMarkerEvent: () => isMarkerEvent,
  isNavigationStart: () => isNavigationStart,
  isNeedsBeginFrameChanged: () => isNeedsBeginFrameChanged,
  isNestableAsyncPhase: () => isNestableAsyncPhase,
  isNetworkTrackEntry: () => isNetworkTrackEntry,
  isPaint: () => isPaint,
  isPaintImage: () => isPaintImage,
  isPairableAsyncBegin: () => isPairableAsyncBegin,
  isPairableAsyncEnd: () => isPairableAsyncEnd,
  isPairableAsyncInstant: () => isPairableAsyncInstant,
  isParseAuthorStyleSheetEvent: () => isParseAuthorStyleSheetEvent,
  isParseHTML: () => isParseHTML,
  isParseMetaViewport: () => isParseMetaViewport,
  isPerformanceMark: () => isPerformanceMark,
  isPerformanceMeasure: () => isPerformanceMeasure,
  isPerformanceMeasureBegin: () => isPerformanceMeasureBegin,
  isPhaseAsync: () => isPhaseAsync,
  isPipelineReporter: () => isPipelineReporter,
  isPrePaint: () => isPrePaint,
  isProcessName: () => isProcessName,
  isProfile: () => isProfile,
  isProfileCall: () => isProfileCall,
  isProfileChunk: () => isProfileChunk,
  isRasterTask: () => isRasterTask,
  isRecalcStyle: () => isRecalcStyle,
  isReceivedDataEvent: () => isReceivedDataEvent,
  isRemoteFontLoaded: () => isRemoteFontLoaded,
  isRenderFrameImplCreateChildFrame: () => isRenderFrameImplCreateChildFrame,
  isRendererEvent: () => isRendererEvent,
  isRequestIdleCallback: () => isRequestIdleCallback,
  isRequestMainThreadFrame: () => isRequestMainThreadFrame,
  isResourceChangePriority: () => isResourceChangePriority,
  isResourceFinish: () => isResourceFinish,
  isResourceMarkAsCached: () => isResourceMarkAsCached,
  isResourceReceiveResponse: () => isResourceReceiveResponse,
  isResourceReceivedData: () => isResourceReceivedData,
  isResourceSendRequest: () => isResourceSendRequest,
  isResourceWillSendRequest: () => isResourceWillSendRequest,
  isRunPostTaskCallback: () => isRunPostTaskCallback,
  isRunTask: () => isRunTask,
  isRundownScript: () => isRundownScript,
  isRundownScriptCompiled: () => isRundownScriptCompiled,
  isRundownScriptSource: () => isRundownScriptSource,
  isRundownScriptSourceLarge: () => isRundownScriptSourceLarge,
  isSchedulePostMessage: () => isSchedulePostMessage,
  isSchedulePostTaskCallback: () => isSchedulePostTaskCallback,
  isScheduleStyleInvalidationTracking: () => isScheduleStyleInvalidationTracking,
  isScheduleStyleRecalculation: () => isScheduleStyleRecalculation,
  isScreenshot: () => isScreenshot,
  isScrollLayer: () => isScrollLayer,
  isSelectorStats: () => isSelectorStats,
  isSetLayerId: () => isSetLayerId,
  isStyleInvalidatorInvalidationTracking: () => isStyleInvalidatorInvalidationTracking,
  isStyleRecalcInvalidationTracking: () => isStyleRecalcInvalidationTracking,
  isSyntheticAnimation: () => isSyntheticAnimation,
  isSyntheticBased: () => isSyntheticBased,
  isSyntheticConsoleTiming: () => isSyntheticConsoleTiming,
  isSyntheticCpuProfile: () => isSyntheticCpuProfile,
  isSyntheticInteraction: () => isSyntheticInteraction,
  isSyntheticLayoutShift: () => isSyntheticLayoutShift,
  isSyntheticLayoutShiftCluster: () => isSyntheticLayoutShiftCluster,
  isSyntheticNetworkRequest: () => isSyntheticNetworkRequest,
  isSyntheticUserTiming: () => isSyntheticUserTiming,
  isSyntheticWebSocketConnection: () => isSyntheticWebSocketConnection,
  isThreadName: () => isThreadName,
  isTimerFire: () => isTimerFire,
  isTimerInstall: () => isTimerInstall,
  isTracingSessionIdForWorker: () => isTracingSessionIdForWorker,
  isTracingStartedInBrowser: () => isTracingStartedInBrowser,
  isUpdateCounters: () => isUpdateCounters,
  isUpdateLayer: () => isUpdateLayer,
  isUserTiming: () => isUserTiming,
  isUserTimingMeasure: () => isUserTimingMeasure,
  isV8Compile: () => isV8Compile,
  isWebSocketCreate: () => isWebSocketCreate,
  isWebSocketDestroy: () => isWebSocketDestroy,
  isWebSocketEvent: () => isWebSocketEvent,
  isWebSocketInfo: () => isWebSocketInfo,
  isWebSocketReceiveHandshakeResponse: () => isWebSocketReceiveHandshakeResponse,
  isWebSocketSendHandshakeRequest: () => isWebSocketSendHandshakeRequest,
  isWebSocketTraceEvent: () => isWebSocketTraceEvent,
  isWebSocketTransfer: () => isWebSocketTransfer,
  objectIsCallFrame: () => objectIsCallFrame
});
var Phase;
(function(Phase3) {
  Phase3["BEGIN"] = "B";
  Phase3["END"] = "E";
  Phase3["COMPLETE"] = "X";
  Phase3["INSTANT"] = "I";
  Phase3["COUNTER"] = "C";
  Phase3["ASYNC_NESTABLE_START"] = "b";
  Phase3["ASYNC_NESTABLE_INSTANT"] = "n";
  Phase3["ASYNC_NESTABLE_END"] = "e";
  Phase3["ASYNC_STEP_INTO"] = "T";
  Phase3["ASYNC_BEGIN"] = "S";
  Phase3["ASYNC_END"] = "F";
  Phase3["ASYNC_STEP_PAST"] = "p";
  Phase3["FLOW_START"] = "s";
  Phase3["FLOW_STEP"] = "t";
  Phase3["FLOW_END"] = "f";
  Phase3["SAMPLE"] = "P";
  Phase3["OBJECT_CREATED"] = "N";
  Phase3["OBJECT_SNAPSHOT"] = "O";
  Phase3["OBJECT_DESTROYED"] = "D";
  Phase3["METADATA"] = "M";
  Phase3["MEMORY_DUMP_GLOBAL"] = "V";
  Phase3["MEMORY_DUMP_PROCESS"] = "v";
  Phase3["MARK"] = "R";
  Phase3["CLOCK_SYNC"] = "c";
})(Phase || (Phase = {}));
function isNestableAsyncPhase(phase) {
  return phase === Phase.ASYNC_NESTABLE_START || phase === Phase.ASYNC_NESTABLE_END || phase === Phase.ASYNC_NESTABLE_INSTANT;
}
function isPhaseAsync(phase) {
  return isNestableAsyncPhase(phase) || phase === Phase.ASYNC_BEGIN || phase === Phase.ASYNC_STEP_INTO || phase === Phase.ASYNC_END || phase === Phase.ASYNC_STEP_PAST;
}
function isFlowPhase(phase) {
  return phase === Phase.FLOW_START || phase === Phase.FLOW_STEP || phase === Phase.FLOW_END;
}
var Scope;
(function(Scope2) {
  Scope2["THREAD"] = "t";
  Scope2["PROCESS"] = "p";
  Scope2["GLOBAL"] = "g";
})(Scope || (Scope = {}));
function objectIsCallFrame(object) {
  return "functionName" in object && typeof object.functionName === "string" && ("scriptId" in object && (typeof object.scriptId === "string" || typeof object.scriptId === "number")) && ("columnNumber" in object && typeof object.columnNumber === "number") && ("lineNumber" in object && typeof object.lineNumber === "number") && ("url" in object && typeof object.url === "string");
}
function isRunTask(event) {
  return event.name === Name.RUN_TASK && event.ph === Phase.COMPLETE;
}
var AuctionWorkletType;
(function(AuctionWorkletType2) {
  AuctionWorkletType2["BIDDER"] = "bidder";
  AuctionWorkletType2["SELLER"] = "seller";
  AuctionWorkletType2["UNKNOWN"] = "unknown";
})(AuctionWorkletType || (AuctionWorkletType = {}));
function isAuctionWorkletRunningInProcess(event) {
  return event.name === "AuctionWorkletRunningInProcess";
}
function isAuctionWorkletDoneWithProcess(event) {
  return event.name === "AuctionWorkletDoneWithProcess";
}
function isLegacyScreenshot(event) {
  return event.name === Name.SCREENSHOT && "id" in event;
}
function isLegacySyntheticScreenshot(event) {
  return event.name === Name.SCREENSHOT && "dataUri" in (event.args ?? {});
}
function isScreenshot(event) {
  return event.name === Name.SCREENSHOT && "source_id" in (event.args ?? {});
}
var markerTypeGuards = [
  isMarkDOMContent,
  isMarkLoad,
  isFirstPaint,
  isFirstContentfulPaint,
  isLargestContentfulPaintCandidate,
  isNavigationStart
];
var MarkerName = ["MarkDOMContent", "MarkLoad", "firstPaint", "firstContentfulPaint", "largestContentfulPaint::Candidate"];
function isMarkerEvent(event) {
  if (event.ph === Phase.INSTANT || event.ph === Phase.MARK) {
    return markerTypeGuards.some((fn) => fn(event));
  }
  return false;
}
var pageLoadEventTypeGuards = [
  ...markerTypeGuards,
  isInteractiveTime
];
function eventIsPageLoadEvent(event) {
  if (event.ph === Phase.INSTANT || event.ph === Phase.MARK) {
    return pageLoadEventTypeGuards.some((fn) => fn(event));
  }
  return false;
}
function isTracingSessionIdForWorker(event) {
  return event.name === "TracingSessionIdForWorker";
}
var NO_NAVIGATION = "NO_NAVIGATION";
var LayoutInvalidationReason;
(function(LayoutInvalidationReason2) {
  LayoutInvalidationReason2["SIZE_CHANGED"] = "Size changed";
  LayoutInvalidationReason2["ATTRIBUTE"] = "Attribute";
  LayoutInvalidationReason2["ADDED_TO_LAYOUT"] = "Added to layout";
  LayoutInvalidationReason2["SCROLLBAR_CHANGED"] = "Scrollbar changed";
  LayoutInvalidationReason2["REMOVED_FROM_LAYOUT"] = "Removed from layout";
  LayoutInvalidationReason2["STYLE_CHANGED"] = "Style changed";
  LayoutInvalidationReason2["FONTS_CHANGED"] = "Fonts changed";
  LayoutInvalidationReason2["UNKNOWN"] = "Unknown";
})(LayoutInvalidationReason || (LayoutInvalidationReason = {}));
function isScheduleStyleInvalidationTracking(event) {
  return event.name === Name.SCHEDULE_STYLE_INVALIDATION_TRACKING;
}
var StyleRecalcInvalidationReason;
(function(StyleRecalcInvalidationReason2) {
  StyleRecalcInvalidationReason2["ANIMATION"] = "Animation";
  StyleRecalcInvalidationReason2["RELATED_STYLE_RULE"] = "Related style rule";
})(StyleRecalcInvalidationReason || (StyleRecalcInvalidationReason = {}));
function isStyleRecalcInvalidationTracking(event) {
  return event.name === Name.STYLE_RECALC_INVALIDATION_TRACKING;
}
function isStyleInvalidatorInvalidationTracking(event) {
  return event.name === Name.STYLE_INVALIDATOR_INVALIDATION_TRACKING;
}
function isBeginCommitCompositorFrame(event) {
  return event.name === Name.BEGIN_COMMIT_COMPOSITOR_FRAME;
}
function isParseMetaViewport(event) {
  return event.name === Name.PARSE_META_VIEWPORT;
}
function isLinkPreconnect(event) {
  return event.name === Name.LINK_PRECONNECT;
}
function isScheduleStyleRecalculation(event) {
  return event.name === Name.SCHEDULE_STYLE_RECALCULATION;
}
function isRenderFrameImplCreateChildFrame(event) {
  return event.name === Name.RENDER_FRAME_IMPL_CREATE_CHILD_FRAME;
}
function isLayoutImageUnsized(event) {
  return event.name === Name.LAYOUT_IMAGE_UNSIZED;
}
function isPairableAsyncBegin(e) {
  return e.ph === Phase.ASYNC_NESTABLE_START;
}
function isPairableAsyncEnd(e) {
  return e.ph === Phase.ASYNC_NESTABLE_END;
}
function isPairableAsyncInstant(e) {
  return e.ph === Phase.ASYNC_NESTABLE_INSTANT;
}
function isAnimationFrameAsyncStart(data) {
  return data.name === Name.ANIMATION_FRAME && data.ph === Phase.ASYNC_NESTABLE_START;
}
function isAnimationFrameAsyncEnd(data) {
  return data.name === Name.ANIMATION_FRAME && data.ph === Phase.ASYNC_NESTABLE_END;
}
function isAnimationFramePresentation(data) {
  return data.name === Name.ANIMATION_FRAME_PRESENTATION;
}
function isPipelineReporter(event) {
  return event.name === Name.PIPELINE_REPORTER;
}
function isSyntheticBased(event) {
  return "rawSourceEvent" in event;
}
function isSyntheticInteraction(event) {
  return Boolean("interactionId" in event && event.args?.data && "beginEvent" in event.args.data && "endEvent" in event.args.data);
}
function isDrawFrame(event) {
  return event.name === Name.DRAW_FRAME && event.ph === Phase.INSTANT;
}
function isBeginFrame(event) {
  return Boolean(event.name === Name.BEGIN_FRAME && event.args && "frameSeqId" in event.args);
}
function isDroppedFrame(event) {
  return Boolean(event.name === Name.DROPPED_FRAME && event.args && "frameSeqId" in event.args);
}
function isRequestMainThreadFrame(event) {
  return event.name === Name.REQUEST_MAIN_THREAD_FRAME;
}
function isBeginMainThreadFrame(event) {
  return event.name === Name.BEGIN_MAIN_THREAD_FRAME;
}
function isNeedsBeginFrameChanged(event) {
  return event.name === Name.NEEDS_BEGIN_FRAME_CHANGED;
}
function isCommit(event) {
  return Boolean(event.name === Name.COMMIT && event.args && "frameSeqId" in event.args);
}
function isRasterTask(event) {
  return event.name === Name.RASTER_TASK;
}
function isCompositeLayers(event) {
  return event.name === Name.COMPOSITE_LAYERS;
}
function isActivateLayerTree(event) {
  return event.name === Name.ACTIVATE_LAYER_TREE;
}
function isInvalidationTracking(event) {
  return isScheduleStyleInvalidationTracking(event) || isStyleRecalcInvalidationTracking(event) || isStyleInvalidatorInvalidationTracking(event) || isLayoutInvalidationTracking(event);
}
function isDrawLazyPixelRef(event) {
  return event.name === Name.DRAW_LAZY_PIXEL_REF;
}
function isDecodeLazyPixelRef(event) {
  return event.name === Name.DECODE_LAZY_PIXEL_REF;
}
function isDecodeImage(event) {
  return event.name === Name.DECODE_IMAGE;
}
var InvalidationEventType;
(function(InvalidationEventType2) {
  InvalidationEventType2["StyleInvalidatorInvalidationTracking"] = "StyleInvalidatorInvalidationTracking";
  InvalidationEventType2["StyleRecalcInvalidationTracking"] = "StyleRecalcInvalidationTracking";
})(InvalidationEventType || (InvalidationEventType = {}));
var SelectorTimingsKey;
(function(SelectorTimingsKey2) {
  SelectorTimingsKey2["Elapsed"] = "elapsed (us)";
  SelectorTimingsKey2["RejectPercentage"] = "reject_percentage";
  SelectorTimingsKey2["FastRejectCount"] = "fast_reject_count";
  SelectorTimingsKey2["MatchAttempts"] = "match_attempts";
  SelectorTimingsKey2["MatchCount"] = "match_count";
  SelectorTimingsKey2["Selector"] = "selector";
  SelectorTimingsKey2["StyleSheetId"] = "style_sheet_id";
  SelectorTimingsKey2["InvalidationCount"] = "invalidation_count";
})(SelectorTimingsKey || (SelectorTimingsKey = {}));
function isSelectorStats(event) {
  return event.name === Name.SELECTOR_STATS;
}
function isRecalcStyle(event) {
  return event.name === Name.RECALC_STYLE;
}
function isLayout(event) {
  return event.name === Name.LAYOUT && Boolean(event.args && "beginData" in event.args);
}
function isInvalidateLayout(event) {
  return event.name === Name.INVALIDATE_LAYOUT;
}
function isDebuggerAsyncTaskScheduled(event) {
  return event.name === Name.DEBUGGER_ASYNC_TASK_SCHEDULED;
}
function isDebuggerAsyncTaskRun(event) {
  return event.name === Name.DEBUGGER_ASYNC_TASK_RUN;
}
function ProfileID(value) {
  return value;
}
function CallFrameID(value) {
  return value;
}
function SampleIndex(value) {
  return value;
}
function ProcessID(value) {
  return value;
}
function ThreadID(value) {
  return value;
}
function WorkerId(value) {
  return value;
}
function isComplete(event) {
  return event.ph === Phase.COMPLETE;
}
function isBegin(event) {
  return event.ph === Phase.BEGIN;
}
function isEnd(event) {
  return event.ph === Phase.END;
}
function isDispatch(event) {
  return event.name === "EventDispatch" && event.ph === Phase.COMPLETE;
}
function isInstant(event) {
  return event.ph === Phase.INSTANT;
}
function isRendererEvent(event) {
  return isInstant(event) || isComplete(event);
}
function isFireIdleCallback(event) {
  return event.name === "FireIdleCallback" && event.ph === Phase.COMPLETE;
}
function isSchedulePostMessage(event) {
  return event.name === Name.SCHEDULE_POST_MESSAGE;
}
function isHandlePostMessage(event) {
  return event.name === Name.HANDLE_POST_MESSAGE && event.ph === Phase.COMPLETE;
}
function isUpdateCounters(event) {
  return event.name === "UpdateCounters";
}
function isDOMStats(event) {
  return event.name === "DOMStats";
}
function isThreadName(event) {
  return event.name === Name.THREAD_NAME;
}
function isProcessName(event) {
  return event.name === "process_name";
}
function isTracingStartedInBrowser(event) {
  return event.name === Name.TRACING_STARTED_IN_BROWSER;
}
function isFrameCommittedInBrowser(event) {
  return event.name === "FrameCommittedInBrowser";
}
function isCommitLoad(event) {
  return event.name === "CommitLoad";
}
function isAnimation(event) {
  return event.name === "Animation" && event.cat.includes("devtools.timeline");
}
function isSyntheticAnimation(event) {
  if (event.name !== "Animation" || !event.cat.includes("devtools.timeline")) {
    return false;
  }
  const data = event.args?.data;
  if (!data) {
    return false;
  }
  return "beginEvent" in data && "endEvent" in data;
}
function isLayoutShift(event) {
  return event.name === Name.LAYOUT_SHIFT;
}
function isLayoutInvalidationTracking(event) {
  return event.name === Name.LAYOUT_INVALIDATION_TRACKING;
}
function isFirstContentfulPaint(event) {
  return event.name === "firstContentfulPaint";
}
function isLargestContentfulPaintCandidate(event) {
  return event.name === Name.MARK_LCP_CANDIDATE;
}
function isLargestImagePaintCandidate(event) {
  return event.name === "LargestImagePaint::Candidate";
}
function isLargestTextPaintCandidate(event) {
  return event.name === "LargestTextPaint::Candidate";
}
function isMarkLoad(event) {
  return event.name === "MarkLoad";
}
function isFirstPaint(event) {
  return event.name === "firstPaint";
}
function isMarkDOMContent(event) {
  return event.name === "MarkDOMContent";
}
function isInteractiveTime(event) {
  return event.name === "InteractiveTime";
}
function isEventTiming(event) {
  return event.name === Name.EVENT_TIMING;
}
function isEventTimingEnd(event) {
  return isEventTiming(event) && event.ph === Phase.ASYNC_NESTABLE_END;
}
function isEventTimingStart(event) {
  return isEventTiming(event) && event.ph === Phase.ASYNC_NESTABLE_START;
}
function isGPUTask(event) {
  return event.name === "GPUTask";
}
function isProfile(event) {
  return event.name === Name.PROFILE;
}
function isSyntheticCpuProfile(event) {
  return event.name === Name.CPU_PROFILE && event.ph === Phase.COMPLETE;
}
function isProfileChunk(event) {
  return event.name === Name.PROFILE_CHUNK;
}
function isResourceChangePriority(event) {
  return event.name === "ResourceChangePriority";
}
function isResourceSendRequest(event) {
  return event.name === "ResourceSendRequest";
}
function isResourceReceiveResponse(event) {
  return event.name === "ResourceReceiveResponse";
}
function isResourceMarkAsCached(event) {
  return event.name === "ResourceMarkAsCached";
}
function isResourceFinish(event) {
  return event.name === "ResourceFinish";
}
function isResourceWillSendRequest(event) {
  return event.name === "ResourceWillSendRequest";
}
function isResourceReceivedData(event) {
  return event.name === "ResourceReceivedData";
}
function isReceivedDataEvent(event) {
  return event.name === "ResourceReceivedData" || event.name === "ResourceFinish" || event.name === "ResourceReceiveResponse";
}
function isSyntheticNetworkRequest(event) {
  return event.name === Name.SYNTHETIC_NETWORK_REQUEST;
}
function isSyntheticWebSocketConnection(event) {
  return event.name === "SyntheticWebSocketConnection";
}
function isNetworkTrackEntry(event) {
  return isSyntheticNetworkRequest(event) || isSyntheticWebSocketConnection(event) || isWebSocketTraceEvent(event);
}
function isPrePaint(event) {
  return event.name === "PrePaint";
}
function isNavigationStart(event) {
  return event.name === "navigationStart" && event.args?.data?.documentLoaderURL !== "";
}
function isDidCommitSameDocumentNavigation(event) {
  return event.name === "RenderFrameHostImpl::DidCommitSameDocumentNavigation" && event.ph === Phase.COMPLETE;
}
function isMainFrameViewport(event) {
  return event.name === "PaintTimingVisualizer::Viewport";
}
function isSyntheticUserTiming(event) {
  if (event.cat !== "blink.user_timing") {
    return false;
  }
  const data = event.args?.data;
  if (!data) {
    return false;
  }
  return "beginEvent" in data && "endEvent" in data;
}
function isSyntheticConsoleTiming(event) {
  if (event.cat !== "blink.console") {
    return false;
  }
  const data = event.args?.data;
  if (!data) {
    return false;
  }
  return "beginEvent" in data && "endEvent" in data;
}
function isUserTiming(event) {
  return event.cat === "blink.user_timing";
}
function isDomLoading(event) {
  return event.name === Name.DOM_LOADING;
}
function isBeginRemoteFontLoad(event) {
  return event.name === Name.BEGIN_REMOTE_FONT_LOAD;
}
function isRemoteFontLoaded(event) {
  return event.name === Name.REMOTE_FONT_LOADED;
}
function isPerformanceMeasure(event) {
  return isUserTiming(event) && isPhaseAsync(event.ph);
}
function isPerformanceMeasureBegin(event) {
  return isPerformanceMeasure(event) && event.ph === Phase.ASYNC_NESTABLE_START;
}
function isPerformanceMark(event) {
  return isUserTiming(event) && (event.ph === Phase.MARK || event.ph === Phase.INSTANT);
}
function isConsoleTime(event) {
  return event.cat === "blink.console" && isPhaseAsync(event.ph);
}
function isConsoleTimeStamp(event) {
  return event.ph === Phase.INSTANT && event.name === Name.TIME_STAMP;
}
function isUserTimingMeasure(event) {
  return event.name === Name.USER_TIMING_MEASURE;
}
function isParseHTML(event) {
  return event.name === "ParseHTML";
}
function isSyntheticLayoutShift(event) {
  return event.name === Name.SYNTHETIC_LAYOUT_SHIFT;
}
function isSyntheticLayoutShiftCluster(event) {
  return event.name === Name.SYNTHETIC_LAYOUT_SHIFT_CLUSTER;
}
function isProfileCall(event) {
  return "callFrame" in event;
}
function isPaint(event) {
  return event.name === Name.PAINT;
}
function isPaintImage(event) {
  return event.name === Name.PAINT_IMAGE && event.ph === Phase.COMPLETE;
}
function isScrollLayer(event) {
  return event.name === Name.SCROLL_LAYER && event.ph === Phase.COMPLETE;
}
function isSetLayerId(event) {
  return event.name === Name.SET_LAYER_TREE_ID;
}
function isUpdateLayer(event) {
  return event.name === Name.UPDATE_LAYER;
}
function isDisplayListItemListSnapshot(event) {
  return event.name === Name.DISPLAY_ITEM_LIST_SNAPSHOT;
}
function isLayerTreeHostImplSnapshot(event) {
  return event.name === Name.LAYER_TREE_HOST_IMPL_SNAPSHOT;
}
function isFireAnimationFrame(event) {
  return event.name === Name.FIRE_ANIMATION_FRAME && event.ph === Phase.COMPLETE;
}
function isTimerInstall(event) {
  return event.name === Name.TIMER_INSTALL;
}
function isTimerFire(event) {
  return event.name === Name.TIMER_FIRE && event.ph === Phase.COMPLETE;
}
function isRequestIdleCallback(event) {
  return event.name === Name.REQUEST_IDLE_CALLBACK;
}
function isWebSocketCreate(event) {
  return event.name === Name.WEB_SOCKET_CREATE;
}
function isWebSocketInfo(event) {
  return event.name === Name.WEB_SOCKET_SEND_HANDSHAKE_REQUEST || event.name === Name.WEB_SOCKET_RECEIVE_HANDSHAKE_REQUEST || event.name === Name.WEB_SOCKET_DESTROY;
}
function isWebSocketTransfer(event) {
  return event.name === Name.WEB_SOCKET_SEND || event.name === Name.WEB_SOCKET_RECEIVE;
}
function isWebSocketSendHandshakeRequest(event) {
  return event.name === Name.WEB_SOCKET_SEND_HANDSHAKE_REQUEST;
}
function isWebSocketReceiveHandshakeResponse(event) {
  return event.name === Name.WEB_SOCKET_RECEIVE_HANDSHAKE_REQUEST;
}
function isWebSocketDestroy(event) {
  return event.name === Name.WEB_SOCKET_DESTROY;
}
function isWebSocketTraceEvent(event) {
  return isWebSocketCreate(event) || isWebSocketInfo(event) || isWebSocketTransfer(event);
}
function isWebSocketEvent(event) {
  return isWebSocketTraceEvent(event) || isSyntheticWebSocketConnection(event);
}
function isV8Compile(event) {
  return event.name === Name.COMPILE && event.ph === Phase.COMPLETE;
}
function isFunctionCall(event) {
  return event.name === Name.FUNCTION_CALL && event.ph === Phase.COMPLETE;
}
function isSchedulePostTaskCallback(event) {
  return event.name === Name.SCHEDULE_POST_TASK_CALLBACK;
}
function isRunPostTaskCallback(event) {
  return event.name === Name.RUN_POST_TASK_CALLBACK && event.ph === Phase.COMPLETE;
}
function isAbortPostTaskCallback(event) {
  return event.name === Name.ABORT_POST_TASK_CALLBACK && event.ph === Phase.COMPLETE;
}
function isJSInvocationEvent(event) {
  switch (event.name) {
    case Name.RUN_MICROTASKS:
    case Name.FUNCTION_CALL:
    // TODO(paulirish): Define types for these Evaluate* events
    case Name.EVALUATE_SCRIPT:
    case Name.EVALUATE_MODULE:
    case Name.EVENT_DISPATCH:
    case Name.V8_EXECUTE:
    case Name.V8_CONSOLE_RUN_TASK:
      return true;
  }
  if (event.name.startsWith("v8") || event.name.startsWith("V8")) {
    return true;
  }
  if (isConsoleRunTask(event)) {
    return true;
  }
  return false;
}
function isConsoleRunTask(event) {
  return event.name === Name.V8_CONSOLE_RUN_TASK;
}
function isFlowPhaseEvent(event) {
  return event.ph === Phase.FLOW_START || event.ph === Phase.FLOW_STEP || event.ph === Phase.FLOW_END;
}
function isParseAuthorStyleSheetEvent(event) {
  return event.name === Name.PARSE_AUTHOR_STYLE_SHEET && event.ph === Phase.COMPLETE;
}
var Name;
(function(Name2) {
  Name2["THREAD_NAME"] = "thread_name";
  Name2["PROGRAM"] = "Program";
  Name2["RUN_TASK"] = "RunTask";
  Name2["ASYNC_TASK"] = "AsyncTask";
  Name2["RUN_MICROTASKS"] = "RunMicrotasks";
  Name2["XHR_LOAD"] = "XHRLoad";
  Name2["XHR_READY_STATE_CHANGED"] = "XHRReadyStateChange";
  Name2["PARSE_HTML"] = "ParseHTML";
  Name2["PARSE_CSS"] = "ParseAuthorStyleSheet";
  Name2["COMPILE_CODE"] = "V8.CompileCode";
  Name2["COMPILE_MODULE"] = "V8.CompileModule";
  Name2["COMPILE"] = "v8.compile";
  Name2["COMPILE_SCRIPT"] = "V8.CompileScript";
  Name2["OPTIMIZE"] = "V8.OptimizeCode";
  Name2["WASM_STREAM_FROM_RESPONSE_CALLBACK"] = "v8.wasm.streamFromResponseCallback";
  Name2["WASM_COMPILED_MODULE"] = "v8.wasm.compiledModule";
  Name2["WASM_CACHED_MODULE"] = "v8.wasm.cachedModule";
  Name2["WASM_MODULE_CACHE_HIT"] = "v8.wasm.moduleCacheHit";
  Name2["WASM_MODULE_CACHE_INVALID"] = "v8.wasm.moduleCacheInvalid";
  Name2["PROFILE_CALL"] = "ProfileCall";
  Name2["EVALUATE_SCRIPT"] = "EvaluateScript";
  Name2["FUNCTION_CALL"] = "FunctionCall";
  Name2["EVENT_DISPATCH"] = "EventDispatch";
  Name2["EVALUATE_MODULE"] = "v8.evaluateModule";
  Name2["REQUEST_MAIN_THREAD_FRAME"] = "RequestMainThreadFrame";
  Name2["REQUEST_ANIMATION_FRAME"] = "RequestAnimationFrame";
  Name2["CANCEL_ANIMATION_FRAME"] = "CancelAnimationFrame";
  Name2["FIRE_ANIMATION_FRAME"] = "FireAnimationFrame";
  Name2["REQUEST_IDLE_CALLBACK"] = "RequestIdleCallback";
  Name2["CANCEL_IDLE_CALLBACK"] = "CancelIdleCallback";
  Name2["FIRE_IDLE_CALLBACK"] = "FireIdleCallback";
  Name2["TIMER_INSTALL"] = "TimerInstall";
  Name2["TIMER_REMOVE"] = "TimerRemove";
  Name2["TIMER_FIRE"] = "TimerFire";
  Name2["WEB_SOCKET_CREATE"] = "WebSocketCreate";
  Name2["WEB_SOCKET_SEND_HANDSHAKE"] = "WebSocketSendHandshakeRequest";
  Name2["WEB_SOCKET_RECEIVE_HANDSHAKE"] = "WebSocketReceiveHandshakeResponse";
  Name2["WEB_SOCKET_DESTROY"] = "WebSocketDestroy";
  Name2["WEB_SOCKET_SEND"] = "WebSocketSend";
  Name2["WEB_SOCKET_RECEIVE"] = "WebSocketReceive";
  Name2["CRYPTO_DO_ENCRYPT"] = "DoEncrypt";
  Name2["CRYPTO_DO_ENCRYPT_REPLY"] = "DoEncryptReply";
  Name2["CRYPTO_DO_DECRYPT"] = "DoDecrypt";
  Name2["CRYPTO_DO_DECRYPT_REPLY"] = "DoDecryptReply";
  Name2["CRYPTO_DO_DIGEST"] = "DoDigest";
  Name2["CRYPTO_DO_DIGEST_REPLY"] = "DoDigestReply";
  Name2["CRYPTO_DO_SIGN"] = "DoSign";
  Name2["CRYPTO_DO_SIGN_REPLY"] = "DoSignReply";
  Name2["CRYPTO_DO_VERIFY"] = "DoVerify";
  Name2["CRYPTO_DO_VERIFY_REPLY"] = "DoVerifyReply";
  Name2["V8_EXECUTE"] = "V8.Execute";
  Name2["V8_CONSOLE_RUN_TASK"] = "V8Console::runTask";
  Name2["SCHEDULE_POST_TASK_CALLBACK"] = "SchedulePostTaskCallback";
  Name2["RUN_POST_TASK_CALLBACK"] = "RunPostTaskCallback";
  Name2["ABORT_POST_TASK_CALLBACK"] = "AbortPostTaskCallback";
  Name2["DEBUGGER_ASYNC_TASK_RUN"] = "v8::Debugger::AsyncTaskRun";
  Name2["DEBUGGER_ASYNC_TASK_SCHEDULED"] = "v8::Debugger::AsyncTaskScheduled";
  Name2["GC"] = "GCEvent";
  Name2["DOMGC"] = "BlinkGC.AtomicPhase";
  Name2["MAJOR_GC"] = "MajorGC";
  Name2["MINOR_GC"] = "MinorGC";
  Name2["GC_COLLECT_GARBARGE"] = "BlinkGC.AtomicPhase";
  Name2["CPPGC_SWEEP"] = "CppGC.IncrementalSweep";
  Name2["SCHEDULE_STYLE_RECALCULATION"] = "ScheduleStyleRecalculation";
  Name2["LAYOUT"] = "Layout";
  Name2["RECALC_STYLE"] = "UpdateLayoutTree";
  Name2["INVALIDATE_LAYOUT"] = "InvalidateLayout";
  Name2["LAYOUT_INVALIDATION_TRACKING"] = "LayoutInvalidationTracking";
  Name2["COMPUTE_INTERSECTION"] = "ComputeIntersections";
  Name2["HIT_TEST"] = "HitTest";
  Name2["PRE_PAINT"] = "PrePaint";
  Name2["LAYERIZE"] = "Layerize";
  Name2["LAYOUT_SHIFT"] = "LayoutShift";
  Name2["SYNTHETIC_LAYOUT_SHIFT"] = "SyntheticLayoutShift";
  Name2["SYNTHETIC_LAYOUT_SHIFT_CLUSTER"] = "SyntheticLayoutShiftCluster";
  Name2["UPDATE_LAYER_TREE"] = "UpdateLayerTree";
  Name2["SCHEDULE_STYLE_INVALIDATION_TRACKING"] = "ScheduleStyleInvalidationTracking";
  Name2["STYLE_RECALC_INVALIDATION_TRACKING"] = "StyleRecalcInvalidationTracking";
  Name2["STYLE_INVALIDATOR_INVALIDATION_TRACKING"] = "StyleInvalidatorInvalidationTracking";
  Name2["SELECTOR_STATS"] = "SelectorStats";
  Name2["BEGIN_COMMIT_COMPOSITOR_FRAME"] = "BeginCommitCompositorFrame";
  Name2["PARSE_META_VIEWPORT"] = "ParseMetaViewport";
  Name2["SCROLL_LAYER"] = "ScrollLayer";
  Name2["UPDATE_LAYER"] = "UpdateLayer";
  Name2["PAINT_SETUP"] = "PaintSetup";
  Name2["PAINT"] = "Paint";
  Name2["PAINT_IMAGE"] = "PaintImage";
  Name2["COMMIT"] = "Commit";
  Name2["COMPOSITE_LAYERS"] = "CompositeLayers";
  Name2["RASTER_TASK"] = "RasterTask";
  Name2["IMAGE_DECODE_TASK"] = "ImageDecodeTask";
  Name2["IMAGE_UPLOAD_TASK"] = "ImageUploadTask";
  Name2["DECODE_IMAGE"] = "Decode Image";
  Name2["DRAW_LAZY_PIXEL_REF"] = "Draw LazyPixelRef";
  Name2["DECODE_LAZY_PIXEL_REF"] = "Decode LazyPixelRef";
  Name2["GPU_TASK"] = "GPUTask";
  Name2["RASTERIZE"] = "Rasterize";
  Name2["EVENT_TIMING"] = "EventTiming";
  Name2["OPTIMIZE_CODE"] = "V8.OptimizeCode";
  Name2["CACHE_SCRIPT"] = "v8.produceCache";
  Name2["CACHE_MODULE"] = "v8.produceModuleCache";
  Name2["V8_SAMPLE"] = "V8Sample";
  Name2["JIT_CODE_ADDED"] = "JitCodeAdded";
  Name2["JIT_CODE_MOVED"] = "JitCodeMoved";
  Name2["STREAMING_COMPILE_SCRIPT"] = "v8.parseOnBackground";
  Name2["STREAMING_COMPILE_SCRIPT_WAITING"] = "v8.parseOnBackgroundWaiting";
  Name2["STREAMING_COMPILE_SCRIPT_PARSING"] = "v8.parseOnBackgroundParsing";
  Name2["BACKGROUND_DESERIALIZE"] = "v8.deserializeOnBackground";
  Name2["FINALIZE_DESERIALIZATION"] = "V8.FinalizeDeserialization";
  Name2["COMMIT_LOAD"] = "CommitLoad";
  Name2["MARK_LOAD"] = "MarkLoad";
  Name2["MARK_DOM_CONTENT"] = "MarkDOMContent";
  Name2["MARK_FIRST_PAINT"] = "firstPaint";
  Name2["MARK_FCP"] = "firstContentfulPaint";
  Name2["MARK_LCP_CANDIDATE"] = "largestContentfulPaint::Candidate";
  Name2["MARK_LCP_INVALIDATE"] = "largestContentfulPaint::Invalidate";
  Name2["NAVIGATION_START"] = "navigationStart";
  Name2["CONSOLE_TIME"] = "ConsoleTime";
  Name2["USER_TIMING"] = "UserTiming";
  Name2["INTERACTIVE_TIME"] = "InteractiveTime";
  Name2["TIME_STAMP"] = "TimeStamp";
  Name2["BEGIN_FRAME"] = "BeginFrame";
  Name2["NEEDS_BEGIN_FRAME_CHANGED"] = "NeedsBeginFrameChanged";
  Name2["BEGIN_MAIN_THREAD_FRAME"] = "BeginMainThreadFrame";
  Name2["ACTIVATE_LAYER_TREE"] = "ActivateLayerTree";
  Name2["DRAW_FRAME"] = "DrawFrame";
  Name2["DROPPED_FRAME"] = "DroppedFrame";
  Name2["FRAME_STARTED_LOADING"] = "FrameStartedLoading";
  Name2["PIPELINE_REPORTER"] = "PipelineReporter";
  Name2["SCREENSHOT"] = "Screenshot";
  Name2["RESOURCE_WILL_SEND_REQUEST"] = "ResourceWillSendRequest";
  Name2["RESOURCE_SEND_REQUEST"] = "ResourceSendRequest";
  Name2["RESOURCE_RECEIVE_RESPONSE"] = "ResourceReceiveResponse";
  Name2["RESOURCE_RECEIVE_DATA"] = "ResourceReceivedData";
  Name2["RESOURCE_FINISH"] = "ResourceFinish";
  Name2["RESOURCE_MARK_AS_CACHED"] = "ResourceMarkAsCached";
  Name2["WEB_SOCKET_SEND_HANDSHAKE_REQUEST"] = "WebSocketSendHandshakeRequest";
  Name2["WEB_SOCKET_RECEIVE_HANDSHAKE_REQUEST"] = "WebSocketReceiveHandshakeResponse";
  Name2["CPU_PROFILE"] = "CpuProfile";
  Name2["PROFILE"] = "Profile";
  Name2["START_PROFILING"] = "CpuProfiler::StartProfiling";
  Name2["PROFILE_CHUNK"] = "ProfileChunk";
  Name2["UPDATE_COUNTERS"] = "UpdateCounters";
  Name2["JS_SAMPLE"] = "JSSample";
  Name2["ANIMATION"] = "Animation";
  Name2["PARSE_AUTHOR_STYLE_SHEET"] = "ParseAuthorStyleSheet";
  Name2["EMBEDDER_CALLBACK"] = "EmbedderCallback";
  Name2["SET_LAYER_TREE_ID"] = "SetLayerTreeId";
  Name2["TRACING_STARTED_IN_PAGE"] = "TracingStartedInPage";
  Name2["TRACING_STARTED_IN_BROWSER"] = "TracingStartedInBrowser";
  Name2["TRACING_SESSION_ID_FOR_WORKER"] = "TracingSessionIdForWorker";
  Name2["LAZY_PIXEL_REF"] = "LazyPixelRef";
  Name2["LAYER_TREE_HOST_IMPL_SNAPSHOT"] = "cc::LayerTreeHostImpl";
  Name2["PICTURE_SNAPSHOT"] = "cc::Picture";
  Name2["DISPLAY_ITEM_LIST_SNAPSHOT"] = "cc::DisplayItemList";
  Name2["INPUT_LATENCY_MOUSE_MOVE"] = "InputLatency::MouseMove";
  Name2["INPUT_LATENCY_MOUSE_WHEEL"] = "InputLatency::MouseWheel";
  Name2["IMPL_SIDE_FLING"] = "InputHandlerProxy::HandleGestureFling::started";
  Name2["SCHEDULE_POST_MESSAGE"] = "SchedulePostMessage";
  Name2["HANDLE_POST_MESSAGE"] = "HandlePostMessage";
  Name2["RENDER_FRAME_IMPL_CREATE_CHILD_FRAME"] = "RenderFrameImpl::createChildFrame";
  Name2["LAYOUT_IMAGE_UNSIZED"] = "LayoutImageUnsized";
  Name2["DOM_LOADING"] = "domLoading";
  Name2["BEGIN_REMOTE_FONT_LOAD"] = "BeginRemoteFontLoad";
  Name2["REMOTE_FONT_LOADED"] = "RemoteFontLoaded";
  Name2["ANIMATION_FRAME"] = "AnimationFrame";
  Name2["ANIMATION_FRAME_PRESENTATION"] = "AnimationFrame::Presentation";
  Name2["SYNTHETIC_NETWORK_REQUEST"] = "SyntheticNetworkRequest";
  Name2["USER_TIMING_MEASURE"] = "UserTiming::Measure";
  Name2["LINK_PRECONNECT"] = "LinkPreconnect";
})(Name || (Name = {}));
var Categories = {
  Console: "blink.console",
  UserTiming: "blink.user_timing",
  Loading: "loading"
};
function isLegacyTimelineFrame(data) {
  return "idle" in data && typeof data.idle === "boolean";
}
function isRundownScriptCompiled(event) {
  return event.cat === "disabled-by-default-devtools.target-rundown";
}
function isRundownScript(event) {
  return event.cat === "disabled-by-default-devtools.v8-source-rundown" && event.name === "ScriptCatchup";
}
function isRundownScriptSource(event) {
  return event.cat === "disabled-by-default-devtools.v8-source-rundown-sources" && event.name === "ScriptCatchup";
}
function isRundownScriptSourceLarge(event) {
  return event.cat === "disabled-by-default-devtools.v8-source-rundown-sources" && event.name === "LargeScriptCatchup";
}
function isAnyScriptSourceEvent(event) {
  return event.cat === "disabled-by-default-devtools.v8-source-rundown-sources";
}

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

// src/convert/trace/phase.js
var Phase2 = {
  // Standard
  BEGIN: (
    /** @type {Types.Events.Phase.BEGIN} */
    "B"
  ),
  END: (
    /** @type {Types.Events.Phase.END} */
    "E"
  ),
  COMPLETE: (
    /** @type {Types.Events.Phase.COMPLETE} */
    "X"
  ),
  INSTANT: (
    /** @type {Types.Events.Phase.INSTANT} */
    "I"
  ),
  COUNTER: (
    /** @type {Types.Events.Phase.COUNTER} */
    "C"
  ),
  // Async
  ASYNC_NESTABLE_START: (
    /** @type {Types.Events.Phase.ASYNC_NESTABLE_START} */
    "b"
  ),
  ASYNC_NESTABLE_INSTANT: (
    /** @type {Types.Events.Phase.ASYNC_NESTABLE_INSTANT} */
    "n"
  ),
  ASYNC_NESTABLE_END: (
    /** @type {Types.Events.Phase.ASYNC_NESTABLE_END} */
    "e"
  ),
  ASYNC_STEP_INTO: (
    /** @type {Types.Events.Phase.ASYNC_STEP_INTO} */
    "T"
  ),
  ASYNC_BEGIN: (
    /** @type {Types.Events.Phase.ASYNC_BEGIN} */
    "S"
  ),
  ASYNC_END: (
    /** @type {Types.Events.Phase.ASYNC_END} */
    "F"
  ),
  ASYNC_STEP_PAST: (
    /** @type {Types.Events.Phase.ASYNC_STEP_PAST} */
    "p"
  ),
  // Flow
  FLOW_START: (
    /** @type {Types.Events.Phase.FLOW_START} */
    "s"
  ),
  FLOW_STEP: (
    /** @type {Types.Events.Phase.FLOW_STEP} */
    "t"
  ),
  FLOW_END: (
    /** @type {Types.Events.Phase.FLOW_END} */
    "f"
  ),
  // Sample
  SAMPLE: (
    /** @type {Types.Events.Phase.SAMPLE} */
    "P"
  ),
  // Object
  OBJECT_CREATED: (
    /** @type {Types.Events.Phase.OBJECT_CREATED} */
    "N"
  ),
  OBJECT_SNAPSHOT: (
    /** @type {Types.Events.Phase.OBJECT_SNAPSHOT} */
    "O"
  ),
  OBJECT_DESTROYED: (
    /** @type {Types.Events.Phase.OBJECT_DESTROYED} */
    "D"
  ),
  // Metadata
  METADATA: (
    /** @type {Types.Events.Phase.METADATA} */
    "M"
  ),
  // Memory Dump
  MEMORY_DUMP_GLOBAL: (
    /** @type {Types.Events.Phase.MEMORY_DUMP_GLOBAL} */
    "V"
  ),
  MEMORY_DUMP_PROCESS: (
    /** @type {Types.Events.Phase.MEMORY_DUMP_PROCESS} */
    "v"
  ),
  // Mark
  MARK: (
    /** @type {Types.Events.Phase.MARK} */
    "R"
  ),
  // Clock sync
  CLOCK_SYNC: (
    /** @type {Types.Events.Phase.CLOCK_SYNC} */
    "c"
  )
};

// third_party/mimetypes.js
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
  "mp4": "application/mp4",
  "mpg4": "application/mp4",
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
  const baseNetworkEvt = {
    ...baseEvt,
    ts: toMicrosec(entry.startTime),
    ph: Phase2.INSTANT,
    s: (
      /** @type {Types.Events.Scope.THREAD} */
      "t"
    )
  };
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
  const sendReq = {
    ...baseNetworkEvt,
    ts: toMicrosec(entry.startTime),
    name: "ResourceSendRequest",
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
  };
  const responseStartMs = Math.max(entry.startTime, entry.responseStart);
  const receiveResp = {
    ...baseNetworkEvt,
    name: "ResourceReceiveResponse",
    ts: toMicrosec(responseStartMs),
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
        responseTime: Timing_exports.Milli(responseStartMs),
        statusCode: entry.responseStatus || 200,
        // not sure if 200 is a sane default
        timing: {
          // While the rest of timing is relative to the request, this is a actual timestamp.
          requestTime: Timing_exports.Seconds(entry.startTime / 1e3),
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
          sendStart: relativeToReq(entry.requestStart),
          sendEnd: relativeToReq(entry.requestStart),
          receiveHeadersEnd: relativeToReq(entry.responseStart),
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
          receiveHeadersStart: relativeToReq(entry.responseStart)
        }
      }
    }
  };
  const responseEndMs = entry.entryType === "navigation" ? (
    // Nav Timing ends at loadEventEnd: https://w3c.github.io/navigation-timing/#performanceentry
    // But responseEnd is end of the network request.
    entry.responseEnd
  ) : (
    // For resource-timing, I have no reason to think these two values aren't identical.
    Math.max(entry.responseEnd, entry.startTime + entry.duration)
  );
  const resFinish = {
    ...baseNetworkEvt,
    name: "ResourceFinish",
    // This .ts controls the right whisker. We _could_ use onload handlers to find where they land. But.. eh.
    ts: toMicrosec(responseEndMs),
    // monotonic. microsec.
    args: {
      data: {
        requestId,
        finishTime: Timing_exports.Seconds(responseEndMs / 1e3),
        // Monotonic timescale, but in seconds.
        encodedDataLength: entry.transferSize,
        // there's also entry.encodedBodySize but i think this should include headers?
        decodedBodyLength: entry.decodedBodySize,
        didFail: false
      }
    }
  };
  return [sendReq, receiveResp, resFinish];
}

// src/convert/trace/loaf.js
function innerHandleLongTask(entry) {
  const tevt = {
    ...baseEvt,
    // Long Tasks are NOT the same thing as RunTasks, (per my Feb 2023 findings) but.. no trace event equivalent exists.
    // TODO: Find a resolution to this.
    name: (
      /** @type {Types.Events.Name.RUN_TASK} */
      "RunTask"
    ),
    cat: "disabled-by-default-devtools.timeline",
    ts: toMicrosec(entry.startTime),
    dur: toMicrosec(entry.duration),
    args: {
      // @ts-expect-error attribution is not part of the ArgsData interface
      attribution: entry.attribution
    }
  };
  return tevt;
}
function innerHandleLoAF(entry) {
  const evts = [];
  const entryWithoutScripts = { ...entry.toJSON?.() || entry, scripts: [] };
  craftUserTimingForDebugging(entryWithoutScripts, "Long Animation Frames", "loAF");
  const loafDuration = Math.max(entry.duration, entry.styleAndLayoutStart - entry.startTime + 0.1);
  const endMs = entry.startTime + loafDuration;
  const beginMainFrameStart = entry.renderStart;
  if (entry.styleAndLayoutStart < beginMainFrameStart) {
    console.warn("styleAndLayoutStart found before BMF!?");
  }
  const beginMainFrameDuration = endMs - beginMainFrameStart;
  if (beginMainFrameStart !== 0) {
    evts.push(
      /** @type {BeginMainFrame} */
      {
        ...baseEvt,
        name: "ProxyMain::BeginMainFrame",
        ts: toMicrosec(beginMainFrameStart),
        dur: toMicrosec(beginMainFrameDuration),
        args: {}
      }
    );
  }
  evts.push(
    /** @type {LoafEvents.AnimationFrameGroupingEvent} */
    {
      ...baseEvt,
      // Animation frame and its other events are missing from the known event names, for now.
      name: (
        /** @type {LoafEvents.Name.AnimationFrame} */
        "AnimationFrame"
      ),
      ph: Phase2.ASYNC_NESTABLE_START,
      ts: toMicrosec(entry.startTime),
      args: {
        animation_frame_timing_info: {
          blocking_duration_ms: entry.blockingDuration,
          duration_ms: entry.duration,
          num_scripts: entry.scripts.length
        }
      }
    }
  );
  if (entry.firstUIEventTimestamp !== 0) {
    evts.push(
      /** @type {LoafEvents.AnimationFrameInstantEvent} */
      {
        ...baseEvt,
        name: (
          /** @type {LoafEvents.Name.AnimationFrameFirstUIEvent} */
          "AnimationFrame::FirstUIEvent"
        ),
        ph: Phase2.ASYNC_NESTABLE_INSTANT,
        ts: toMicrosec(entry.firstUIEventTimestamp)
      }
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
      /** @type {Types.Events.FunctionCall} */
      {
        ...baseEvt,
        name: "FunctionCall",
        ts: toMicrosec(script.executionStart),
        dur: toMicrosec(scriptDurationMs - compileDurationMs),
        args: {
          data: {
            lineNumber: 0,
            columnNumber: script.sourceCharPosition,
            // This is wrong, but.. might be right if it was minified to 1 line.
            frame: frameData.frame,
            functionName: script.sourceFunctionName,
            scriptId: -1,
            // Not valid.
            url: script.sourceURL,
            _invoker: script.invoker,
            // invoker: "https://tailwindcss.com/_next/static/chunks/framework-ce84985cd166733a.js",
            _invokerType: script.invokerType,
            // invokerType: "classic-script",
            _windowAttribution: script.windowAttribution
            // windowAttribution: "self",
          }
        }
      }
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
        ph: Phase2.ASYNC_NESTABLE_START,
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
        ph: Phase2.ASYNC_NESTABLE_END,
        ts: toMicrosec(script.executionStart)
      });
    }
    evts.push({
      ...baseEvt,
      name: (
        /** @type {LoafEvents.Name.AnimationFrameScriptExecute} */
        "AnimationFrame::Script::Execute"
      ),
      ph: Phase2.ASYNC_NESTABLE_START,
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
        /** @type {LoafEvents.Name.AnimationFrameScriptExecute} */
        "AnimationFrame::Script::Execute"
      ),
      ph: Phase2.ASYNC_NESTABLE_END,
      ts: toMicrosec(script.startTime + script.duration)
    });
    if (script.forcedStyleAndLayoutDuration) {
      const scriptEnd = script.startTime + script.duration;
      const forcedStyleAndLayoutStart = scriptEnd - script.forcedStyleAndLayoutDuration;
      addStyleAndLayoutPair(forcedStyleAndLayoutStart, script.forcedStyleAndLayoutDuration);
    }
  });
  evts.push({
    ...baseEvt,
    name: (
      /** @type {LoafEvents.Name.AnimationFrame} */
      "AnimationFrame"
    ),
    ph: Phase2.ASYNC_NESTABLE_END,
    ts: toMicrosec(endMs)
  });
  function addStyleAndLayoutPair(start, duration) {
    const half = toMicrosec(duration / 2 - 1e-3);
    evts.push(
      /** @type {Types.Events.RecalcStyle} */
      {
        ...baseEvt,
        name: "UpdateLayoutTree",
        ts: toMicrosec(start),
        dur: half,
        args: {
          beginData: { frame: frameData.frame },
          elementCount: -1
        }
      }
    );
    evts.push(
      /** @type {Types.Events.Layout} */
      {
        ...baseEvt,
        name: "Layout",
        ts: toMicrosec(start) + half,
        dur: half,
        args: {
          beginData: { dirtyObjects: -1, totalObjects: -1, partialLayout: false, frame: frameData.frame },
          endData: { layoutRoots: [{ depth: 1, nodeId: -1, quads: [[0, 0, 1979, 0, 1979, 1982, 0, 1982]] }] }
        }
      }
    );
    evts.push({
      ...baseEvt,
      name: (
        /** @type {LoafEvents.Name.AnimationFrameStyleAndLayout} */
        "AnimationFrame::StyleAndLayout"
      ),
      ph: Phase2.ASYNC_NESTABLE_START,
      ts: toMicrosec(start)
    });
    evts.push({
      ...baseEvt,
      name: (
        /** @type {LoafEvents.Name.AnimationFrameStyleAndLayout} */
        "AnimationFrame::StyleAndLayout"
      ),
      ph: Phase2.ASYNC_NESTABLE_END,
      ts: toMicrosec(endMs - start)
    });
  }
  if (entry.styleAndLayoutStart !== 0) {
    const operationDuration = (endMs - entry.styleAndLayoutStart) * 1 / 6;
    addStyleAndLayoutPair(entry.styleAndLayoutStart, operationDuration * 2);
    ["PrePaint", "Paint", "Layerize", "Commit"].forEach((name, i2) => {
      const start = entry.styleAndLayoutStart + (i2 + 2) * operationDuration;
      evts.push(
        /** @type {Types.Events.Complete} */
        {
          // Lacking more specific type. That's probably ok.
          ...baseEvt,
          name,
          ts: toMicrosec(start),
          dur: toMicrosec(operationDuration - 1e-3),
          // 1 microsec adjustment to avoid losing items in the flamechart
          args: {
            data: {
              // This is a mix of all of them, but.. probably doesn't matter.
              frame: frameData.frame,
              isMainFrame: true,
              isOutermostMainFrame: true,
              page: frameData.frame,
              frameSeqId: -1,
              layerTreeId: -1,
              clip: [-1, -1, -1, -1, -1, -1, -1, -1],
              nodeId: -1,
              layerId: -1
            }
          }
        }
      );
    });
    evts.push({
      ...baseEvt,
      name: (
        /** @type {LoafEvents.Name.AnimationFrameRender} */
        "AnimationFrame::Render"
      ),
      ph: Phase2.ASYNC_NESTABLE_START,
      ts: toMicrosec(beginMainFrameStart)
    });
    evts.push({
      ...baseEvt,
      name: (
        /** @type {LoafEvents.Name.AnimationFrameRender} */
        "AnimationFrame::Render"
      ),
      ph: Phase2.ASYNC_NESTABLE_END,
      ts: toMicrosec(beginMainFrameDuration)
    });
  }
  return evts;
}

// src/convert/trace/sources.js
function enhanceWithSources(fieldTrace) {
  const { sources } = fieldTrace;
  if (!sources?.length) return;
  for (const source of sources || []) {
    const scriptCompiled = {
      ...baseEvt,
      name: source.isModule ? "ModuleEvaluated" : "ScriptCompiled",
      cat: "disabled-by-default-devtools.target-rundown",
      ts: \u03BCs(0),
      dur: \u03BCs(1),
      ph: Phase2.COMPLETE,
      args: {
        data: {
          frame: source.frameId,
          frameType: source.frameType,
          url: source.url,
          isolate: "0x1",
          v8context: "0x1",
          origin: "<origin>",
          // this ok?
          scriptId: source.scriptId
        }
      }
    };
    const rundownScript = {
      ...baseEvt,
      name: "ScriptCatchup",
      cat: "disabled-by-default-devtools.v8-source-rundown",
      ts: \u03BCs(0),
      dur: \u03BCs(1),
      ph: Phase2.COMPLETE,
      args: {
        data: {
          isolate: "0x1",
          executionContextId: "0x1",
          isModule: source.isModule,
          hasSourceUrl: source.hasSourceUrl,
          url: source.url,
          hash: void 0,
          sourceUrl: source.sourceUrl,
          sourceMapUrl: source.sourceMapUrl,
          scriptId: source.scriptId
        }
      }
    };
    const rundownScriptSource = {
      ...baseEvt,
      name: "ScriptCatchup",
      cat: "disabled-by-default-devtools.v8-source-rundown-sources",
      ts: \u03BCs(0),
      dur: \u03BCs(1),
      ph: Phase2.COMPLETE,
      args: {
        data: {
          isolate: 1,
          scriptId: source.scriptId,
          length: source.content?.length,
          sourceText: source.content
        }
      }
    };
    currentTrace.push(scriptCompiled, rundownScript, rundownScriptSource);
  }
  const scriptSrcById = {};
  sources.forEach((source) => {
    scriptSrcById[source.url] = source.scriptId;
  });
  currentTrace.forEach((evt) => {
    if (evt.args?.data?.scriptId && evt.args?.data?.url) {
      evt.args.data.scriptId = scriptSrcById[evt.args.data.url];
    }
    if (evt.args?.scriptId && evt.args?.url) {
      evt.args.scriptId = scriptSrcById[evt.args.url];
    }
    if (evt.callFrame?.scriptId && evt.callFrame?.url) {
      evt.callFrame.scriptId = scriptSrcById[evt.callFrame.url];
    }
  });
}

// src/convert/trace/trace.js
var toMicrosec = (milliNum) => (
  /** @type {Types.Timing.Micro} */
  milliNum * 1e3
);
var Ms = Timing_exports.Milli;
var \u03BCs = Timing_exports.Micro;
var currentTrace = [];
var i = 0;
var getId = () => (
  /** @type {Types.Events.ProfileID} */
  `0x${(i++).toString(16)}`
);
var totalInteractionCount = 0;
var baseEvt = {
  cat: "devtools.timeline",
  pid: TraceEvents_exports.ProcessID(7),
  tid: TraceEvents_exports.ThreadID(9),
  ph: Phase2.COMPLETE,
  args: {},
  // Hack: Use one to avoid some mishandling in the devtools of valid trace events
  // with a ts of 0. We should fix the bug there, but making this a microsecond off
  // seems an okay tradeoff.
  ts: \u03BCs(1),
  name: "UNSET_NAME"
};
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
  addBaselineTraceEvents();
}
function craftUTEvent(entry) {
  const markEvt = {
    ...baseEvt,
    name: entry.name,
    cat: "blink.user_timing",
    ts: toMicrosec(entry.startTime),
    ph: Phase2.INSTANT
  };
  if (entry.entryType === "mark") {
    return currentTrace.push(markEvt);
  }
  const measureBegin = {
    ...markEvt,
    id2: { local: getId() },
    ph: Phase2.ASYNC_NESTABLE_START
  };
  const measureEnd = {
    ...measureBegin,
    ph: Phase2.ASYNC_NESTABLE_END,
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
    ph: Phase2.INSTANT
  };
  if (entry.entryType === "mark" || entry.duration === 0) {
    currentTrace.push(traceEvent);
    return;
  }
  const measureBegin = {
    ...traceEvent,
    id2: { local: getId() },
    ph: Phase2.ASYNC_NESTABLE_START,
    args: {
      // It's on `args` on a measure, and `args.data` on a mark. Deal with it 8-D
      detail: JSON.stringify(detail)
    }
  };
  const measureEnd = {
    ...measureBegin,
    ph: Phase2.ASYNC_NESTABLE_END,
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
    /** @type {Types.Events.NavigationStart} */
    {
      ...baseEvt,
      name: "navigationStart",
      cat: "blink.user_timing",
      // Hack: Add one to avoid some mishandling in the devtools of valid trace events
      // with a ts of 0. We should fix the bug there, but making this a microsecond off
      // seems an okay tradeoff.
      ts: toMicrosec(entry.startTime) + 1,
      // hack to avoid valid, but zero .ts's.
      ph: Phase2.MARK,
      args: {
        data: {
          documentLoaderURL: frameData.url,
          isLoadingMainFrame: true,
          isOutermostMainFrame: true,
          navigationId: frameData.navigationId
        },
        frame: frameData.frame
      }
    }
  );
  currentTrace.push(
    /** @type {Types.Events.Dispatch} */
    {
      ...baseEvt,
      name: "EventDispatch",
      ts: toMicrosec(entry.loadEventStart),
      dur: toMicrosec(entry.loadEventEnd - entry.loadEventStart),
      args: {
        data: {
          type: "load"
        }
      }
    }
  );
  currentTrace.push(
    /** @type {Types.Events.Dispatch} */
    {
      ...baseEvt,
      name: "EventDispatch",
      ts: toMicrosec(entry.unloadEventStart),
      dur: toMicrosec(entry.unloadEventEnd - entry.unloadEventStart),
      args: {
        data: {
          type: "unload"
        }
      }
    }
  );
  currentTrace.push(
    /** @type {Types.Events.Dispatch} */
    {
      ...baseEvt,
      name: "EventDispatch",
      ts: toMicrosec(entry.domContentLoadedEventStart),
      dur: toMicrosec(entry.domContentLoadedEventEnd - entry.domContentLoadedEventStart),
      args: {
        data: {
          type: "DOMContentLoaded"
        }
      }
    }
  );
  if (entry.domContentLoadedEventEnd)
    currentTrace.push(
      /** @type {Types.Events.MarkDOMContent} */
      {
        ...baseEvt,
        name: "MarkDOMContent",
        ph: Phase2.INSTANT,
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
        s: "t"
      }
    );
  if (entry.loadEventEnd)
    currentTrace.push(
      /** @type {Types.Events.MarkLoad} */
      {
        ...baseEvt,
        name: "MarkLoad",
        ph: Phase2.INSTANT,
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
        s: "t"
      }
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
  const beginEvent = {
    ...baseEvt,
    name: (
      /** @type {Types.Events.Name.EVENT_TIMING} */
      "EventTiming"
    ),
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
    ph: Phase2.ASYNC_NESTABLE_START,
    id
  };
  const endEvent = {
    ...baseEvt,
    name: (
      /** @type {Types.Events.Name.EVENT_TIMING} */
      "EventTiming"
    ),
    ts: toMicrosec(entry.startTime + entry.duration),
    ph: Phase2.ASYNC_NESTABLE_END,
    id,
    args: {}
  };
  currentTrace.push(beginEvent, endEvent);
}
function craftLayoutShiftEvent(entry) {
  const cumulativeScoreSoFar = currentTrace.filter(TraceEvents_exports.isLayoutShift).reduce((acc, cur) => acc + (cur.args.data?.score ?? 0), 0);
  const evt = {
    ...baseEvt,
    name: (
      /** @type {Types.Events.LayoutShift['name']} */
      "LayoutShift"
    ),
    cat: "loading",
    ph: Phase2.INSTANT,
    // Instant. Current OPP relies on Frame data to extend the 'duration' of the Layout Shift item within the frame. (Kinda dumb, but w/e.)
    ts: toMicrosec(entry.startTime),
    args: {
      data: {
        score: entry.value,
        weighted_score_delta: entry.value,
        cumulative_score: entry.value + cumulativeScoreSoFar,
        had_recent_input: entry.hadRecentInput,
        // @ts-expect-error last_input_timestamp is missing from LayoutShiftData interface
        last_input_timestamp: entry.lastInputTime * 1e3,
        // TODO Remove this?
        impacted_nodes: entry.sources.map((source) => {
          return {
            old_rect: [source.previousRect.left, source.previousRect.top, source.previousRect.width, source.previousRect.height],
            new_rect: [source.currentRect.left, source.currentRect.top, source.currentRect.width, source.currentRect.height],
            node_id: (
              /** @type {DOM.BackendNodeId} */
              -1
            )
            // This is invalid, but we have no way of determining what backendNodeId it should be.
          };
        })
      }
    }
  };
  currentTrace.push(evt);
}
function craftMetricEvent(entry) {
  if (entry.entryType === "largest-contentful-paint") {
    currentTrace.push(
      /** @type {Types.Events.LargestContentfulPaintCandidate} */
      {
        ...baseEvt,
        cat: "loading,rail,devtools.timeline",
        ph: Phase2.MARK,
        ts: toMicrosec(entry.startTime),
        name: "largestContentfulPaint::Candidate",
        args: {
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
        // args.data.nodeId points to the element. that's in `entry.element` but.. can't serialize that.
        // TODO: figure out if i wanna do something harder here. like nodePath
      }
    );
    return;
  }
  let name = "";
  if (entry.name === "first-contentful-paint") {
    name = "firstContentfulPaint";
  } else if (entry.name === "first-paint") {
    name = "firstPaint";
  } else {
    console.warn("Handling unexpected metric event", entry.entryType, entry.name);
  }
  currentTrace.push(
    /** @type {Types.Events.FirstContentfulPaint|Types.Events.FirstPaint} */
    {
      ...baseEvt,
      name,
      cat: "loading,rail,devtools.timeline",
      ph: Phase2.MARK,
      ts: toMicrosec(entry.startTime),
      args: { data: { navigationId: frameData.navigationId }, frame: frameData.frame }
    }
  );
}
function addBaselineTraceEvents() {
  const metaEvtBase = {
    ...baseEvt,
    cat: "__metadata",
    ph: Phase2.METADATA
  };
  currentTrace.push(
    /** @type {Types.Events.Metadata} */
    {
      ...metaEvtBase,
      name: "process_labels",
      args: { labels: "ProcessLabel" },
      ts: \u03BCs(0)
    }
  );
  currentTrace.push(
    /** @type {Types.Events.ThreadName} */
    {
      ...metaEvtBase,
      name: "thread_name",
      args: { name: "CrRendererMain" },
      ts: \u03BCs(0)
    }
  );
  currentTrace.push(
    /** @type {Types.Events.ProcessName} */
    {
      ...metaEvtBase,
      name: "process_name",
      args: { name: "Renderer" },
      ts: \u03BCs(0)
    }
  );
  currentTrace.push(
    /** @type {Types.Events.TracingStartedInBrowser} */
    {
      ...metaEvtBase,
      cat: "disabled-by-default-devtools.timeline",
      name: "TracingStartedInBrowser",
      ph: Phase2.INSTANT,
      s: "t",
      args: {
        data: {
          frameTreeNodeId: 1,
          persistentIds: true,
          // TODO.. this is missing something. we still dont create pageFrames like we should
          // …Maybe its fine in new engine now.
          // https://source.chromium.org/chromium/chromium/src/+/main:third_party/devtools-frontend/src/front_end/models/timeline_model/TimelineModel.ts;l=1226-1266;drc=269e9ae3ebd8d9c79fa42e19a8674d45afd8cc9f
          frames: [frameData]
        }
      }
    }
  );
  currentTrace.push(
    /** @type {Types.Events.FrameCommittedInBrowser} */
    {
      ...metaEvtBase,
      cat: "disabled-by-default-devtools.timeline",
      name: "FrameCommittedInBrowser",
      ph: Phase2.INSTANT,
      args: {
        data: frameData
      }
    }
  );
}
function constructCpuProfileEvents(selfProfile) {
  const cpuProfile = selfProfileToCPUProfile(selfProfile);
  const profilerChunkEvts = cpuProfileToProfileChunk(cpuProfile);
  currentTrace.push(...profilerChunkEvts);
}
function cpuProfileToProfileChunk(cpuProfile) {
  const { nodes, samples, timeDeltas, endTime } = cpuProfile;
  const id = getId();
  const profileEvt = {
    ...baseEvt,
    name: (
      /** @type {Types.Events.Profile['name']} */
      "Profile"
    ),
    cat: "disabled-by-default-v8.cpu_profiler",
    ts: \u03BCs(1),
    args: {
      data: {
        startTime: \u03BCs(0),
        // @ts-expect-error endTime is missing from ArgsData
        endTime
      }
    },
    ph: Phase2.SAMPLE,
    id
  };
  const profileChunkEvt = {
    ...baseEvt,
    name: (
      /** @type {Types.Events.ProfileChunk['name']} */
      "ProfileChunk"
    ),
    cat: "disabled-by-default-v8.cpu_profiler",
    // Hack: Use one to avoid some mishandling in the devtools of valid trace events
    // with a ts of 0. We should fix the bug there, but making this a microsecond off
    // seems an okay tradeoff.
    ts: \u03BCs(1),
    args: {
      data: {
        cpuProfile: {
          // @ts-expect-error id attributes are incompatible (see comment on the function header)
          nodes,
          // @ts-expect-error id attributes are incompatible (see comment on the function header)
          samples
        },
        // @ts-expect-error timeDeltas is of type number[] but expected MicroSeconds[]
        timeDeltas
      }
    },
    ph: Phase2.SAMPLE,
    id
  };
  return [profileEvt, profileChunkEvt];
}
function flagInvalidData() {
  function checkForNaN(obj) {
    if (typeof obj !== "object") return;
    Object.entries(obj).forEach(([key, value]) => {
      if (typeof value === "number" && isNaN(value)) {
        console.warn(`Ruhroh. NaN found on (${key}) within:`, obj);
        if (globalThis.process?.env.NODE_TEST_CONTEXT) throw new Error(`NaN found on (${key}) within: ${JSON.stringify(obj)}`);
      }
    });
  }
  currentTrace.forEach((evt) => {
    checkForNaN(evt);
    if (evt.args) {
      checkForNaN(evt.args);
      checkForNaN(evt.args.data);
    }
    if (typeof evt.dur === "number" && evt.dur < 0) {
      console.warn(`Ruhroh. Negative duration found on:`, evt);
      if (globalThis.process?.env.NODE_TEST_CONTEXT) throw new Error(`Negative duration found on: ${JSON.stringify(evt)}`);
    }
  });
}
function collectTrace(fieldTrace) {
  const metadata = {
    // TODO: use a navigation timestamp for startTime.
  };
  if (fieldTrace.sources?.length) {
    enhanceWithSources(fieldTrace);
    metadata.enhancedTraceVersion = 1;
  }
  const profileEvt = currentTrace.find((e) => e.name === "Profile");
  const lastTs = profileEvt?.args?.data?.endTime ?? currentTrace.reduce((acc, e) => e.ts + (e.dur ?? 0) > acc ? e.ts + (e.dur ?? 0) : acc, 0);
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
function toTrace(fieldTrace) {
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
  const traceEvts = collectTrace(fieldTrace);
  return traceEvts;
}
export {
  toTrace
};
//# sourceMappingURL=fieldtrace-convert.js.map
