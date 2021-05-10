/**
 *
 * @param {string} str
 * @param {number} multiplier
 * @return {string}
 * @example
 * multiply("a",3) => "aaa"
 */
const multiply = (str, multiplier) => {
  if (multiplier <= 0) return str;
  let newStr = "";
  for (let i = 0; i < multiplier; i++) {
    newStr = str + newStr;
  }
  return newStr;
};

export { multiply };
