/**
 *
 * @param {string | number} key
 * @param {{}[]} arrayCollection
 * @return {number} 0 if no found
 * @example sumCollection("id",[{id:"3",name:"bc"},{id:12,name:"a"}]) => 15
 *
 */
function sumCollection(key, arrayCollection) {
  // console.trace("array col", { arrayCollection });

  let sum = 0;
  for (var i = 0; i < arrayCollection.length; i++) {
    var testItem = parseFloat(arrayCollection[i][key]) | 0;
    sum = sum + testItem;
  }
  return sum;
}
export { sumCollection };
