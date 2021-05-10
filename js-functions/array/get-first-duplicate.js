/**
 *
 * @param {any[]} arr
 * @param {(item:any)=>void | void} iterator
 * @return {null | any}
 */

const getFirstDuplicate = (arr, iterator) => {
  let obj = {};
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    const v = iterator ? iterator(arr[i]) : arr[i];
    if (!obj[v]) {
      obj[v] = 1;
    } else {
      return arr[i];
    }
  }
  return null;
};
export { getFirstDuplicate };
