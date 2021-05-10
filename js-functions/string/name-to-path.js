import { multiply } from "./multiply";

/**
 * @param {string | number} name
 * @param {number} dividerLength default 2
 * @param {string} escapeLetter default u
 * @return {string[]}
 * @example
 * r = nameToPath("tp5va")
 * => ["tp","5v","au"]
 * @description
 * combination letter should be 31 chars
 * escape letter should be u as most of curse words dont end with u
 * dividerLength should be 2 as 31 **2 = 961 which is ideal: one directory 1k files
 */

const nameToPath = (name, dividerLength = 2, escapeLetter = "u") => {
  const idString = name.toString();

  let pos = 0;
  let pathArray = [];
  const remain = idString.length % dividerLength;
  const usedString = remain ? getNoRemainName(name, dividerLength, remain, escapeLetter) : name;

  for (pos; pos < usedString.length; pos = pos + dividerLength) {
    pathArray.push(usedString.substr(pos, dividerLength));
  }

  return pathArray;
};
const getNoRemainName = (name, dividerLength, remain, escapeLetter) => {
  return name.slice(0, -remain) + name.slice(-remain) + multiply(escapeLetter, dividerLength - remain);
};
// const test = "tp5vant";
// for (let i = 0; i < test.length; i++) {
//   console.trace(`divide by ${i + 1}`, JSON.stringify(nameToPath(test, i + 1)));
// }
export { nameToPath };
