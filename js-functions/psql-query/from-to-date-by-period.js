import startOfYear from "date-fns/startOfYear";
import endOfYear from "date-fns/endOfYear";
import startOfMonth from "date-fns/startOfMonth";
import endOfMonth from "date-fns/endOfMonth";

/**
 *
 * @param {"thisYear"|"thisMonth"} period
 * @param {string} columnName
 */
const fromToDateByPeriod = (period, columnName) => {
  const yearStart = startOfYear(new Date()).toJSON();
  const yearEnd = endOfYear(new Date()).toJSON();
  const monthStart = startOfMonth(new Date()).toJSON();
  const monthEnd = endOfMonth(new Date()).toJSON();

  const yearGape = `"${columnName}" > '${yearStart}' and "${columnName}" <= '${yearEnd}'`;
  const monthGape = `"${columnName}" > '${monthStart}' and "${columnName}" <= '${monthEnd}'`;

  // console.trace({ yearGape, monthGape });
  return period === "thisYear" ? yearGape : monthGape;
};

// let t = fromToDateByPeriod("thisMonth", "absence");
// let y = fromToDateByPeriod("thisYear", "absence");
// console.trace(`testing`, { t, y });
export { fromToDateByPeriod };
