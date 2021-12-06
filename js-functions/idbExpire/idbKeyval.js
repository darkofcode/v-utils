import { get as getDb, set as setDb } from "idb-keyval";
import addDay from "date-fns/addDays";
import { get as getObj } from "../object/get";
import { isDate } from "../date/is-date";

/**
 *
 * @param {string} key
 * @returns {Promise<any|undefined>}
 */
export const get = async (key) => {
  const data = await getDb(key);
  const v = getObj(data, key);
  const expiredAt = new Date(getObj(data, "expiredAt", new Date(0)));
  if (!isDate(expiredAt) || new Date() > expiredAt) {
    return undefined;
  }
  return v;
};

/**
 *
 * @param {string} key
 * @param {any} value
 * @param {number} expiredInDays
 * @returns
 */
export const set = async (key, value, expiredInDays) => {
  const exp = expiredInDays ? expiredInDays : 1;
  const v = {
    [key]: value,
    expiredAt: addDay(new Date(), exp),
  };
  return await setDb(key, v);
};
