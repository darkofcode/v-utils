import { compare } from "../string/compare";

/**
 *
 * @param {string | number} key
 * @param {string | number | boolean} countIfValue
 * @param {{}[]} arrayCollection
 * @param {boolean} caseSensitive
 * @return {number} 0 if no found
 * @example countIfCollection("id",12,[{id:"1",name:"bc"},{id:12,name:"a"}]) => 1
 */
function countIfCollection(key, countIfValue, arrayCollection, caseSensitive) {
  // console.trace("array col", { arrayCollection });
  if (caseSensitive === void 0) {
    caseSensitive = false;
  }
  let count = 0;
  for (var i = 0; i < arrayCollection.length; i++) {
    var testItem = arrayCollection[i][key];
    if (compare([countIfValue, testItem], caseSensitive)) {
      count = count + 1;
    }
  }
  return count;
}
export { countIfCollection };
