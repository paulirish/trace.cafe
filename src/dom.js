/**
 * Guaranteed context.querySelector. Always returns an element or throws if nothing matches query.
 * Thx lighthouse's dom.js!
 * @template {string} T
 * @param {T} query
 * @param {ParentNode=} context
 * @return {import('typed-query-selector/parser').ParseSelector<T, Element>}
 */
export function $(query, context = document) {
  const result = context.querySelector(query);
  if (result === null) {
    throw new Error(`query ${query} not found`);
  }
  return result;
}
