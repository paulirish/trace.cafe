// src/state.js

/**
 * @typedef {Object} TraceData
 * @property {string} url - The URL of the trace file (JSON/GZIP).
 * @property {import('firebase/storage').FullMetadata | null} metadata - Metadata about the trace file.
 * @property {string} title - The display title of the trace.
 */

export const ViewState = {
  LANDING: 'landing',
  VIEWING: 'viewing',
};

export const ViewerStatus = {
  IDLE: 'idle',
  LOADING: 'loading',
  LOADED: 'loaded',
  ERROR: 'error',
};

class AppState extends EventTarget {
  constructor() {
    super();
    /** @type {TraceData | null} */
    this._currentTrace = null;
    this._viewState = ViewState.LANDING;

    // UI toggles
    this._showPerfetto = false;
    this._showSoftNav = false;

    // Viewer Status
    this._perfettoStatus = ViewerStatus.IDLE;
    this._softNavStatus = ViewerStatus.IDLE;

    this._reflectStateToDOM();
  }

  on(eventName, handler) {
    this.addEventListener(eventName, handler);
  }

  _reflectStateToDOM() {
    document.documentElement.dataset.state = this._viewState;
  }

  /**
   * @param {string} url
   * @param {import('firebase/storage').FullMetadata} metadata
   * @param {string} title
   */
  setTrace(url, metadata, title) {
    this._currentTrace = { url, metadata, title };
    this._viewState = ViewState.VIEWING;
    this._reflectStateToDOM();

    // Reset UI state for new trace
    this._showPerfetto = false;
    this._showSoftNav = false;
    this._perfettoStatus = ViewerStatus.IDLE;
    this._softNavStatus = ViewerStatus.IDLE;

    this.dispatchEvent(new CustomEvent('trace-changed', { detail: this._currentTrace }));
    this.dispatchEvent(new CustomEvent('view-changed', { detail: this._viewState }));

    // Dispatch toggle events so UI updates to "closed"
    this.dispatchEvent(new CustomEvent('perfetto-toggled', { detail: this._showPerfetto }));
    this.dispatchEvent(new CustomEvent('softnav-toggled', { detail: this._showSoftNav }));
  }

  togglePerfetto() {
    this._showPerfetto = !this._showPerfetto;
    this.dispatchEvent(new CustomEvent('perfetto-toggled', { detail: this._showPerfetto }));
  }

  toggleSoftNav() {
    this._showSoftNav = !this._showSoftNav;
    this.dispatchEvent(new CustomEvent('softnav-toggled', { detail: this._showSoftNav }));
  }

  setSoftNavStatus(status) {
    this._softNavStatus = status;
    this.dispatchEvent(new CustomEvent('softnav-status-changed', { detail: this._softNavStatus }));
  }

  setPerfettoStatus(status) {
    this._perfettoStatus = status;
    this.dispatchEvent(new CustomEvent('perfetto-status-changed', { detail: this._perfettoStatus }));
  }

  get trace() {
    return this._currentTrace;
  }

  get view() {
    return this._viewState;
  }

  get showPerfetto() {
    return this._showPerfetto;
  }

  get showSoftNav() {
    return this._showSoftNav;
  }

  get perfettoStatus() {
    return this._perfettoStatus;
  }

  get softNavStatus() {
    return this._softNavStatus;
  }
}

export const appState = new AppState();
