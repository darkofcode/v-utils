import { suspiciousInput } from "../string/suspicious-inputs";
import { looper } from "./looper";
import { sanitizeWithHiddenSpace } from "../string/sanitize-hidden-white-space";

/**
 *
 * @param {string[]} addBlackList
 *
 *
 */

const sanitize = (obj, addBlackList = []) => {
  const restrictions = [...getRestrictions(suspiciousInput), ...addBlackList];

  return looper(obj, (key, val) => ({ key, val: validate(val, restrictions) }));
};

const validate = (val, restrictions) => {
  let newVal = val;
  if (typeof val === "string") {
    const newValLowerCase = newVal.toLowerCase();
    restrictions.forEach((res) => {
      const hasSuspicious = newValLowerCase.includes(res.toLowerCase());
      if (hasSuspicious) {
        newVal = newVal.replace(res, (match) => sanitizeWithHiddenSpace(match));
      }
      // console.trace(`validator`, { val, newVal });
    });
  }
  return newVal;
};

const getRestrictions = (suspiciousInput) => {
  let newArr = [];
  suspiciousInput.forEach((val) => (newArr = [...newArr, ...val.patterns]));
  return newArr;
};

export { sanitize };

// let obj = {
//   a: "../time Tiese",
//   b: "/etc/passwd WARa",
//   c: "onerror= sOEAER",
//   d1: new Date(),
//   d: {
//     d: "javascript timea Re",
//     e: "fea rjav&#x0D;ascript: Soaer",
//     f: {
//       e: "Time aer java\0script Gamer of Throne",
//       f: "sot Whaer drop table Jsack the Giand",
//       g: "gain so Much wtier ' or '1'='1  fase Erre",
//     },
//   },
//   g: [
//     {
//       e: "Time aer java\0script Gamer of Throne",
//       f: "sot Whaer drop table Jsack the Giand",
//       g: "gain so Much wtier ' or '1'='1  fase Erre",
//     },
//     "to be what INSERT INTO love",
//     "love $gt The best $exists",
//     undefined,
//     Infinity,
//     "1234",
//     "faer1a",
//     null,
//   ],
// };
// console.trace(sanitize(obj));
