import { insertInToIndex } from "../array/insert-into-index";
/**
 * @description index start at column[1]
 * @param {{dataArray:any[],index:number,value:number,name:string}} param0
 * @example
const t = [
  ["user", "approved", "pending"],
  ["Vi Chet",       1,         1],
  ["Time of",       0,         1],
];
const r = addThresholdToGoogleChart({ dataArray: t, value: 5, name: "max" });

r: [
    [ 'user', 'approved', 'pending', 'max' ],
    [ '',              0,         0, 5     ],
    [ 'Vi Chet',       1,         1, 5     ],
    [ 'Time of',       0,         1, 5     ],
    [ '',              0,         0, 5     ]
]
 */
const addThresholdToGoogleChart = ({ dataArray, index, value, name }) => {
  const position = index === undefined ? dataArray[0].length + 1 : index;
  const firstRow = dataArray[0];
  const newHeader = [firstRow[0], ...insertInToIndex(firstRow.slice(1), position, name)];
  const thresholdRow = [
    "",
    ...insertInToIndex(
      firstRow.slice(1).map((v) => 0),
      position,
      value
    ),
  ];
  let r = [newHeader, thresholdRow];
  dataArray.slice(1).forEach((row) => {
    const dataRow = row.slice(1);
    r.push([row[0], ...insertInToIndex(dataRow, position, value)]);
  });
  return [...r, thresholdRow];
};

export { addThresholdToGoogleChart };

// const t = [
//   ["user", "approved", "pending"],
//   ["Vi Chet", 1, 1],
//   ["Time of", 0, 1],
// ];
// const r = addThresholdToGoogleChart({ dataArray: t, value: 5, name: "max" });
// console.trace({ r });
