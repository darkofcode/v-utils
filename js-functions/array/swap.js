/**
 *
 * @param {any[]} arr
 * @param {number} oldIndex
 * @param {number} newIndex
 */

function swap(arr, oldIndex, newIndex) {
  let newArr = [...arr];
  if (oldIndex >= arr.length || newIndex >= arr.length) {
    throw new Error(
      `oldIndex[${oldIndex}] or newIndex[${newIndex}] must not be greater than array length[${arr.length}]`
    );
  }
  newArr[newIndex] = newArr.splice(oldIndex, 1, newArr[newIndex])[0];
  return newArr;
}

export { swap };

// const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let i = 0; i <= 7; i++) {
//   console.trace(`${i}-${i + 2}`, swapArray(a, i, i + 2));
// }
// console.trace(`a`, a);
