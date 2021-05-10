/**
 *
 * @param {{}} newItemOfCollection
 * @param {{}[]} arrayCollection
 * @return {{}[]} mutated new collection
 */
function addCollection(newItemOfCollection, arrayCollection) {
  return [...arrayCollection, newItemOfCollection];
}
export { addCollection };
