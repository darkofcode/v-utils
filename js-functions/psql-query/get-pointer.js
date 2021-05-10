import { max } from "../array/max";
import { min } from "../array/min";
/**
 *
 * @param {any[]} lists
 * @param {boolean} isNext
 * @param {string} idName
 * @default {isNext:true,idName:"id"}
 */
const getPointer = (lists, isNext = true, idName = "id") => {
  return isNext ? min(lists, (o) => o[idName]) : max(lists, (o) => o[idName]);
};

export { getPointer };
