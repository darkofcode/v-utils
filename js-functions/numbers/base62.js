import { toString } from "./to-string";
import { toNumber } from "../string/to-number";
// const baseString = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz._-/+";

const Base62 = {
  /**
   * @param {string} baseString
   * @param {number} number
   * @param {number} radix
   * @return {string}
   */
  toString: (baseString, number, radix) => toString(baseString, number, baseString.length),
  /**
   * @param {string} baseString
   * @param {string} string
   * @param {number} radix
   * @return {string}
   */
  toNumber: (baseString, string, radix) => toNumber(baseString, string, baseString.length),
};

// const a = "TOTAL.0.W";
// const a1 = "___A__B___C___";
// const a2 = "---e---f----g----";
// let b = Base62.toNumber(baseString, a, baseString.length);
// let b1 = Base62.toNumber(baseString, a1, baseString.length);
// let b2 = Base62.toNumber(baseString, a2, baseString.length);

// const getNumber = (str) =>
//   str
//     .split("")
//     .map((r) => Base62.toNumber(baseString, r, baseString.length))
//     .join("");
// console.log(`from a:\n`, { a1: getNumber(a1), a2: getNumber(a2), a: getNumber(a) });

export { Base62 };
