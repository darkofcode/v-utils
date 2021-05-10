/**
 *
 * @param {number} page
 * @param {number} maxItemPerPage
 * @example
 * getOffset(1,3)=>0
 * getOffset(2,3)=>3
 * getOffset("abc",3)=>0
 */

const getOffset = (page, maxItemPerPage) => {
  let myPage = page ? parseInt(page) : 1;
  myPage = myPage <= 0 || isNaN(myPage) ? 1 : myPage;
  return (myPage - 1) * maxItemPerPage;
};
export { getOffset };
