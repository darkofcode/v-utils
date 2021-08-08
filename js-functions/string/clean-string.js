import { cleanName } from "./clean-name";

/**
 *
 * @param {string} string
 * @returns {string}
 * @example
 * let r = cleanString("    a   b    c    ")
 * // r = "a b c"
 */

function cleanString(string = "", toLowerCase = true) {
  return toLowerCase ? cleanName(string).toLocaleLowerCase() : cleanName(string);
}
export { cleanString };
