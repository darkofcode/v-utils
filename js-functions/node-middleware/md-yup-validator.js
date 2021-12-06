import ErrorRes from "./errorRespond";
const { get } = require("../object/get");
const { isEmpty } = require("../object/is-empty");

/**
 *
 * @param {any} yupSchema
 * @param {"body"|"query"} [bodyPath]
 * @param {{strict: boolean,abortEarly: boolean,stripUnknown: boolean ,recursive: boolean,context?: object}} [yupOption]
 * @default { bodyPath:'body' } bodyPath
 * @default { strict:false,abortEarly:true,skipUnknown:false,recursive:true } yupOption
 *
 */
const yupValidator =
  (yupSchema, bodyPath = "body", yupOption) =>
  async (req, res, next) => {
    const _bodyPath = !!bodyPath ? bodyPath : "body";
    const option = getYupOption(yupOption);
    const body = get(req, _bodyPath, {});
    // console.log(`from yup validator`, { body, _bodyPath });
    try {
      const validBody = await yupSchema.validate(body, option);
      Object.assign(req, { [_bodyPath]: validBody });
      return next();
    } catch (err) {
      return next(new ErrorRes(err.errors, 401));
    }
  };

const getYupOption = (option) => {
  if (isEmpty(option)) return { abortEarly: true, stripUnknown: true };
  const abortEarly = get(option, "abortEarly", true);
  const stripUnknown = get(option, "stripUnknown", true);
  return { ...option, abortEarly, stripUnknown };
};

export default yupValidator;
