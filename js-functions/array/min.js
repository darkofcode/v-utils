import big from "big.js";
/**
 *
 * @param {any[]} arr
 * @param {Function?} iterationFnc
 * @return {string}
 */
const min = (arr, iterationFnc) => {
  const m = arr.reduce((pre, cur) => {
    const current = typeof iterationFnc === "function" ? big(iterationFnc(cur)) : big(cur);
    return current.lte(pre) ? big(current) : big(pre);
  }, big("1e120"));
  return m.toString();
};

export { min };
