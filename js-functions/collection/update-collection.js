import { findIndexOfCollection as get_id_1 } from "./find-index";
/**
 *
 * @param {string | number} valueKey
 * @param {any} newItemOfCollection
 * @param {any[]} arrayCollection
 * @param {boolean} isCombine default true
 * @param {boolean} caseSensitive
 * @return {any[]} mutated new collection
 * @default {isCombine:true,caseSensitive:false}
 * @example update("id",{id:12,name:"jack"},[{id:"1",name:"bc"},{id:12,name:"a"}]) => [{id:"1",name:"bc"},{id:12,name:"jack"}]
 *
 */
function updateCollection(valueKey, newItemOfCollection, arrayCollection, isCombine = true, caseSensitive = false) {
  var findValue = newItemOfCollection[valueKey];
  var id = get_id_1(valueKey, findValue, arrayCollection, caseSensitive);
  var newArray = [...arrayCollection];
  if (id >= 0) {
    if (isCombine) {
      let updateInfo = { ...newArray[id], ...newItemOfCollection };
      newArray[id] = updateInfo;
      // console.trace(`update col`, newArray);
    } else {
      newArray[id] = newItemOfCollection;
    }
  }
  return newArray;
}
export { updateCollection };
