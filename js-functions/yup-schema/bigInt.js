import { string } from "yup";
import { isBigInt } from "../psql-query/is-bigint";

const bigInt = () =>
  string().test("match", "", function (value) {
    const { path, createError } = this;
    if (!isBigInt(value)) {
      return createError({
        path,
        message: `must be big int`,
      });
    }
    return true; // otherwise server side not working
  });

export { bigInt };
