import { isObject } from "./is-obj";

/**
 *
 * @param {any} object
 * @param {Function} keyValFunction f(key,val)=>{key,val}
 * @example
 * let o = {a:1,b:2,c:3}
 * let f = (k,v)=>({key:k.toUpperCase(),val:v+1})
 * looper(o,f) => {A:2,B:3,C:4}
 */
const looper = (object, keyValFunction) => {
  const repeater = (obj) => {
    let newObj = {};
    if (!isObject(obj) && !Array.isArray(obj)) {
      const { val: finalVal } = keyValFunction("a", obj);
      return finalVal;
    }
    const keys = Object.keys(obj);
    const objLength = keys.length;
    for (let i = 0; i < objLength; i++) {
      const key = keys[i];
      let val = obj[key];
      if (isObject(val)) {
        val = repeater(val);
      }
      if (Array.isArray(val)) {
        val = val.map((v) => repeater(v));
      }

      const { key: exeKey, val: exeVal } = keyValFunction(key, val);
      if (exeKey) {
        newObj[exeKey] = exeVal;
      }
    }

    return newObj;
  };
  return repeater(object);
};

export { looper };

// const t = {
//   a1: 1,
//   a2: "str",
//   a3: undefined,
//   a4: null,
//   a5: NaN,
//   a6: new Date(),
//   a7: false,
//   a8: function () {
//     return "time";
//   },
//   a9: {
//     a1: 1,
//     a2: {
//       a1: 1,
//       a2: false,
//       a3: {
//         d: 1,
//       },
//       a4: new Date(),
//     },
//     a3: false,
//   },
//   a10: {
//     a1: 1,
//   },
// };
// const tf = (key, val) => {
//   return { key: key.toUpperCase(), val: val + 1 };
// };
// const r = looper({ a: 1, b: 2, c: 3 }, tf);

// console.trace(`result`, r);
