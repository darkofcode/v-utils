import isPlainObj from "lodash/isPlainObject";

/**
 *
 * @param {object} obj
 * @return boolean
 * @example
 * isObj(null)=>false;
 * isObj(undefined)=>false;
 * isObj([1,2])=>false;
 * isObj({a:1,b:2})=>true;
 */
const isObject = (obj) => {
  // if (typeof obj === "object" && obj !== null && obj !== undefined && !Array.isArray(obj) && !isDate(obj)) {
  //   return true;
  // }

  return isPlainObj(obj);
};
// console.trace({ isObject: isObject(new Date()) });
export { isObject };
