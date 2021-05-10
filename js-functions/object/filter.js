/**
 * 
 * @param {{[k:string]:any}} obj 
 * @param {(k:string,v)=>boolean} iterator 
 * @return {{[k:string]:any}}
 * @example
 * const obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
   const r = filter(obj, (k, v) => v >= 3 && ["d", "e"].includes(k));
   // r = { d: 4, e: 5 }
 */
const filter = (obj, iterator) => {
  let r = {};
  Object.keys(obj).forEach((k) => {
    const v = obj[k];
    const filterResult = iterator(k, v);
    if (filterResult) {
      r[k] = v;
    }
  });
  return r;
};

export { filter };

// const obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
// const r = filter(obj, (k, v) => v >= 3 && ["d", "e"].includes(k));
// console.log(`from testing`, { r, obj });
