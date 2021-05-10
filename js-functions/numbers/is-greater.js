import { chunkString } from "../string/chunk-string";

/**
 *
 * @param {number | string} strNum1
 * @param {number | string} strNum2
 */
const isGreater = (strNum1, strNum2) => {
  const num1 = chunkString(strNum1.toString(), 14, true);
  const num2 = chunkString(strNum2.toString(), 14, true);
  if (num1.length > num2.length) {
    return true;
  } else if (num1.length < num2.length) {
    return false;
  }
  // case equal
  else {
    for (let i = 0; i < num1.length; i++) {
      if (+num1[i] > +num2[i]) {
        return true;
      }
    }
    return false;
  }
};

export { isGreater };
