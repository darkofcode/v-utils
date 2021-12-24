import big from "big.js";
/**
 *
 * @param {any[]} arr
 * @param {Function?} iterationFnc
 * @return {string}
 */
const max = (arr, iterationFnc) => {
  const m = arr.reduce((pre, cur) => {
    const current = typeof iterationFnc === "function" ? big(iterationFnc(cur)) : big(cur);
    return current.gte(pre) ? big(current) : big(pre);
  }, big("-1e120"));
  return m.toString();
};

export { max };
