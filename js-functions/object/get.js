import getLodash from "lodash/get";

/**
 *
 * @param {Object} obj
 * @param {string | array} path
 * @param {any} defaultValue
 */
const get = (obj, path, defaultValue, ifReturnThisValuesThenReturnDefaultValue = [undefined, null]) => {
  const defaultArray = ifReturnThisValuesThenReturnDefaultValue;
  const r = getLodash(obj, path, defaultValue);
  // console.log(`from get obj`, r);
  return defaultArray.includes(r) ? defaultValue : r;
};

export { get };
