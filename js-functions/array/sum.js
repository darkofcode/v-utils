/**
 *
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */

const sum = (arr1, arr2) => {
  let r = [];
  for (let i = 0; i < arr1.length; i++) {
    r.push(arr1[i] + arr2[i]);
  }
  return r;
};
export { sum };
// console.trace(sum([1, 2, 3], [4, 2, 1]));
