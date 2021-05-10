import valuesIn from "lodash/valuesIn";
import forIn from "lodash/forIn";
import uniq from "lodash/uniq";
import { isEmpty } from "../object/is-empty";

const getErrors = (errors = {}, arrayKeys = [], mainKey) => {
  if (isEmpty(errors)) return [];
  let r = [];
  forIn(errors, (error, key) => {
    if (arrayKeys.includes(key)) {
      let holidays = errors[key];
      holidays = holidays.slice(0, -1);
      holidays.forEach((h) => {
        valuesIn(h).forEach((err) => {
          if (!!err) r.push(err);
        });
      });
    } else {
      if (!!error) r.push(error);
    }
  });
  return uniq(r);
};

// const errors = {
//   title: "title must be at least 3 characters",
//   title2: "title must be at least 3 characters",
//   title3: undefined,
//   holidays: [{ info: "holidays info is required!" }, { info: "holidays info is required!" }],
// };
// console.trace(getErrors(errors, ["holidays"]));

export { getErrors };
