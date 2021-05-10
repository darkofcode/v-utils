import { Model } from "objection";
import get from "lodash/get";
/**
 *
 * @param {string} sequence
 * @param {any} MyModel
 * @param {number} pre
 * @return {Promise<string | null>}
 * @example
 * getNextValue('user_id_seq') => 2901
 * @default {MyModel:Model}
 */
const getNextValue = async (sequence, MyModel = Model, pre) => {
  const knex = Model.knex();
  let lastId = await knex.raw(`select uv_next_id('${sequence}')`);
  // console.trace(`last id from next seq`, lastId);
  lastId = get(lastId, "rows[0].uv_next_id", null);
  lastId = lastId ? lastId : null;
  lastId = pre ? `${pre}${lastId}` : lastId;
  return lastId;
};

export { getNextValue };
