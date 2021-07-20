import { Model } from "objection";
import get from "lodash/get";
/**
 *
 * @param {string} syntaxString
 * @return {Promise<String>}
 * @example
 * runSql('user_id_seq') => 2901
 * @default {MyModel:Model}
 */
const runSql = async (syntaxString) => {
  const knex = Model.knex();
  let lastId = await knex.raw(`select ${syntaxString}`);
  // console.trace(`last id from next seq`, lastId);
  lastId = get(lastId, "rows[0]");

  return lastId;
};

export { runSql };
