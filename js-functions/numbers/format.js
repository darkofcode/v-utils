import formatJs from "number-format.js";

/**
 *
 * @param {string} format
 * @param {number} number
 * @param {string} separator
 * @return {string}
 * @example
 * r = format("#,##0.00",123456789,"-")
 * r = "123-456-789.00"
 * r = format("# ##0.00",123456789,"-")
 * r = "123-456-789.00"
 */
const numberFormat = (format, number, separator) => {
  let r = formatJs(format, number, { enforceMaskSign: true });
  return r.replace(",", separator);
};

export { numberFormat };
