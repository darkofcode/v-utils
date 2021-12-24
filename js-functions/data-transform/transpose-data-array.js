/**
 * 
 * @param {any[]} dataArray 
 * @return {any[]}
 * @example
 const t = [
  ["att", "001", "002", "003"],
  ["Present", 1, 2, 3],
  ["Absence", 4, 5, 6],
  ["Late", 7, 8, 9],
  ["Approved Absence", 10, 11, 12],
];
=>[
  [ 'att', 'Present', 'Absence', 'Late', 'Approved Absence' ],
  [ '001', 1, 4, 7, 10 ],
  [ '002', 2, 5, 8, 11 ],
  [ '003', 3, 6, 9, 12 ]
]
 */
function transposeDataArray(dataArray) {
  if (!dataArray.length) return dataArray;
  return dataArray[0].map((_, colIndex) =>
    dataArray.map((row) => {
      return row[colIndex];
    })
  );
}
export { transposeDataArray };

// const d = [
//   ["att", "001", "002", "003"],
//   ["Present", 1, 2, 3],
//   ["Absence", 4, 5, 6],
//   ["Late", 7, 8, 9],
//   ["Approved Absence", 10, 11, 12],
//   ["Approved Absence", 10, 11, 12],
//   ["Approved Absence", 10, 11, 12],
//   ["Approved Absence", 10, 11, 12],
// ];
// const t = transposeDataArray(d);
// const tr = transposeDataArray(t);
