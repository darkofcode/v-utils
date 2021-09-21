import { getPageRange } from "../get-page-range";

/**
 *
 * @param {any[]} arr
 * @param {number} page
 * @param {number} maxItem
 * @param {boolean} isReverse
 * @default {{isReverse:false}}
 * @returns {any[]}
 */
const getItemsByPage = (arr, page, maxItem, isReverse = false) => {
  const { from, to } = getPageRange(page, maxItem);
  if (!isReverse) {
    return arr.slice(from, to);
  } else {
    const rFrom = -to;
    const rTo = -from;
    if (rTo === 0 || rTo === -0) {
      return arr.slice(rFrom);
    } else {
      return arr.slice(rFrom, rTo);
    }
  }
};

// const t = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(`from t0: `, getItemsByPage(t, 0, 3));
// console.log(`from t1: `, getItemsByPage(t, 1, 3));
// console.log(`from t2: `, getItemsByPage(t, 2, 3));
// console.log(`from t3: `, getItemsByPage(t, 3, 3));
// console.log(`from t4: `, getItemsByPage(t, 4, 3));
// console.log(`from t5: `, getItemsByPage(t, 5, 3));

export { getItemsByPage };
