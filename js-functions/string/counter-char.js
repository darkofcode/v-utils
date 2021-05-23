/**
 *
 * @param {string} str
 * @param {string} char
 * @param {boolean} caseSensitive
 * @returns {number}
 * @example
 * const a = "AabaAa cd Cd";
 * countChar(a, " ") // 2
 * countChar(a, "c") // 1
 * countChar(a, "c", false) // 2
 */
const countChar = (str, char, caseSensitive = true) => {
  const reg = new RegExp(char.toString(), caseSensitive ? "g" : "gi");
  return (str.match(reg) || []).length;
};

// let a = "AabaAa cd Cd";

// console.log(`sen`, countChar(a, " "));
// console.log(`ins`, countChar(a, "c"));
// console.log(`ins 2`, countChar(a, "c", false));

export { countChar };
