/** @template {string} T @typedef {import('typed-query-selector/parser').ParseSelector<T, Element>} ParseSelector */

/**
 * Guaranteed context.querySelector. Always returns an element or throws if nothing matches query.
 * Thx lighthouse's dom.js!
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

/**
 * context.querySelectorAll, but returning a real array.
 * @template {string} T
 * @param {T} query
 * @param {ParentNode=} context
 * @return {Array<ParseSelector<T>>}
 */
export function $$(query, context) {
  const elements = (context || document).querySelectorAll(query);
  return /** @type {Array<ParseSelector<T>>} */ (Array.from(elements));
}
