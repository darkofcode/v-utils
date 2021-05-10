/**
 *
 * @param {number} currentPage current page
 * @param {number} maxItem
 * @return return object {from,to}
 * @example
 * getPageRange(1,9)
 * => {from:0,to:9}
 */

const getPageRange = (currentPage, maxItem) => {
  if (currentPage <= 1) {
    currentPage = 1;
  }
  const [from, to] = [(currentPage - 1) * maxItem, currentPage * maxItem];
  return { from, to };
};

export { getPageRange };
