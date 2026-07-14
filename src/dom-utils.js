/** @template {string} T @typedef {import('typed-query-selector/parser').ParseSelector<T, Element>} ParseSelector */

/**
 * Guaranteed context.querySelector. Always returns an element or throws if nothing matches query.
 * @template {string} T
 * @param {T} query
 * @param {ParentNode=} context
 * @return {ParseSelector<T>}
 */
export function $(query, context) {
  const result = (context || document).querySelector(query);
  if (result === null) {
    throw new Error(`query ${query} not found`);
  }
  return /** @type {ParseSelector<T>} */ (result);
}

// Assign globally for legacy script support
globalThis.$ = $;

/**
 * Sets up the file picker trigger for the page.
 * @param {(files: FileList | null) => void} onFileSelect
 */
export function setupFileInput(onFileSelect) {
  const fileinput = $('input#fileinput');
  $('#selectfile').addEventListener('click', e => {
    e.preventDefault();
    fileinput.showPicker();
  });
  fileinput.addEventListener('change', e => {
    onFileSelect(fileinput.files);
  });
}
