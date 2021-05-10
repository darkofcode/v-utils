import { sum as sumArr } from "../array/sum";
import valuesIn from "lodash/valuesIn";
import { toTitle } from "../string/to-title";
import { isEmpty } from "../object/is-empty";
/**
 *
 * @param {{collections:any[],uniqKey:string,rowName:string,conditions:any[],conditionKey:string,sumUpKey:string,headerName:string,renameConditions:any[],keepUniqKeyToLast?:boolean}} param0
 * @return {Promise<any[]>} matrix array of array
 * @example
 const col = [
  {
    approving_status: "pending",
    user_name: "Vi Chet",
    user_id: "115037",
    duration: 1,
  },
  {
    approving_status: "approved",
    user_name: "Vi Chet",
    user_id: "115037",
    duration: 1,
  },
  {
    approving_status: "pending",
    user_name: "Time of",
    user_id: "115038",
    duration: 1,
  },
];

const t = sumUpCollectionWithConditionToArray({
  collections: col,
  conditions: ["approved", "pending"],
  conditionKey: "approving_status",
  uniqKey: "user_id",
  rowName: "user_name",
  sumUpKey: "duration",
  headerName: "user",
});

t = [
  [ 'user', 'approved', 'pending' ],
  [ 'Vi Chet', 1, 1 ],
  [ 'Time of', 0, 1 ]
]

 * 
 */
const sumUpCollectionWithConditionToArray = ({
  collections = [],
  uniqKey,
  rowName,
  conditions,
  conditionKey,
  sumUpKey,
  headerName,
  renameConditions = [],
  keepUniqKeyToLast = false,
}) => {
  return new Promise((resolve, reject) => {
    let headerRow = renameConditions.length ? [headerName, ...renameConditions] : [headerName, ...conditions];
    headerRow = headerRow.map((k) => toTitle(k));
    headerRow = keepUniqKeyToLast ? [...headerRow, uniqKey] : headerRow;
    if (!collections.length) resolve([headerRow]);
    let result = {};

    collections.forEach((col) => {
      const key = col[uniqKey];

      if (!isEmpty(result[key])) {
        result[key] = getSumUpRow(
          result[key],
          col,
          conditions,
          conditionKey,
          sumUpKey,
          rowName,
          key,
          keepUniqKeyToLast
        );
      } else {
        result[key] = getRow(col, conditions, conditionKey, sumUpKey, rowName, key, keepUniqKeyToLast);
      }
    });

    resolve([headerRow, ...valuesIn(result)]);
  });
};

const getSumUpRow = (preRow, col, conditions, conditionKey, sumUpKey, rowName, key, keepUniqKeyToLast) => {
  const newRow = getRow(col, conditions, conditionKey, sumUpKey, rowName, key, keepUniqKeyToLast);
  let sumCol;
  if (keepUniqKeyToLast) {
    sumCol = sumArr(preRow.slice(1, -1), newRow.slice(1, -1));
    sumCol = [...sumCol, key];
  } else {
    sumCol = sumArr(preRow.slice(1), newRow.slice(1));
  }

  return [preRow[0], ...sumCol];
};

const getRow = (col, conditions, conditionKey, sumUpKey, rowName, key, keepUniqKeyToLast) => {
  let r = [toTitle(col[rowName])];
  conditions.forEach((condition) => {
    if (col[conditionKey] === condition) {
      r.push(+col[sumUpKey]);
    } else {
      r.push(0);
    }
  });
  return keepUniqKeyToLast ? [...r, key] : r;
};

export { sumUpCollectionWithConditionToArray };

// const col = [
//   {
//     approving_status: "pending",
//     user_name: "Vi Chet",
//     user_id: "115037",
//     duration: 1,
//   },
//   {
//     approving_status: "approved",
//     user_name: "Vi Chet",
//     user_id: "115037",
//     duration: 1,
//   },
//   {
//     approving_status: "pending",
//     user_name: "Time of",
//     user_id: "115038",
//     duration: 1,
//   },
//   {
//     approving_status: "pending",
//     user_name: "Time of 2",
//     user_id: "115038",
//     duration: 4,
//   },
//   {
//     approving_status: "pending",
//     user_name: "Time of 2",
//     user_id: "115038",
//     duration: 4,
//   },
// ];

// const t = async () => {
//   const a = await sumUpCollectionWithConditionToArray({
//     collections: col,
//     conditions: ["approved", "pending"],
//     conditionKey: "approving_status",
//     uniqKey: "user_id",
//     rowName: "user_name",
//     sumUpKey: "duration",
//     headerName: "user",
//     keepUniqKeyToLast: true,
//   });
//   console.trace(a);
// };
// t();
