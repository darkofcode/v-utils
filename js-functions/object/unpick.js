/**
 *
 * @param {Object} obj
 * @param {string[]} unpickKeys
 * @param {any[]} deleteKeysIfValuesContained default = [null, undefined]
 * @return Object
 * @example
 * const obj = {a: 0,b: 2,c: null,d: undefined,e: 3,f: "4"};
 * const a = unpick(obj, ["a", "b"]);
 * =>a = {e:3,f:"4"}
 */

const unpick = (obj, unpickKeys, deleteKeysIfValuesContained = [null, undefined]) => {
  let newObj = {};
  Object.keys(obj).forEach((key) => {
    const oldValue = obj[key];
    if (!deleteKeysIfValuesContained.includes(oldValue) && !unpickKeys.includes(key)) {
      newObj[key] = oldValue;
    }
  });
  return newObj;
};

// const obj = { a: 0, b: 2, c: null, d: undefined, e: 3, f: "4" };
// const a = unpick(obj, ["a", "f", "b", "e"], []);

// console.log({ a, obj });
export { unpick };
