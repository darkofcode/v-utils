import { chunkString } from "../string/chunk-string";

/**
 *
 * @param {number | string} value
 * @return {string}
 */
const _formatCurrency = (value, separator = ",") => {
  // let _value = +value;
  // if (!isNumeric(_value)) return "NaN";

  const _value = value.toString();
  const values = _value.split(".");
  const firstPart = values[0];
  const secondPart = values[1] ? values[1] : "00";
  if (firstPart.slice(0, 1) === "-" && firstPart.length === 4) {
    return `${firstPart}.${secondPart.slice(0, 2)}`;
  }
  return `${chunkString(firstPart, 3, true).join(separator)}.${secondPart.slice(0, 2)}`;
};

/**
 *
 * @param {string | number} num
 * @param {string} symbol
 * @return {string}
 */
const getCurrencyFormat = (num, symbol = "", separator = ",") => {
  const v = _formatCurrency(num, separator);

  return symbol ? `${symbol}${v}` : v;
};

// console.log(`t1`, getCurrencyFormat("123456789"));
// console.log(`t2`, getCurrencyFormat("12345678"));
// console.log(`t3`, getCurrencyFormat(""));
// console.log(`t4`, getCurrencyFormat(NaN));

export { getCurrencyFormat };
