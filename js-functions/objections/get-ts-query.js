import { runSql } from "./run-sql";

/**
 * this function will only be working when objection is connected to database first
 * @param {string} str
 * @param {string} [join]
 * @return {Promise<string>}
 * @default {join='|'}
 * @example
 * getTsQuery('udemy skillshare') => 'udemi | skillshar'
 *
 */
const getTsQuery = async (str, join = "") => {
  if (!join || join === "") join = "|";
  const query = await runSql("plainto_tsquery", str);
  const q = query.replace(/\&/gi, join).replace(/[\'\"]/gi, "");

  return q;
};
/**
 * 
 * @param {string} searchColumn 
 * @param {string} search 
 * @return {Promise<string>}
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

/**
 * this function will only be working when objection is connected to database first
 * text must consist of single word joined by boolean operator & (AND), | (OR) and ! (NOT);
 * These operators can be grouped by parentheses.
 *
 * @param {string} text must contain word joined by ' & , | , ! '
 * @return {Promise<string>}
 * @example
 * getTsQueryStrict('cat & dog')
 * getTsQueryStrict('last time in Tokyo') => error
 * getTsQueryStrict('last | time | in | Tokyo')
 * getTsQueryStrict('(udemy | skillshare | teachable) & (javascript | beginner)') => "'(udemi | skillshar | teachabl ) & ( connect | avon )'"
 *
 *
 */
const getTsQueryStrict = async (text) => {
  const query = await runSql("to_tsquery", text);
  const q = query.replace(/[\'\"]/gi, "");

  return q;
};

/**
 * this function will only be working when objection is connected to database first
 * searchText must consist of single word joined by boolean operator & (AND), | (OR) and ! (NOT);
 * These operators can be grouped by parentheses.
 * @param {string} searchColumn
 * @param {string} searchText must contain word joined by ' & , | , ! '
 * @returns {Promise<string>}
 */

const getObjectionRawTsSearchStrict = async (searchColumn, searchText) => {
  const query = await getTsQueryStrict(searchText);
  return `"${searchColumn}" @@ '${query}'`;
};

export { getTsQuery, getObjectionRawTsSearch, getTsQueryStrict, getObjectionRawTsSearchStrict };
