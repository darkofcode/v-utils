import { isObject } from "./is-obj";
import { get } from "./get";

/**
 *
 * @param {any} object
 * @param {(key:string,val:any,keys:string[])=>{key:string,val:any}} keyValFunction f(key,val,keys)=>{key,val}
 * @example
  const t = {
    headTitle: "Payment confirmed",
    name: "John Doe",
    receipt: { id: "214356451234512123", date: "2021-03-01", expired: "2022-02-01" },
    company: {
      id: "114256451734512628",
      name: "Jack Lima",
      address: "#349,Str.99,Steung ",
      assets: {
        itm1: "1",
        itm2: "2",
        set1: ["s1", "s2"],
      },
    },
    total: ["total", "$ 216.00"],
  };

  const tf = (key, val, keys) => {
    const newVal = isObject(val) || Array.isArray(val) ? val : keys.join(".");
    return { key, val: newVal };
  };
  const r = looperKeysIndex(t, tf);
  r=>{
    "headTitle": "headTitle",
    "name": "name",
    "receipt": {
      "id": "receipt.id",
      "date": "receipt.date",
      "expired": "receipt.expired"
    },
    "company": {
      "id": "company.id",
      "name": "company.name",
      "address": "company.address",
      "assets": {
        "itm1": "company.assets.itm1",
        "itm2": "company.assets.itm2",
        "set1": [
          "company.assets.set1.0",
          "company.assets.set1.1"
        ]
      }
    },
    "total": [
      "total.0",
          "company.assets.set1.0",
          "company.assets.set1.1"
        ]
      }
    },
    "total": [
      "total.0",
      "total.1"
    ]
  }
 *
 */
const looperKeysIndex = (object, keyValFunction) => {
  const repeater = (obj, loopKeys) => {
    let newObj = Array.isArray(obj) ? [] : {};
    if (!isObject(obj) && !Array.isArray(obj)) {
      // const { val: finalVal } = keyValFunction("", obj, loopKeys);
      const finalValObj = keyValFunction("", obj, loopKeys);
      const finalVal = get(finalValObj, "val", obj);
      return finalVal;
    }
    const keys = Object.keys(obj);
    const objLength = keys.length;

    for (let i = 0; i < objLength; i++) {
      const key = keys[i];
      let val = obj[key];
      if (isObject(val)) {
        val = repeater(val, [...loopKeys, key]);
      }
      if (Array.isArray(val)) {
        val = val.map((v, j) => repeater(v, [...loopKeys, key, j]));
      }

      const { key: exeKey, val: exeVal } = keyValFunction(key, val, [...loopKeys, key]);
      if (exeKey) {
        newObj[exeKey] = exeVal;
      }
    }

    return newObj;
  };
  return repeater(object, []);
};

export { looperKeysIndex };

// const t = {
//   headTitle: "Payment confirmed",
//   name: "John Doe",
//   receipt: { id: "214356451234512123", date: "2021-03-01", expired: "2022-02-01" },
//   company: {
//     id: "114256451734512628",
//     name: "Jack Lima",
//     address: "#349,Str.99,Steung ",
//     assets: {
//       itm1: "1",
//       itm2: "2",
//       set1: ["s1", "s2"],
//     },
//   },
//   total: ["total", "$ 216.00"],
// };

// const tf = (key, val, keys) => {
//   const newVal = isObject(val) || Array.isArray(val) ? val : keys.join(".");
//   return { key, val: newVal };
// };
// const r = looperKeysIndex(t, tf);

// console.log(`result`, JSON.stringify(r, null, 2));
