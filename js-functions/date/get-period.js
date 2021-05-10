import startOfYear from "date-fns/startOfYear";
import endOfYear from "date-fns/endOfYear";
import startOfMonth from "date-fns/startOfMonth";
import endOfMonth from "date-fns/endOfMonth";
import startOfWeek from "date-fns/startOfISOWeek";
import endOfWeek from "date-fns/endOfISOWeek";
/**
 *
 * @param {Date} date
 * @return {{monthStart:Date,monthEnd:Date,yearStart:Date,yearEnd:Date,weekStart:Date,weekEnd:Date}}
 */

const datePeriod = (date) => {
  const x = new Date(date ? date : new Date());
  const yearStart = startOfYear(x);
  const yearEnd = endOfYear(x);
  const monthStart = startOfMonth(x);
  const monthEnd = endOfMonth(x);
  const weekStart = startOfWeek(x);
  const weekEnd = endOfWeek(x);
  return { monthStart, monthEnd, yearStart, yearEnd, weekStart, weekEnd };
};

// console.trace(`testing`, { t: datePeriod() });
export { datePeriod };
