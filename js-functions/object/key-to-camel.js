import toCamelCase from "lodash/camelCase";
import { looper } from "./looper";

/**
 *
 * @param {Object} obj
 * @param {{removeKeyIfNull:boolean}} options removeKeyIfNull=false
 */
const objKeyToCamel = (obj, options = {}) => {
  const { removeKeyIfNull = false } = options;
  return looper(obj, (key, val) => {
    if (removeKeyIfNull) {
      if (val) {
        return { key: toCamelCase(key), val };
      } else {
        return { key: false, val };
      }
    } else {
      return { key: toCamelCase(key), val };
    }
  });
};

// let obj = {
//   a_time: "../time Tiese",
//   big_a: "/etc/passwd WARa",
//   c: 1231,
//   d01: new Date(),
//   n1: null,
//   n2: undefined,
//   n3: "string",
//   d: {
//     d: "javascript timea Re",
//     e: "fea rjav&#x0D;ascript: Soaer",
//     f_dict: {
//       e: "Time aer java\0script Gamer of Throne",
//       f: "sot Whaer drop table Jsack the Giand",
//       g: "gain so Much wtier ' or '1'='1  fase Erre",
//     },
//   },
//   g: [
//     null,
//     undefined,
//     Infinity,
//     "to be what INSERT INTO love",
//     "love $gt The best $exists",
//     223,
//     {
//       d_game: "javascript timea Re",
//       e_fake: "fea rjav&#x0D;ascript: Soaer",
//       n1: false,
//       n2: true,
//       n3: undefined,
//       f: {
//         e: "Time aer java\0script Gamer of Throne",
//         f: "sot Whaer drop table Jsack the Giand",
//         g: "gain so Much wtier ' or '1'='1  fase Erre",
//       },
//     },
//   ],
// };
// console.trace(objKeyToCamel(obj));

export { objKeyToCamel };
