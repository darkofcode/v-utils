import isObject from "lodash/isPlainObject";

/**
 * 
 * @param {any} mainObj 
 * @param {string | string[]} path 
 * @param {any} value 
 * @return {any}
 * @example
  let obj = { time: { abc: 42 } };
  const newObj = setNestPath(obj, "time.to.123", 99);
  newObj = {
  "time": {
      "abc": 42,
      "to": {
        "123": 99
      }
    }
  }
 */

function setNestPath(mainObj, path, value, breakIfNotObjectValue = false) {
  const obj = { ...mainObj };
  let schema = obj; // a moving reference to internal objects within obj
  let pList = Array.isArray(path) ? path : path.split(".");
  let len = pList.length;
  for (let i = 0; i < len - 1; i++) {
    let path = pList[i];
    if (isObject(schema[path])) {
      schema[path] = { ...schema[path] };
      schema = schema[path];
    } else if (Array.isArray(schema[path])) {
      schema[path] = [...schema[path]];
      schema = schema[path];
    } else {
      if (breakIfNotObjectValue) return mainObj;
      schema[path] = {};
      schema = schema[path];
    }
  }

  schema[pList[pList.length - 1]] = value;

  return obj;
}

export { setNestPath };

// const url = "path";
// const data = {
//   value: "lao lao",
//   title: "general manager",
//   path: url,
//   id: "1415",
//   children: [
//     {
//       value: "Bo Miao",
//       title: "department manager",
//       path: url,
//       id: "2141",
//       children: [
//         { value: "Li Jing", title: "senior engineer", path: url, id: "3531" },
//         {
//           value: "Li Xin",
//           title: "senior engineer",
//           path: url,
//           id: "42112",
//           children: [
//             { value: "To To", title: "engineer", path: url, id: "5412" },
//             { value: "Fei Fei", title: "engineer", path: url, id: "6412" },
//             { value: "Xuan Xuan", title: "engineer", path: url, id: "7341" },
//           ],
//         },
//       ],
//     },
//     {
//       value: "Su Miao",
//       title: "department manager",
//       path: url,
//       id: "123",
//     },
//     {
//       value: "Su Miao",
//       title: "department manager",
//       path: url,
//       id: "123451",
//     },
//   ],
// };
// const node = {
//   id: 1,
//   path: 1,
//   value: 1,
//   children: [{ value: "To To", title: "engineer", path: url, id: "5412" }],
// };

// const newData = setNestPath(data, ["children", "0", "children", 1], node);
// console.log(JSON.stringify(newData, null, 2));
