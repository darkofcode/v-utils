/**
 *
 * @param {any[]} arr
 * @param {{(item:any)=>any}} keyIterator
 * @param {isSum} boolean default false
 * @return {{[string]:any}}
 * @example
const t = [
  { id: 1, v: "one" },
  { id: 2, v: "two" },
  { id: 3, v: "three" },
  { id: 4, v: "for" },
  { id: 5, v: "five" },
];
const r = arrayToObj(t,(o) => o.id,(o) => o.v);
// r = { '1': 'one', '2': 'two', '3': 'three', '4': 'for', '5': 'five' }
 *
 *
 */
const arrayToObj = (arr, keyIterator, valueIterator, isSum = false) => {
  let obj = {};
  arr.forEach((item) => {
    const k = keyIterator ? keyIterator(item) : item;
    const v = valueIterator ? valueIterator(item) : item;
    if (isSum) {
      if (k) {
        obj[k] = obj[k] ? obj[k] + v : v;
      }
    } else {
      if (k) {
        obj[k] = v;
      }
    }
  });
  return obj;
};

// const t = [
//   { id: 1, v: "one" },
//   { id: 2, v: "two" },
//   { id: 3, v: "three" },
//   { id: 4, v: "for" },
//   { id: 5, v: "five" },
// ];
// const r = arrayToObj(
//   t,
//   (o) => o.id,
//   (o) => o.v
// );
// console.log(`from test`, r);
export { arrayToObj };
