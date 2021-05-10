import { chunkString } from "../string/chunk-string";

/**
 *
 * @param {string} numString
 * @return {boolean}
 */
const isBigInt = (numString) => {
  const bigInt = "9223372036854775807";
  const numArr = numString.split("");
  if (numString.length > bigInt.length) return false;
  for (let i = 0; i < numArr.length; i++) {
    if (!Number.isInteger(+numArr[i])) return false;
  }
  if (numString.length === bigInt.length) {
    const numChunks = chunkString(numString, 10);
    const bigChunks = chunkString(bigInt, 10);
    if (+numChunks[0] > +bigChunks[0]) return false;
    if (+numChunks[0] === +bigChunks[0] && +numChunks[1] > +bigChunks[1]) return false;
  }
  return true;
};
export { isBigInt };

// console.log(isBigInt("9223372036-854775807"));
// console.log(isBigInt("9323372036954775807"));
// console.log(isBigInt("824775907"));
// console.log(isBigInt("9223a3720365807"));
// console.log(isBigInt("92233720388547707"));
// console.log(isBigInt("9223372036854775808745645"));
