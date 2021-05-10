/**
 *
 * @param {any[]} dataArray
 */
const dataArrayToCSV = (dataArray) => {
  const csvContent = "data:text/csv;charset=utf-8," + dataArray.map((e) => e.join(",")).join("\n");
  // console.trace({ dataArray, csvContent });
  return encodeURI(csvContent);
};

export { dataArrayToCSV };
