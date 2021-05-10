import { isObject } from "./is-obj";
// const isObject = require("lodash/isPlainObject");

/**
 *
 * @param {any} object
 * @param {Function} keyValFunction f(key,val,keys)=>{key,val}
 * @example
 * let o = {a:1,b:2,c:3}
 * let f = (k,v,ks)=>({key:k.toUpperCase(),val:v+1})
 * looper(o,f) => {A:2,B:3,C:4}
 */
const looperKeysIndex = (object, keyValFunction) => {
  const repeater = (obj, loopKeys) => {
    let newObj = Array.isArray(obj) ? [] : {};
    if (!isObject(obj) && !Array.isArray(obj)) {
      const { val: finalVal } = keyValFunction("", obj, loopKeys);
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
//   },
//   // purchases: [[1, "personal", "1 year", "72"]],
//   total: ["total", "$ 216.00"],
// };

// const tf = (key, val, keys) => {
//   const newVal = isObject(val) || Array.isArray(val) ? val : keys.join(".");
//   return { key, val: newVal };
// };
// const r = looperKeysIndex(t, tf);

// console.log(`result`, JSON.stringify(r, null, 2));
