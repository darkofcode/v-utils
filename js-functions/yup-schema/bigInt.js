import { mixed } from "yup";
import { isBigInt } from "../psql-query/is-bigint";

const bigInt = () =>
  mixed().test("match", "", function (value) {
    const { path, createError } = this;
    if (!value) return true;
    if (!isBigInt(value)) {
      return createError({
        path,
        message: `must be big int`,
      });
    }
    return true; // otherwise server side not working
  });

export { bigInt };
