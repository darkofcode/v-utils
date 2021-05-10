import { findIndexOfCollection } from "./find-index";

/**
 *
 * @param {string | number} valueKey
 * @param {string | number} findValue
 * @param {{}[]} arrayCollection
 * @param {boolean} caseSensitive
 * @return {any} null if no found
 * @example
 * r = find("id",12,[{id:"1",name:"bc"},{id:12,name:"a"}]);
 * r = {id:12,name:"a"};
 *
 */
const findOne = (valueKey, findValue, arrayCollection, caseSensitive) => {
  const i = findIndexOfCollection(valueKey, findValue, arrayCollection, caseSensitive);
  if (i === -1) {
    return null;
  }
  return arrayCollection[i];
};

export { findOne };
