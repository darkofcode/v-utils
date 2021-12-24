/**
 *
 * @param {any[]} mainArray
 * @param {any[]} secondArray
 * @param {{(item:any):any}} iterator
 * @param {boolean} allOf default false
 * @example
 * includesArray([1, 2, 3, 4, 6], [2, 6,7]) // false
 * includesArray([{id:1},{id:2}], [{id:1},{id:2}], (o) => o.id)
 *  //=> true
 */
const includesArray = (mainArray, secondArray, iterator, allOf = true) => {
  const mains = mainArray.map((arr) => (typeof iterator === "function" ? iterator(arr) : arr));
  const seconds = secondArray.map((arr) => (typeof iterator === "function" ? iterator(arr) : arr));
  if (allOf) {
    for (let i = 0; i < seconds.length; i++) {
      if (!mains.includes(seconds[i])) return false;
    }
    return true;
  } else {
    for (let i = 0; i < seconds.length; i++) {
      if (mains.includes(seconds[i])) return true;
    }
    return false;
  }
};

export { includesArray };

// const m1 = [
//   { id: 1, v: 1 },
//   { id: 2, v: 2 },
// ];
// const m2 = [
//   { id: 3, v: 3 },
//   { id: 4, v: 4 },
//   { id: 1, v: 1 },
//   { id: 2, v: 2 },
// ];
// const a = [
//   { id: 3, v: 3 },
//   { id: 4, v: 4 },
// ];
