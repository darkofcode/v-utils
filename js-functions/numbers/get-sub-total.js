import { round } from "./round";

/**
 *
 * @param {{}[]} collectionsArray
 * @param {string[] | string} key
 * @return {string}
 */
const getSubTotal = (collectionsArray, key) => {
  let n = collectionsArray.reduce((pre, cur) => pre + getCurrentCash(cur, key), 0);
  // console.log(`from getTotal`, { values, n });

  n = n ? n : "0.00";
  return round(n);
};

const getCurrentCash = (opt, key) => {
  // console.log(`from `, { opt, key });
  return Array.isArray(key) ? key.reduce((pre, cur) => pre * (opt[cur] ? +opt[cur] : 0), 1) : opt[key] ? +opt[key] : 0;
};

export { getSubTotal };
