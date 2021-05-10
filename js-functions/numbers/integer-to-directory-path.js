import { multiply } from "../string/multiply";

/**
 *
 * @param {string | number} id
 * @param {number} dividerLength default 3
 * @return {string[]}
 * @example
 * r = integerToDirectoryPath(1234567)
 * => ["001","234","567"]
 */

const integerToDirectoryPath = (id, dividerLength = 3) => {
  const idString = id.toString();

  let pos = 0;
  let pathArray = [];
  const remain = idString.length % dividerLength;
  if (remain === 0) {
    pos = dividerLength;
    pathArray = [idString.substr(0, dividerLength)];
  } else {
    pos = remain;
    pathArray = [nameRemain(idString.substr(0, remain), dividerLength)];
  }

  for (pos; pos < idString.length; pos = pos + dividerLength) {
    pathArray.push(idString.substr(pos, dividerLength));
  }

  return pathArray;
};

const nameRemain = (remain, dividerLength) => {
  let mul = dividerLength - remain.length;
  return multiply("0", mul) + remain;
};

// const arr = [
//   "2939913116874300",
//   "2941998164112957",
//   "2943061931882046",
//   "2943789962393151",
//   "2947094075700800",
//   "2947479876171329",
//   "2954221699757634",
// ];
// arr.forEach((str) => {
//   console.trace(`item ${str} -> ${integerToDirectoryPath(str, 6)}`);
// });
export { integerToDirectoryPath };
