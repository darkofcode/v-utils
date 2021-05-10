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
// const url = "path";
// const data = [
//   {
//     value: "Bo Miao",
//     title: "department manager",
//     path: url,
//     id: "21123",
//     children: [
//       { value: "Li Jing", title: "senior engineer", path: url, id: "3531" },
//       {
//         value: "Li Xin",
//         title: "senior engineer",
//         path: url,
//         id: "42112",
//         children: [
//           { value: "To To", title: "engineer", path: url, id: "54" },
//           { value: "Fei Fei", title: "engineer", path: url, id: "6412" },
//           { value: "Xuan Xuan", title: "engineer", path: url, id: "7341" },
//         ],
//       },
//     ],
//   },
//   {
//     value: "Su Miao",
//     title: "department manager",
//     path: url,
//     id: "123",
//   },
//   {
//     value: "Su Miao",
//     title: "department manager",
//     path: url,
//     id: "123451",
//   },
// ];

// const test = async () => {
//   try {
//     const v = await orgValidator(data);
//     console.log(`from validator org`, v);
//   } catch (error) {
//     console.log(`from error test`, error);
//   }
// };
// test();
module.exports = orgValidator;
