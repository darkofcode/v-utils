import { isEmpty } from "./is-empty";

const extract = (mainObj, keys, isDeleteMainKey = false) => {
  // keys =  [["branch","id","value"]]
  // root = r[0];
  // others = r.slice(1);
  const obj = { ...mainObj };
  for (let key in keys) {
    const field = keys[key]; // ["branch","id","value"]
    if (isEmpty(field)) return mainObj;
    const rootField = field[0]; //branch
    const rootValue = obj[rootField]; // {id:1,value:"one"}

    const otherField = field.slice(1); // ["id","value"]
    if (isDeleteMainKey) delete obj[rootField];
    if (!isEmpty(rootValue)) {
      otherField.forEach((key) => {
        obj[`${rootField}_${key}`] = rootValue[key];
      });
    }
  }
  return obj;
};

const combine = (mainObj, keys, isDeleteMainKey = false) => {
  const obj = { ...mainObj };
  for (let key in keys) {
    const field = keys[key]; // ["branch","id","value"]
    if (isEmpty(field)) return mainObj;
    const rootField = field[0]; //branch
    const otherField = field.slice(1); // ["id","value"]
    let rootValue = {};
    otherField.forEach((key) => {
      rootValue[key] = obj[`${rootField}_${key}`];
      if (isDeleteMainKey) delete obj[`${rootField}_${key}`];
    });
    obj[rootField] = rootValue;
  }

  return obj;
};
const getDeleteMainKeys = (keys) => {
  let r = [];
  for (let key in keys) {
    const field = keys[key]; // ["branch","id","value"]
    const rootField = field[0]; //branch
    r.push(rootField);
  }
  return r;
};

export { extract, combine, getDeleteMainKeys };

/*
let obj = {
  branch: { id: 123, value: "oneTwoThree" },
  client: { id: 456, value: "client_oneTwoThree" },
  one: 1,
  two: 2,
};
const extractObj = extract(
  obj,
  [
    ["branch", "id", "value"],
    ["client", "id", "value"],
  ],
  true
);
const combineObj = combine(
  extractObj,
  [
    ["branch", "id", "value"],
    ["client", "id", "value"],
  ],
  true
);
// console.log(`from combine extract`, { extractObj, combineObj, obj });
*/
