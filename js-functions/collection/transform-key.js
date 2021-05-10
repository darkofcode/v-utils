/**
 *
 * @param {any[]} collections
 * @param {any[]} originalKeys
 * @param {any[]} transformKeys
 * @param {boolean} keepOtherKeys default false
 * @example
 * transformCol([{a:1,b:2,c:3},{a:4,b:5,c:6}],["a","b"],["aa","bb"],true)
 * =>[{aa:1,bb:2,c:3},{aa:4,bb:5,c:6}]
 */
const transformCol = (collections, originalKeys, transformKeys, keepOtherKeys = false) => {
  if (originalKeys.length !== transformKeys.length) {
    throw new Error("transformKeys & originalKeys are not the same size");
  }
  return collections.map((col) => {
    let newCol = {};
    for (let i = 0; i < transformKeys.length; i++) {
      newCol[transformKeys[i]] = col[originalKeys[i]];
    }
    // delete originalKeys
    let trCol = { ...col };
    originalKeys.forEach((key) => {
      delete trCol[key];
    });
    if (keepOtherKeys) {
      newCol = { ...trCol, ...newCol };
    }
    return newCol;
  });
};

export { transformCol };

// const t = transformCol(
//   [
//     { a: 1, b: 2, c: 3 },
//     { a: 4, b: 5, c: 6 },
//   ],
//   ["a", "b"],
//   ["aa", "bb"],
//   true
// );

// console.trace(`test`, t);
