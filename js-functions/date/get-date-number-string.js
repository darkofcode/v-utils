/**
 *
 * @param {Date} date
 * @param {"day"|"month"|"year"} type
 */
const getDateNumberString = (date, type = "year") => {
  const d = new Date(date);
  const day = d.getDay() < 10 ? `0${d.getDay()}` : `${d.getDay()}`;
  const month = d.getMonth() < 10 ? `0${d.getMonth()}` : `${d.getMonth()}`;
  const year = d.getFullYear();

  switch (type) {
    case "day":
      return day;
    case "month":
      return month;
    default:
      return year;
  }
};

export { getDateNumberString };
