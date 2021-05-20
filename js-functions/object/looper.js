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
    let newObj = Array.isArray(obj) ? [] : {};
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
