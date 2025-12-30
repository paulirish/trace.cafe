// src/state.js

/**
 * @typedef {Object} TraceData
 * @property {string} url - The URL of the trace file (JSON/GZIP).
 * @property {import('firebase/storage').FullMetadata | null} metadata - Metadata about the trace file.
 * @property {string} title - The display title of the trace.
 */

/**
 * @typedef {'landing' | 'viewing'} ViewState
 */

class AppState extends EventTarget {
  constructor() {
    super();
    /** @type {TraceData | null} */
    this._currentTrace = null;
    /** @type {ViewState} */
    this._viewState = 'landing';

    // UI toggles
    this._showPerfetto = false;
    this._showSoftNav = false;
    this._isSoftNavLoading = false;
  }

  /**
   * @param {string} url
   * @param {import('firebase/storage').FullMetadata} metadata
   * @param {string} title
   */
  setTrace(url, metadata, title) {
    this._currentTrace = { url, metadata, title };
    this._viewState = 'viewing';
    this.dispatchEvent(new CustomEvent('trace-changed', { detail: this._currentTrace }));
    this.dispatchEvent(new CustomEvent('view-changed', { detail: this._viewState }));
  }

  togglePerfetto() {
    this._showPerfetto = !this._showPerfetto;
    this.dispatchEvent(new CustomEvent('perfetto-toggled', { detail: this._showPerfetto }));
  }

  toggleSoftNav() {
    this._showSoftNav = !this._showSoftNav;
    this.dispatchEvent(new CustomEvent('softnav-toggled', { detail: this._showSoftNav }));
  }

  setSoftNavLoading(isLoading) {
    this._isSoftNavLoading = isLoading;
    this.dispatchEvent(new CustomEvent('softnav-loading-changed', { detail: this._isSoftNavLoading }));
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

  get isSoftNavLoading() {
    return this._isSoftNavLoading;
  }
}

export const appState = new AppState();
