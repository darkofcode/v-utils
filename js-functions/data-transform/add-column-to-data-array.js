import { insertInToIndex } from "../array/insert-into-index";
import { toTitle } from "../string/to-title";

/**
 * @description index start at column[1]
 * @param {{dataArray:any[],index:number,eachFunction:Function,columnName:string}} param0
 * @example
 const t = [
  ["user", "approved", "pending"],
  ["Vi Chet",       1, 1        ],
  ["Time of",       0, 1        ],
];
const r = addColumnToDataArray({ dataArray: t, index: 0, eachFunction: (r) => r[0]+r[1], columnName: "sum" });
r= [
    [ 'user', 'sum', 'approved', 'pending' ],
    [ 'Vi Chet',  2,          1, 1 ],
    [ 'Time of',  1,          0, 1 ]
  ]
 */
const addColumnToDataArray = ({ dataArray, index, eachFunction, columnName }) => {
  const firstRow = dataArray[0];
  const newHeader = [firstRow[0], ...insertInToIndex(firstRow.slice(1), index, toTitle(columnName))];

  let r = [newHeader];
  let i = 0;
  dataArray.slice(1).forEach((row) => {
    const dataRow = row.slice(1);
    r.push([row[0], ...insertInToIndex(dataRow, index, eachFunction(dataRow, i))]);
    i++;
  });
  return r;
};

export { addColumnToDataArray };

// const t = [
//   ["user", "approved", "pending"],
//   ["Vi Chet", 1, 1],
//   ["Time of", 0, 1],
// ];
// const r = addColumnToDataArray({ dataArray: t, index: 0, eachFunction: () => 5, columnName: "" });
// console.trace({ r });
