import dateDiff from "date-fns/differenceInCalendarDays";
import { object as _yupObject, string } from "yup";
import { array as _yupArray, number as _yupNum } from "yup";
import { date as yupDate } from "yup";

const numberString = (min, max) =>
  _yupNum().test("match", "", function (value) {
    const { path, createError } = this;
    const numStr = value.toString();
    if (numStr.length < min || numStr.length > max) {
      return createError({
        path,
        message: `number length should be between ${min} and ${max}`,
      });
    }

    return true;
  });

const schString = string().strict(true);
const dateRange = _yupArray()
  .of(yupDate())
  .max(2)
  .test("match", "", function (value) {
    const { path, createError } = this;
    if (value.length <= 1) return true;
    const fromDate = new Date(value[0]);
    const toDate = new Date(value[1]);
    const dateGap = dateDiff(fromDate, toDate);
    // console.log(`from yup test`, { fromDate, toDate, dateGap });
    if (isNaN(dateGap)) {
      return createError({
        path,
        message: "Must be Date",
      });
    }
    if (Math.abs(dateGap) >= 370) {
      return createError({
        path,
        message: "Date range should be within a year",
      });
    }
    if (dateGap >= 0) {
      return createError({
        path,
        message: `'To date' must be greater than 'From date'`,
      });
    }

    return true;
  });

const schemaSearch = _yupObject().shape({
  date: dateRange,
  number: _yupArray().of(numberString(3, 19)).max(2),
  string: schString,
});

export { schemaSearch };
