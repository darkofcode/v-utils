import { cleanName } from "./clean-name";

/**
 *
 * @param {string} anyString as string
 * @returns {string}
 * @example
 * let r = noWhiteSpace("    a   b    c    ")
 * // r = "a b c"
 */
function noWhiteSpace(anyString) {
  return cleanName(anyString);
}

export { noWhiteSpace };
