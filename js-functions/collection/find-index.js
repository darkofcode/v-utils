import { compare } from "../string/compare";

/**
 *
 * @param {string | number} valueKey
 * @param {string | number} findValue
 * @param {{}[]} arrayCollection
 * @param {boolean} caseSensitive default false
 * @return {number} -1 if no found
 * @example find("id",12,[{id:"1",name:"bc"},{id:12,name:"a"}]) => 1
 *
 */
function findIndexOfCollection(valueKey, findValue, arrayCollection, caseSensitive = false) {
  let r = -1;
  for (var i = 0; i < arrayCollection.length; i++) {
    var testItem = arrayCollection[i][valueKey];
    if (compare([findValue, testItem], caseSensitive)) {
      // console.trace("array col", { findValue, testItem });
      r = i;
      break;
    }
  }
  // console.trace("array col", { valueKey, findValue, arrayCollection, r });
  return r;
}

// console.trace(
//   findIndexOfCollection("userId", "BGV9ZX", [
//     {
//       companyId: "BQD439",
//       companyName: "cts 001",
//       createdAt: "2020-10-19T12:40:17.125Z",
//       id: "BL993R",
//       role: "owner",
//       updatedAt: "2020-10-19T12:40:17.078Z",
//       updatedById: "BL98WR",
//       updatedByName: "uk vichetch",
//       userId: "BL98WR",
//       userName: "uk vichetch",
//     },
//   ])
// );
export { findIndexOfCollection };
