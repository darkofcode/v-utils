/**
 *
 * @param {string} val
 * @param {boolean} addQuote
 * @returns {string}
 */
const sanitizeWithHiddenSpace = (val, addQuote = false) => {
  let newVal = val;
  const hiddenSpace = "​";
  if (typeof val === "string") {
    newVal = newVal.split("").join(hiddenSpace);
  }
  if (addQuote) {
    newVal = newVal[0] + "'" + newVal.substring(1);
  }
  return newVal;
};

export { sanitizeWithHiddenSpace };

// const a = ["javasccript", "test", "%3cscript", "a", "ab", "d"];
// const b = a.map((str) => sanitizeWithHiddenSpace(str, true));

// const testingResult = (vals1, vals2) => {
//   for (let i = 0; i < vals1.length; i++) {
//     const val1 = vals1[i];
//     const val2 = vals2[i];
//     if (val1 !== val2) return false;
//   }
//   return true;
// };
// const r = testingResult(a, b);
// console.trace({ a, b, r });
