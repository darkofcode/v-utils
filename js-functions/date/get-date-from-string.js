import parseDate from "date-fns/parse";
const _sep = `[\\/\\-\\s]`;

/**
 *
 * @param {string} str string Date
 * @param {string} dateFormat
 * @return {Date[]}
 */
const getDateFromString = (str, dateFormat) => {
  const year = "([0-9]{1,4})"; // 1923
  const month = "(1[012]|0?[1-9])"; // 01
  const day = "([12][0-9]|3[01]|0?[1-9])"; //02 or 21 or 31
  const formatSeparator = getSeparator(dateFormat);
  if (!formatSeparator) throw new Error("invalid date format");

  let formatArr = [];
  let regArr = [];
  dateFormat
    .toLocaleLowerCase()
    .split(formatSeparator)
    .forEach((f) => {
      if (f.includes("d")) {
        formatArr.push("dd");
        regArr.push(day);
      } else if (f.includes("m")) {
        formatArr.push("MM");
        regArr.push(month);
      } else {
        formatArr.push("yy");
        regArr.push(year);
      }
    });
  const dateReg = new RegExp(regArr.join(_sep), "g");
  const format = formatArr.join("-");
  const results = str.match(dateReg);
  if (!results) return [];
  // console.log({ results, dateReg });

  return results.map((r) => {
    const dateStr = r.replace(new RegExp(_sep, "g"), "-");
    return getDate(dateStr, format);
  });
};
const getSeparator = (dateFormat) => {
  let sep = dateFormat.match(_sep);
  return Array.isArray(sep) ? sep[0] : null;
};
const getYearIndex = (dateFormat) => {
  const arr = dateFormat.toLocaleLowerCase().split(new RegExp(_sep, ""));
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes("y")) return i;
  }
  return -1;
};
const getDate = (dateStr, dateFormat) => {
  const yi = getYearIndex(dateFormat);
  if (yi === -1) throw new Error("invalid date format");
  let formatArr = dateFormat.split(new RegExp(_sep, ""));
  let dateArr = dateStr.split(new RegExp(_sep, ""));
  formatArr[yi] = "yyyy";
  let y = +dateArr[yi];
  if (y < 10) {
    y = `200${y}`;
  } else if (y < 70) {
    y = `20${y}`;
  } else if (y < 100) {
    y = `19${y}`;
  } else if (y < 999) {
    y = `1${y}`;
  }

  dateArr[yi] = y;
  const date = dateArr.join("-");
  const format = formatArr.join("-");
  // console.log({ date, format, y, dateArr, dateStr });

  return parseDate(date, format, new Date());
};
export { getDateFromString };

// console.log(getDateFromString("faser 21 01/01 21-12-19", "mm-yy-dd"));
