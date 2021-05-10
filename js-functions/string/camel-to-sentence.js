import { toTitle } from "./to-title";

/**
 *
 * @param {string} camel camel string
 * @param {boolean} isTitleCase true by default
 * @return {string} return with Title Case or all UPPER CASE
 * @example
 * camelToSentence(" goB    ack    Home    ")=> "Go B Ack Home"
 * camelToSentence("goBackHome")=> "Go Back Home"
 */
function camelToSentence(camel, isTitleCase = true) {
  const result = camel.replace(/([A-Z])/g, " $1").trim();
  const finalResult = result.charAt(0).toUpperCase() + result.slice(1);

  return isTitleCase ? toTitle(finalResult) : finalResult.toLocaleUpperCase();
}

export { camelToSentence };
