/**
 *
 * @param {string} monthName
 * @return {number} -1 if no match
 * @example
 * let r = getMonthId("January")
 * // r = 0
 */

function getMonthId(monthName) {
  const month = monthName.slice(0, 3).toLocaleLowerCase();
  const months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
  return months.indexOf(month);
}

export { getMonthId };
