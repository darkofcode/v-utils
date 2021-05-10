/**
 *
 * @param {string} currentItem
 * @param {any} object object
 * @param {string[]} mainKeys array key to be tests
 * @param {string} uniqKey default to "id"
 * @param {string} valueKey default to "value"
 * @return {{values:string[]|number[],valuesObj:any[]}}
 * @example
 * const obj = {
 *   present:[{id:1,value:1},{id:1,value:1},{id:2,value:2},{id:3,value:3}],
 *   absence:[{id:2,value:2},{id:4,value:4}],
 *   late:[{id:3,value:3},{id:5,value:5}],
 *   id:"abcdef",
 *   date:"2020-11-18"
 * }
 * const a = getDuplicateValues("present",obj,["present","absence","late"]);
 * //a = {values:[1,2,3],valuesObj:[{id:1,value:1},{id:2,value:2},{id:3,value:3}]}
 *
 */

const getDuplicateValues = (currentItem, object, mainKeys, uniqKey = "id", valueKey = "value") => {
  // console.trace({ currentItem, parent });
  const current = object[currentItem];
  let others = {};

  mainKeys.forEach((k) => {
    if (k !== currentItem) {
      object[k].forEach((o) => {
        others[o[uniqKey]] = o[uniqKey];
      });
    }
  });

  let result = [];
  let resultObj = [];
  let duplicateSelfs = {};
  current.forEach((item) => {
    // check dup with others
    if (others[item[uniqKey]]) {
      result.push(item[valueKey]);
      resultObj.push(item);
    }

    // check current duplicate
    if (!duplicateSelfs[item[uniqKey]]) {
      duplicateSelfs[item[uniqKey]] = item[uniqKey];
    } else {
      result.push(item[valueKey]);
      resultObj.push(item);
    }
  });
  return { values: result, valuesObj: resultObj };
};

// const obj = {
//   present: [
//     { id: 1, value: 1 },
//     { id: 1, value: 1 },
//     { id: 2, value: 2 },
//     { id: 3, value: 3 },
//   ],
//   absence: [
//     { id: 2, value: 2 },
//     { id: 4, value: 4 },
//   ],
//   late: [
//     { id: 3, value: 3 },
//     { id: 5, value: 5 },
//   ],
//   id: "abcdef",
//   date: "2020-11-18",
// };
// let a = getDuplicateValues("present", obj, ["present", "absence", "late"]);
// console.trace(`from component`, JSON.stringify(a, null, 2));

export { getDuplicateValues };
