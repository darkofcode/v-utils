/**
 *
 * @param {string} secrete
 * @param {string} string
 * @param {number} radix
 * @return {number}
 * @example
 * toNumber("abcdef","bddafd",6) => 12345
 */
const toNumber = (secrete, string, radix) => {
  if (radix > secrete.length || radix <= 1) throw new Error("radix must be 2<= x <= " + secrete.length);
  var result = 0;
  var rixits = string.split("");
  for (var e = 0; e < rixits.length; e++) {
    let secreteIndex = secrete.indexOf(rixits[e]);
    if (secreteIndex === -1) throw new Error(`"${string}" does not match with secrete`);
    result = result * radix + secreteIndex;
  }
  return result;
};

export { toNumber };
