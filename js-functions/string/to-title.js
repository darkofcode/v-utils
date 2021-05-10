import startCase from "lodash/startCase";
import toLower from "lodash/toLower";
import snackCase from "lodash/snakeCase";

/**
 * @param {string} str
 * @return string
 * @example
 * toTitle("time to go on")=>"Time To Go On"
 */

const toTitle = (str) => {
  return startCase(toLower(snackCase(str)));
};

// console.trace(toTitle("_whatIm_TimeToGo"));
export { toTitle };
