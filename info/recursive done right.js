import { yupString as yupStr } from "../zmenka/yup-shaking/string";
import { object as yupObj } from "yup";

const orgValidator = async (data, memo = { error: false, data: "" }) => {
  if (memo.error) return memo;
  for (let d of data) {
    const { children, ...node } = d;
    try {
      await nodeSchema.validate(node, { abortEarly: true, stripUnknown: true });
    } catch (err) {
      memo.error = true;
      memo.data = err.errors;
    }
    if (Array.isArray(children)) {
      memo = await orgValidator(children, memo);
    }
  }
  return memo;
};

const nodeSchema = yupObj().shape({
  id: yupStr().min(3).max(70).required("id is required"),
  value: yupStr().min(3).max(70).required("value is required"),
  title: yupStr().min(3).max(70).required("title is required"),
  path: yupStr().min(3).max(370).required("path is required"),
  // children: yup.array().of(nodeSchema),
});

module.exports = orgValidator;
