import { isObject } from "./is-obj";
import { get } from "./get";

/**
 *
 * @param {any} object
 * @param {(key:string,value:any)=>{key:string,val:any}} keyValFunction f(key,val)=>{key,val}
 * @example
 * let o = {a:1,b:2,c:3}
 * let f = (k,v)=>({key:k.toUpperCase(),val:v+1})
 * looper(o,f) => {A:2,B:3,C:4}
 */
const looper = (object, keyValFunction) => {
  const repeater = (obj) => {
    let newObj = Array.isArray(obj) ? [] : {};
    if (!isObject(obj) && !Array.isArray(obj)) {
      const finalObj = keyValFunction("a", obj);
      const finalVal = get(finalObj, "val", obj);
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

      // const { key: exeKey, val: exeVal } = keyValFunction(key, val);
      const keyVal = keyValFunction(key, val);
      const exeKey = get(keyVal, "key", key);
      const exeVal = get(keyVal, "val", val);

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
//   a3: { undefined: undefined },
//   null: null,
//   nam: NaN,
//   date: new Date(),
//   boolean: false,
//   arr: [
//     {
//       function: function () {
//         return "time";
//       },
//     },
//   ],
//   file: {
//     a: new File(["foo"], "foo.txt", {
//       type: "text/plain",
//     }),
//   },
//   math: Math.LN2,
//   infi: { infinite: Infinity },
//   arr2: [{ reg: /regex/ }],
//   class: class C {},
//   sym: Symbol(),
// };
// const tf = (key, val) => {
//   return { key: key.toUpperCase(), val: val };
// };
// const r = looper(t, tf);

// console.trace(`result`, r);

// const obj = {
//   a: 1,
//   b: 2,
//   d: new Date(),
//   o: {
//     a: { d: "d", e: "e", date: new Date() },
//     d: new Date(),
//   },
//   arr: ["a", "b", "c"],
// };
// let r = [];
// looper(obj, (key, val) => {
//   if (isDate(val)) return r.push(val);
//   const t = typeof val;
//   if (["string", "number"].includes(t)) return r.push(val);
// });
// console.log(`from looper`, {
//   r,
//   obj,
// });
