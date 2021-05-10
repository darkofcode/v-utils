/**
 *
 * @param {string} str
 */
const isCapitalized = (str) => {
  if (str.charAt(0).toUpperCase() === str.charAt(0)) {
    return true;
  } else {
    return false;
  }
};

// console.trace({
//   a: isCapitalized("Timae"),
//   b: isCapitalized("TIMAE"),
//   c: isCapitalized("imae"),
//   d: isCapitalized("iTmDae"),
// });

export { isCapitalized };
