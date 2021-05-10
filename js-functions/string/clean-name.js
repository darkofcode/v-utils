/**
 *
 * @param {string} name
 * @returns {string}
 * @example
 * let r = cleanName("    a   b    c    ")
 * // r = "a b c"
 */

function cleanName(name) {
  return name.trim().replace(/\s\s+/g, " ");
}
export { cleanName };
