/**
 *
 * @param {any[]} arr
 * @param {number} index
 * @param {any} item
 * @return {any[]}
 * @example
 * a = [1,2,3,4,5]
 * t = insertToIndex(a,2,"me");
 * t = [ 1, 2, 'me', 3, 4, 5 ]
 */
const insertInToIndex = (arr, index, item) => {
  let newArr = [...arr];
  newArr.splice(index, 0, item);
  return newArr;
};

export { insertInToIndex };

// let a = [1, 2, 3, 4, 5];
// let t = insertInToIndex(a, 0, "me");
// console.trace({ t, a });
