import { get } from "../object/get";

/**
 *
 * @param {string | number} key
 * @param {boolean} ascending default = true
 * @param {any[]} arrayOfCollection
 * @param {"string"|"number"|"date"} compareType default = false
 * @return {any[]}
 * @example
  let data = [
    { id: 3, date: new Date(2020, 2, 3), name: "a" },
    { id: 5, date: new Date(2020, 1, 3), name: "b" },
    { id: 2, date: new Date(2020, 6, 3), name: "z" },
    { id: 1, date: new Date(2020, 9, 3), name: "d" },
    { id: 9, date: new Date(2020, 5, 3), name: "a" },
  ];
  sortCollection("id", data, true)) =>
  [
    { id: 1, date: 2020-10-02T17:00:00.000Z, name: 'd' },
    { id: 2, date: 2020-07-02T17:00:00.000Z, name: 'z' },
    { id: 3, date: 2020-03-02T17:00:00.000Z, name: 'a' },
    { id: 5, date: 2020-02-02T17:00:00.000Z, name: 'b' },
    { id: 9, date: 2020-06-02T17:00:00.000Z, name: 'a' }
  ]
 */
function sortCollection(key, arrayOfCollection, ascending = true, compareType = "number") {
  if (!arrayOfCollection.length) {
    return [];
  }
  const newArr = [...arrayOfCollection];
  let compareFnc;
  switch (compareType) {
    case "string":
      compareFnc = stringCompare;
      break;
    case "number":
      compareFnc = numberCompare;
      break;

    default:
      compareFnc = dateCompare;
      break;
  }

  newArr.sort(compareFnc(key, ascending));
  return newArr;
}
const stringCompare = (key, ascending) => (a, b) => {
  var nameA = get(a, key, "").toString().toUpperCase(); // ignore upper and lowercase
  var nameB = get(b, key, "").toString().toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return ascending ? -1 : 1;
  }
  if (nameA > nameB) {
    return ascending ? 1 : -1;
  }

  // names must be equal
  return 0;
};
const numberCompare = (key, ascending) => (a, b) => {
  const va = +get(a, key, "");
  const vb = +get(b, key, "");
  return ascending ? va - vb : vb - va;
};
const dateCompare = (key, ascending) => (a, b) => {
  const va = new Date(get(a, key, new Date())).getTime();
  const vb = new Date(get(b, key, new Date())).getTime();
  return ascending ? va - vb : vb - va;
};
export { sortCollection };

// let data = [
//   { id: 3, date: new Date(2020, 2, 3), name: "a" },
//   { id: 5, date: new Date(2020, 1, 3), name: "b" },
//   { id: 2, date: new Date(2020, 6, 3), name: "z" },
//   { id: 1, date: new Date(2020, 9, 3), name: "d" },
//   { id: 9, date: new Date(2020, 5, 3), name: "a" },
// ];
// const d = sortCollection("date3", data, true, "date");
// const d2 = sortCollection("date", data, false);
// const d3 = sortCollection("time", [], false);
// const d4 = sortCollection("id", [], false, "number");
// console.log(`from `, { d, d2, d3, d4 });
