/**
 * @enum {string}
 */
export const ViewState = {
  LANDING: 'landing',
  VIEWING: 'viewing',
};

/**
 * @enum {string}
 */
export const ViewerStatus = {
  IDLE: 'idle',
  LOADING: 'loading',
  LOADED: 'loaded',
  ERROR: 'error',
};

class AppState extends EventTarget {
  constructor() {
    super();
    /** @type {ViewState} */
    this._viewState = ViewState.LANDING;
    /** @type {ViewerStatus} */
    this._viewerStatus = ViewerStatus.IDLE;
    /** @type {string|null} */
    this._activeViewer = 'devtools'; // devtools, perfetto, softnav
    /** @type {{assetUrl: string, title: string}|null} */
    this._activeTrace = null;

    // Initialize DOM state
    if (typeof document !== 'undefined') {
      document.documentElement.dataset.state = this._viewState;
    }
  }

  get viewState() {
    return this._viewState;
  }

  /** @param {ViewState} val */
  set viewState(val) {
    if (this._viewState === val) return;
    this._viewState = val;
    document.documentElement.dataset.state = val;
    this.emit('viewstatechange', val);
  }

  get viewerStatus() {
    return this._viewerStatus;
  }

  /** @param {ViewerStatus} val */
  set viewerStatus(val) {
    if (this._viewerStatus === val) return;
    this._viewerStatus = val;
    this.emit('viewerstatuschange', val);
  }

  get activeViewer() {
    return this._activeViewer;
  }

  /** @param {string} val */
  set activeViewer(val) {
    if (this._activeViewer === val) return;
    this._activeViewer = val;
    this.emit('activeviewerchange', val);
  }

  get activeTrace() {
    return this._activeTrace;
  }

  /** @param {{assetUrl: string, title: string}|null} val */
  set activeTrace(val) {
    this._activeTrace = val;
    this.emit('activetracechange', val);
  }

  /**
   * Ergonomic event subscription.
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   */
  on(type, listener) {
    this.addEventListener(type, listener);
  }

  /**
   * Internal helper for emitting CustomEvents.
   * @param {string} type
   * @param {any} detail
   */
  emit(type, detail) {
    this.dispatchEvent(new CustomEvent(type, { detail }));
  }
}

export const state = new AppState();
