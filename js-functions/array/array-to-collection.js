/**
 * @param {string[]} arrays
 * @param {string[]} keys
 * @return {object[]}
 * @example
 * let r = singleArrayToObjectArray(["all","pending"],["id","value"])
 * expect r = [{id:"all",value:"all"},{id:"pending",value:"pending"}]
 */
function singleArrayToObjectArray(arrays, keys) {
  let newArrays = [];
  arrays.forEach((arr) => {
    let obj = {};
    keys.forEach((k) => {
      obj[k] = arr;
    });
    newArrays.push(obj);
  });

  return newArrays;
}
export { singleArrayToObjectArray };
