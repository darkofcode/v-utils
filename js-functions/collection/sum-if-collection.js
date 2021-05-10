import { compare } from "../string/compare";

/**
 *
 * @param {string | number} key
 * @param {string | number | boolean} sumIfValue
 * @param {{}[]} arrayCollection
 * @param {boolean} caseSensitive
 * @return {number} 0 if no found
 * @example sumIfCollection("id",12,[{id:"1",name:"bc"},{id:12,name:"a"}]) => 1
 *
 */
function sumIfCollection(conditionKey, conditionValue, sumIfKey, arrayCollection, caseSensitive) {
  if (caseSensitive === void 0) {
    caseSensitive = false;
  }
  let sum = 0;
  for (var i = 0; i < arrayCollection.length; i++) {
    var testItem = arrayCollection[i][conditionKey];
    if (compare([conditionValue, testItem], caseSensitive)) {
      const sumItem = parseFloat(arrayCollection[i][sumIfKey]) | 0;
      sum = sum + sumItem;
    }
  }
  return sum;
}
export { sumIfCollection };
