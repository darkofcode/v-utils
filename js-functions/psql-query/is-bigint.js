import { chunkString } from "../string/chunk-string";

/**
 *
 * @param {string|undefined} numString
 * @return {boolean}
 */
const isBigInt = (numString) => {
  if (!numString) return false;
  const t = typeof numString;
  if (t !== "string" && t !== "number") return false;
  numString = numString.toString();

  //     1 016 668 577 203 461
  // 9 223 372 036 854 775 807
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

// console.log("a1", isBigInt("9223372036-854775807"));
// console.log("a2", isBigInt("9323372036954775807"));
// console.log("a3", isBigInt("824775907"));
// console.log("a4", isBigInt("82477"));
// console.log("a5", isBigInt("9223a3720365807"));
// console.log("a6", isBigInt("92233720388547707"));
// console.log("a7", isBigInt("9223372036854775808745645"));
