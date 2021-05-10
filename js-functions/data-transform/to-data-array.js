import keysIn from "lodash/keysIn";
import { isEmpty } from "../object/is-empty";
import { toTitle } from "../string/to-title";

/**
 *
 * @param {{collections:any[],headerRowName:string,sumUpKeys:string[],rowName:string,renameRowKeys?:string[]}} param0
 * @return {Promise<any[]>} matrix array of array
 * @example
const object1 = {
  day_off_left: 9,
  duration: 1,
  user_id: "115037",
  user_name: "Vi Chet",
};
const object2 = {
  day_off_left: 9,
  duration: 11,
  user_id: "115094",
  user_name: "MovieRecap",
};
const object3 = {
  day_off_left: 9,
  duration: 12,
  user_id: "115094",
  user_name: "MovieRecap",
};
const col = [object1, object2, object3];
toDataArray({
  collections: col,
  sumUpKeys: ["day_off_left", "duration"],
  rowName: "user_name",
  headerRowName: "user",
  renameRowKeys: ["day off", "dur"],
}).then((t) => console.trace({ t }));
t= 
[
    [ 'user', 'day off', 'dur' ],
    [ 'Vi Chet', 9, 1 ],
    [ 'MovieRecap', 9, 1 ],
    [ 'MovieRecap', 9, 1 ]
]
 */

const toDataArray = ({ collections = [], headerRowName, rowName, sumUpKeys, renameRowKeys = [] }) => {
  return new Promise((resolve, reject) => {
    let _sumUpKeys = getSumUpKeys(collections, sumUpKeys, rowName);
    let headerRow = renameRowKeys.length
      ? [headerRowName, ...renameRowKeys]
      : [headerRowName, ..._sumUpKeys.map((k) => toTitle(k))];
    headerRow = headerRow.map((k) => toTitle(k));
    if (!collections.length) resolve([headerRow]);
    let result = [];
    collections.forEach((col) => {
      let row = [];
      _sumUpKeys.forEach((k) => {
        row.push(col[k]);
      });
      result.push([toTitle(col[rowName]), ...row]);
    });
    resolve([headerRow, ...result]);
  });
};

export { toDataArray };

const getSumUpKeys = (collections, sumUpKeys, rowName) => {
  if (!isEmpty(sumUpKeys)) return sumUpKeys;
  const allKeys = keysIn(collections[0]);
  return allKeys.filter((k) => k !== rowName);
};

// const object1 = {
//   day_off_left: 9,
//   duration: 1,
//   user_id: "115037",
//   user_name: "Vi Chet",
// };
// const object2 = {
//   day_off_left: 9,
//   duration: 11,
//   user_id: "115094",
//   user_name: "MovieRecap",
// };
// const object3 = {
//   day_off_left: 9,
//   duration: 12,
//   user_id: "115094",
//   user_name: "MovieRecap",
// };
// const object4 = {
//   day_off_left: 1,
//   duration: 12,
//   user_id: "115094",
//   user_name: "vi chetch 2",
// };
// const object5 = {
//   day_off_left: 3,
//   duration: 2,
//   user_id: "115094",
//   user_name: "vi chetch 3",
// };
// const col = [object1, object2, object3, object4, object5];
// toDataArray({
//   collections: col,
//   sumUpKeys: ["day_off_left", "duration"],
//   rowName: "user_name",
//   headerRowName: "user",
//   renameRowKeys: ["day off", "dur"],
// }).then((t) => console.trace({ t }));
