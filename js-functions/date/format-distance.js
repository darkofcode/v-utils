import formatDateDistance from "date-fns/formatDistance";
import formate from "date-fns/format";

// formatDateDistance = typeof formatDateDistance === "function" ? formatDateDistance : formatDateDistance.default;
// formate = typeof formate === "function" ? formate : formate.default;

/**
 *
 * @param {string | Date} dateString
 * @return {string}
 */
function formatDistance(dateString, dateFormat = "dd-MM-yyyy") {
  const date = new Date(dateString ? dateString : new Date());
  const age = new Date() - date;
  // 7 days
  if (age > 7 * 24 * 60 * 60 * 1000) return formate(date, dateFormat);
  return formatDateDistance(date, new Date());
}

export { formatDistance };

// const a = formatDistance("2020-10-19");
// console.trace(a);
// console.trace(`testing`, formatDistance("Tue Sep 22 2020"));
