import { getPageRange } from "../get-page-range";
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

export { getItemsByPage };
