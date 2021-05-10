import { findIndexOfCollection } from "./find-index";
/**
 *
 * @param {string | number} valueKey
 * @param {string | number} findValue
 * @param {{}[]} arrayCollection
 * @param {boolean} caseSensitive
 * @return {{}[]} mutated new collection
 * @example delete("id",12,[{id:"1",name:"bc"},{id:12,name:"a"}]) => [{id:"1",name:"bc"}]
 *
 */
function deleteCollection(valueKey, findValue, arrayCollection, caseSensitive) {
  if (caseSensitive === void 0) {
    caseSensitive = false;
  }
  var id = findIndexOfCollection(valueKey, findValue, arrayCollection, caseSensitive);
  var newArray = [...arrayCollection];
  if (id >= 0) {
    newArray.splice(id, 1);
  }

  return newArray;
}
export { deleteCollection };
