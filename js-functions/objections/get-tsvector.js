import { Model } from "objection";
import get from "lodash/get";
/**
 * this function will only be working when objection is connected to database first
 * @param {string} str
 * @param {any} defaultValue
 * @return {Promise<string>}
 * @example
 * getTsVector('general client general supplier') => 'client':2 'general':1,3 'supplier':4
 *
 */
const getTsVector = async (str, defaultValue = null, _Model) => {
  const UserModel = _Model ? _Model : Model;
  const knex = UserModel.knex();
  let tsString = await knex.raw(`select to_tsvector('${str}')`);
  return get(tsString, "rows[0].to_tsvector", defaultValue);
};

export { getTsVector };
