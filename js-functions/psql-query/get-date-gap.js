import add from "date-fns/add";
import format from "date-fns/format";

/**
 *
 * @param {string | Date} startDate
 * @param {{  years:Number,months:Number,weeks:Number,days:Number,hours:Number,minutes:Number,seconds: Number,}} duration
 */
const getDateGap = (startDate, duration, columnName, startSign = ">=", endSign = "<=") => {
  let s = new Date(startDate);
  let e = add(s, duration);
  s = format(s, "yyyy-MM-dd");
  e = format(e, "yyyy-MM-dd");
  return `"${columnName}" ${startSign} '${s}' and "${columnName}" ${endSign} '${e}'`;
};
// console.log(`from date gap`, getDateGap("2020-01-01", { years: 1 }, "created_at"));
export { getDateGap };
