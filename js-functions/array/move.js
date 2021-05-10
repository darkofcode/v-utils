/**
 *
 * @param {any[]} arr
 * @param {number} from
 * @param {number} to
 */
const move = (arr, from, to) => {
  if (from >= arr.length || to >= arr.length) {
    throw new Error(`oldIndex[${from}] or newIndex[${to}] must not be greater than array length[${arr.length}]`);
  }
  const array = [...arr];
  const startIndex = from < 0 ? array.length + from : from;
  if (startIndex >= 0 && startIndex < array.length) {
    const endIndex = to < 0 ? array.length + to : to;

    const [item] = array.splice(from, 1);
    array.splice(endIndex, 0, item);
  }
  return array;
};
export { move };

// let a = [1,2,3,4,5,6,7,8,9];
