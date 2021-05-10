import { isCapitalized } from "./is-capitalized";
import { capitalize } from "./capitalize";

/**
 * reg can not deal with specific syntax "../",
 * @param {string} str
 * @param {string} search
 * @param {string | Function} replacement
 * @param {boolean} caseSensitive
 * @return {string} return string
 * @example
 * replaceAll("time time again","time","")
 * => "again"
 * replaceAll("time time again","time",(match)=>"")
 * => "again"
 */

const replaceAll = function (str, search, replacement, caseInSensitive = true) {
  let result = "";
  let newStr = str;
  let newSearch = search;
  if (caseInSensitive) {
    newStr = str.toLocaleLowerCase();
    newSearch = search.toLocaleLowerCase();
  }
  if (!str.includes(search)) {
    return str;
  }
  if (typeof str === "string") {
    // maybe add a lodash test? Will not handle numbers now.
    if (typeof replacement === "string") {
      result = newStr.split(newSearch).join(replacement);
    } else {
      result = newStr.split(newSearch).join(replacement(newSearch));
    }
  } else {
    return str;
  }

  // keep capitalize status
  const arrStr = str.split(" ");
  const arrResult = result.split(" ");

  if (arrStr.length === arrResult.length) {
    for (let i = 0; i < arrStr.length; i++) {
      if (isCapitalized(arrStr[i])) {
        arrResult[i] = capitalize(arrResult[i]);
      }
    }
  }
  return arrResult.join(" ");
};

// console.trace({
//   a: replaceAll("Time and Time and Again And so On to And The beach", "and", "&", false),
//   b: replaceAll("Time and Time and Again And so On to And The beach", "and", (match) => "&&"),
// });

export { replaceAll };
