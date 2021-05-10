import { compare } from "../string/compare";

/**
 *
 * @param {string | number} key
 * @param {string | number | boolean} filteredIfValue
 * @param {{}[]} arrayCollection
 * @param {boolean} caseSensitive
 * @return {object[]} [ ] if no found
 * @example filterIfCollection("id",12,[{id:"1",name:"bc"},{id:12,name:"a"}]) => [{id:12,name:"a"}]
 *
 */
function filterIfCollection(key, filteredIfValue, arrayCollection, caseSensitive) {
  // console.trace("array col", { arrayCollection });
  if (caseSensitive === void 0) {
    caseSensitive = false;
  }
  let filters = [];
  for (var i = 0; i < arrayCollection.length; i++) {
    var testItem = arrayCollection[i][key];
    if (compare([filteredIfValue, testItem], caseSensitive)) {
      filters.push(arrayCollection[i]);
    }
  }
  return filters;
}
export { filterIfCollection };
