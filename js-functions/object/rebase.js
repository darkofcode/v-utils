/**
 *
 * @param {any{}} obj
 * @param {any[]} originalKeys
 * @param {any[]} newKeys
 * @return {any{}}
 * @example ({a:1,b:2,c:3},["a","b","c"],[1,2]) => {1:1,2:2,c:3}
 */
const rebase = (obj, originalKeys, newKeys) => {
  let newObj = {};
  for (let i = 0; i < originalKeys.length; i++) {
    const newKey = newKeys[i] ? newKeys[i] : originalKeys[i];
    newObj[newKey] = obj[originalKeys[i]];
  }
  return newObj;
};

export { rebase };
