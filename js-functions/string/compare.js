/**
 *
 * @param {string[]} stringArray array of string needed to be compared
 * @param {boolean} caseSensitive default false
 * @return {boolean}
 */
function compare(stringArray, caseSensitive = false) {
  // console.trace({ stringArray });
  var v0, i, v;
  if (caseSensitive === void 0) {
    caseSensitive = false;
  }
  if (stringArray.length <= 1) return false;
  if (!caseSensitive) {
    v0 = getString(stringArray[0]);
    const arr = stringArray.slice(1);
    for (i = 0; i < arr.length; i++) {
      v = getString(arr[i]);
      if (v0 !== v) {
        return false;
      }
    }
    return true;
  } else {
    v0 = stringArray[0];
    const arr = stringArray.slice(1);
    for (i = 0; i < arr.length; i++) {
      v = arr[i];
      if (v0 !== v) {
        return false;
      }
    }
    return true;
  }
}

const getString = (str) => {
  const t = typeof str;
  return t === "string" || t === "number" ? str.toString().toLocaleLowerCase().trim() : str;
};
export { compare };

// console.trace(compare([{ b: 1 }, { a: 1 }], false));
// console.trace(compare(["time", "time    "], false));
// console.trace(compare(["time", "time    "], true));
// console.trace(compare(["time", "time2", "time"], true));
// console.trace(compare(["time", "time3"], true));
// console.trace(compare(["time", "time"], true));
