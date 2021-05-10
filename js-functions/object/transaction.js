import { get } from "./get";

/**
 *
 * get new transform object transaction value
 * @param {Object} obj
 * @param {Object} trx
 * @param {'obj'|'trx'|'obj&trx'} shrinkTo obj || trx
 * @example
 * obj = { a: 5, b: 6, c: 7 };
 * transaction(obj, { a: 1, b: -3, c: "a", d: 8 });
 * => { a: 6, b: 3, c: '7a' }
 * transaction(obj, { a: 1, b: -3, c: "a", d: 8 },'trx');
 * => { a: 6, b: 3, c: 'a7', d: 8 }
 */
const transaction = (obj, trx, shrinkTo = "obj") => {
  let newObj;
  if (shrinkTo === "obj") {
    newObj = {};

    Object.keys(obj).forEach((key) => {
      newObj[key] = get(obj, key, 0) + get(trx, key, 0);
    });
  } else if (shrinkTo === "trx") {
    newObj = {};
    Object.keys(trx).forEach((key) => {
      newObj[key] = get(obj, key, 0) + get(trx, key, 0);
    });
  } else {
    newObj = {};
    Object.keys({ ...obj, ...trx }).forEach((key) => {
      newObj[key] = get(obj, key, 0) + get(trx, key, 0);
    });
  }
  return newObj;
};

// const obj = { a: 5, b: 6, c: 7, e: 2 };
// const tr = transaction(obj, { a: 1, b: -3, c: "a", d: 8 });
// const tr2 = transaction(obj, { a: 1, b: -3, c: "a", d: 8 }, "trx");
// const tr3 = transaction(obj, { a: 1, b: -3, c: "a", d: 8 }, "obj&trx");

// console.trace({ tr, tr2, tr3, obj });

export { transaction };
