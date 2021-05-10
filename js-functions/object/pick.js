import trim from "lodash/trim";

/**
 *
 * @param {Object} obj
 * @param {string | string[]} pickKeys
 * @param {any[]} deleteKeysIfValuesContained default = [null, undefined]
 * @return Object
 * @example
 * const obj = {a: 0,b: 2,c: null,d: undefined,e: 3,f: "4"};
 * const a = pick(obj, ["a", "b", "c", "d", "h", "i"]);
 * =>a = {a:0,b:2}
 */

const pick = (obj, pickKeys, deleteKeysIfValuesContained = [null, undefined, NaN]) => {
  let newObj = {};
  let newPickKeys;
  if (typeof pickKeys === "string") {
    newPickKeys = pickKeys.split(",").map((key) => trim(key));
  } else {
    newPickKeys = pickKeys;
  }
  newPickKeys.forEach((key) => {
    const oldValue = obj[key];
    if (!deleteKeysIfValuesContained.includes(oldValue)) {
      newObj[key] = oldValue;
    }
  });
  return newObj;
};

export { pick };
