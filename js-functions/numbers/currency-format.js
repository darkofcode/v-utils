import { chunkString } from "../string/chunk-string";

/**
 *
 * @param {number | string} value
 * @return {string}
 */
const _formatCurrency = (value = "", separator = ",") => {
  let _value = String(value).replace(/,/gi, "");
  if (isNaN(+_value)) return "NaN";
  _value = (+_value).toString();
  const _sign = _value[0];
  const sign = _sign === "-" ? "-" : "";
  _value = sign === "-" ? _value.slice(1) : _value;

  // console.log(`from `, { _value, sign });
  const values = _value.split(".");
  const firstPart = values[0];
  const secondPart = values[1] ? values[1] : "00";

  return `${sign}${chunkString(firstPart, 3, true).join(separator)}.${secondPart.slice(0, 4)}`;
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
// console.log(`t3`, getCurrencyFormat("-511,189.00"));
// console.log(`t3`, getCurrencyFormat("+511,189.00"));
// console.log(`t4`, getCurrencyFormat("-511"));
// console.log(`t5`, getCurrencyFormat("+511.03"));
// console.log(`t6`, getCurrencyFormat(NaN));

export { getCurrencyFormat };
