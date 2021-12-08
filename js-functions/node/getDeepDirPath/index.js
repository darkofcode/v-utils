import { hash } from "./simpleHash";

/**
 *
 * @param {string} numString
 * @param {number} subDirectoryDeep
 * @param {number} salt
 * @return {string[]}
 */
export const getDeepDirPath = (numString, subDirectoryDeep = 7, salt = 349) => {
  numString = typeof numString === "number" ? numString.toString() : numString;

  const padZero = getPadZero(numString, subDirectoryDeep);
  return padZero.map((p) => hash(p, salt)).join("/");
};

/**
 *
 * @param {String} numString
 */
const getPadZero = (numString, subDirectoryDeep = 7) => {
  const padZero = subDirectoryDeep * 3 - numString.length;
  let r = "";
  for (let i = 0; i < padZero; i++) {
    r += "0";
  }
  r = r + numString;
  let arr = [];
  for (let i = 0; i < subDirectoryDeep; i++) {
    arr.push(r.slice(i * 3, i * 3 + 3));
  }
  arr.pop();
  return arr;
};

// console.log(`t0: `, deepSubdirectory(0));
// console.log(`t1: `, deepSubdirectory(1));
// console.log(`t2: `, deepSubdirectory(2));
// console.log(`t3: `, deepSubdirectory(Number.MAX_SAFE_INTEGER));
// console.log(`t4: `, deepSubdirectory(1001));
// console.log(`t5: `, deepSubdirectory(361001));
