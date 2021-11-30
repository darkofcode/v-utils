import { Model } from "objection";
import get from "lodash/get";
/**
 *
 * @param {string} paramString
 * @return {Promise<any>}
 * @example
 * runSql('to_tsvector','general customer') => "'custom':2 'general':1"
 *
 */
const runSql = async (sqlSyntax, paramString) => {
  const knex = Model.knex();
  let lastId = await knex.raw(`SELECT ${sqlSyntax}('${paramString}')`);
  lastId = get(lastId, ["rows", "0", sqlSyntax]);

  return lastId;
};

export { runSql };
