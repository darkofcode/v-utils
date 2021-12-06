/**
 *
 * @param {import('yup').AnyObjectSchema} schema
 * @param {Object<string,any>} object
 * @return {Object<string,any>}
 */
export const getValidateObject = async (schema, object) => {
  let validObj;
  try {
    validObj = await schema.validate(object, { stripUnknown: true, abortEarly: true });
  } catch (error) {
    validObj = {};
  }
  return validObj;
};
