const { ErrorRespond } = require("./errorRespond");
const { get } = require("../object/get");

/**
 *
 * @param {string} column
 * @param {(arg:any)=>any} transformFunction fn take one arg
 * @param {string} [argumentPath]
 * @default { argumentPath:`body.${column}` } argumentPath
 *
 */
const transform = (column, transformFunction, argumentPath, skipEmptyArgument) => async (req, res, next) => {
  if (skipEmptyArgument === void 0) {
    skipEmptyArgument = true;
  }
  if (argumentPath === void 0) {
    argumentPath = `body.${column}`;
  }
  const bodyPath = argumentPath.split(".")[0];
  const arg = get(req, argumentPath, undefined);

  if (skipEmptyArgument && !arg) {
    return next();
  }

  try {
    const trValue = await transformFunction(arg);
    let body = get(req, bodyPath, {});
    body = { ...body, [column]: trValue };
    Object.assign(req, { [bodyPath]: body });

    // console.log(`from md transform:\n`, {
    //   argumentPath,
    //   bodyPath,
    //   arg,
    //   trValue,
    //   body,
    // });

    return next();
  } catch (err) {
    return next(new ErrorRespond("transform value errors", 401));
  }
};

module.exports = { transform };
