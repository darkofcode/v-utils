import { get } from "../object/get";
import { getSubTotal } from "./get-sub-total";
import { round } from "./round";

/**
 *
 * @param {{}} values
 * @param {string} subTotalKey
 * @param {string} discountKey
 * @param {string} taxKey
 * @param {string | string[]} amountKeys
 * @return {{subTotal:number,grandTotal:number}}
 * @default {subTotalKey:'body', discountKey:"discount",taxKey:"tax",amountKeys:["qty","price"]}
 *
 */

const getGrandTotal = (
  values,
  subTotalKey = "body",
  discountKey = "discount",
  taxKey = "tax",
  amountKeys = ["qty", "price"]
) => {
  const collectionArr = get(values, subTotalKey, []);
  const discount = +get(values, discountKey, 0);
  const tax = +get(values, taxKey, 0);
  const subTotal = +getSubTotal(collectionArr, amountKeys);
  const grandTotal = round((subTotal - discount) * (tax / 100 + 1));
  return { subTotal: subTotal, grandTotal: grandTotal };
};

export { getGrandTotal };
