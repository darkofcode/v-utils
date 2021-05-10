import { round } from "./round";
import { isNumber } from "./is-numeric";

const getSellingPrice = (price = 0, discountRate = 0, tax = 0) => {
  if (!isNumber(price) || !isNumber(discountRate) || !isNumber(tax)) return "";
  // const { price = 0, discountRate = 0, tax = 0 } = values;
  // const sell = currency(price).multiply(currency(1).subtract(discountRate / 100)) * (1 + tax / 100);
  const sell = price * (1 - discountRate / 100) * (1 + tax / 100);
  // console.log(`from inv`, { price, discountRate, tax, sell });
  return sell === 0 ? "" : round(sell);
};
export { getSellingPrice };
