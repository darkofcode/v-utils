import startOfDay from "date-fns/startOfDay";
import endOfDay from "date-fns/endOfDay";
/**
 *
 * @param {string} columnName
 * @param {string | Date} fromDate
 * @param {string | Date} toDate
 * @return {string}
 * @example
 * fromToDate("date_submit","2020-01-01","2020-12-30")
 * return "date_submit" >= '2020-01-01' and "date_submit" <= '2020-12-30'
 */
const fromToDate = (columnName, fromDate, toDate) => {
  const sd = startOfDay(new Date(fromDate)).toJSON();
  const ed = endOfDay(new Date(toDate)).toJSON();

  return `"${columnName}" >= '${sd}' and "${columnName}" <= '${ed}'`;
};
export { fromToDate };

// console.trace(fromToDate("date_submit", "2020-01-01", "2020-12-30"));
