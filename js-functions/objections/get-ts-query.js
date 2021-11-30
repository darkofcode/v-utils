import { runSql } from "./run-sql";

/**
 * this function will only be working when objection is connected to database first
 * @param {string} str
 * @return {Promise<string>}
 * @example
 * getTsQuery('udemy skillshare') => 'udemi | skillshar'
 *
 */
const getTsQuery = async (str) => {
  const query = await runSql("plainto_tsquery", str);
  const q = query.replace(/\&/gi, "|").replace(/[\'\"]/gi, "");

  return q;
};
/**
 * 
 * @param {string} searchColumn 
 * @param {string} search 
 * @example

const obQuery = getObjectionRawTsSearch("search","udemy skillShare");
// obQuery = `"search" @@ 'udemi | skillshar'`
const data = await Model.query()
  .where(otherQuery)
  .whereRaw(obQuery)
  .orderBy("updated_at", "DESC");

 * 
 */
const getObjectionRawTsSearch = async (searchColumn, search) => {
  const query = await getTsQuery(search);
  return `"${searchColumn}" @@ '${query}'`;
};

export { getTsQuery, getObjectionRawTsSearch };
