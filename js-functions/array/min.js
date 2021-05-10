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

// console.log(min([1, 2, 3, 12, 4]));
// console.log(min([{ id: 1 }, { id: 2 }, { id: 4 }, { id: -12 }], (o) => o.id));
// console.log(min([{ id: 1 }, { id: 2 }, { id: -4 }, { id: -12 }], (o) => o.id));
// console.log(min([{ id: -1 }, { id: -2 }, { id: -4 }, { id: -12 }], (o) => o.id));

export { min };
