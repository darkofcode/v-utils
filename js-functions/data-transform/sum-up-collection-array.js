import { sum as sumArr } from "../array/sum";
import valuesIn from "lodash/valuesIn";
import { toTitle } from "../string/to-title";
import { isEmpty } from "../object/is-empty";
import { get } from "../object/get";

/**
 *
 * @param {{collections:any[],sumUpKeys:string[],rowName:string,renameRowKeys:string[],keepUniqKeyToLast,formatRow:boolean}} param0
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
  duration: 1,
  user_id: "115094",
  user_name: "MovieRecap",
};
const object3 = {
  day_off_left: 9,
  duration: 1,
  user_id: "115094",
  user_name: "MovieRecap",
};
const arr = [object1, object2, object3];
const t = sumUpObjectToArray({
  collections: arr,
  uniqKey: "user_id",
  sumUpKeys: ["day_off_left", "duration"],
  rowName: "user_name",
  headerRowName: "user",
});
t= 
[
    [ 'user'      , 'day_off_left', 'duration' ],
    [ 'Vi Chet'   ,              9, 1          ],
    [ 'MovieRecap',             18, 2          ]
]
 */

const sumUpCollectionToArray = ({
  collections = [],
  uniqKey,
  sumUpKeys,
  rowName,
  headerRowName,
  renameRowKeys = [],
  keepUniqKeyToLast = false,
  formatRow = true,
}) => {
  return new Promise((resolve, reject) => {
    let headerRow = renameRowKeys.length ? [headerRowName, ...renameRowKeys] : [headerRowName, ...sumUpKeys];
    headerRow = headerRow.map((k) => toTitle(k));
    headerRow = keepUniqKeyToLast ? [...headerRow, uniqKey] : headerRow;
    if (!collections.length) resolve([headerRow]);
    let result = {};
    collections.forEach((col) => {
      const key = get(col, uniqKey, "");
      if (!isEmpty(result[key])) {
        result[key] = getSumUpRow(result[key], col, rowName, sumUpKeys, key, keepUniqKeyToLast, formatRow);
      } else {
        result[key] = getRow(col, rowName, sumUpKeys, key, keepUniqKeyToLast, formatRow);
      }
    });
    resolve([headerRow, ...valuesIn(result)]);
  });
};

const getSumUpRow = (preRow, col, rowName, sumUpKeys, key, keepUniqKeyToLast, formatRow) => {
  const newRow = getRow(col, rowName, sumUpKeys, key, keepUniqKeyToLast, formatRow);
  // const sumCol = sumArr(preRow.slice(1), newRow.slice(1));
  let sumCol;
  if (keepUniqKeyToLast) {
    sumCol = sumArr(preRow.slice(1, -1), newRow.slice(1, -1));
    sumCol = [...sumCol, key];
  } else {
    sumCol = sumArr(preRow.slice(1), newRow.slice(1));
  }
  return [preRow[0], ...sumCol];
};

const getRow = (col, rowName, sumUpKeys, key, keepUniqKeyToLast, formatRow = false) => {
  let r = formatRow ? [toTitle(get(col, rowName))] : [get(col, rowName)];
  sumUpKeys.forEach((key) => {
    r.push(+col[key]);
  });
  return keepUniqKeyToLast ? [...r, key] : r;
};

export { sumUpCollectionToArray };

// const object1 = {
//   day_off_left: 9,
//   duration: 1,
//   user_id: "115037",
//   user_name: "Vi Chet",
// };
// const object2 = {
//   day_off_left: 9,
//   duration: 1,
//   user_id: "115094",
//   user_name: "MovieRecap",
// };
// const object3 = {
//   day_off_left: 3,
//   duration: 2,
//   user_id: "115094",
//   user_name: "MovieRecap",
// };
// const arr = [object1, object2, object3];
// const t = async () => {
//   let a = await sumUpCollectionToArray({
//     collections: arr,
//     uniqKey: "user_id",
//     sumUpKeys: ["day_off_left", "duration"],
//     rowName: "user_name",
//     headerRowName: "user",
//     renameRowKeys: ["left", "long"],
//     keepUniqKeyToLast: true,
//   });
//   console.trace(a);
// };
// t();
