import { titles } from "./title";
/**
 *
 * @param {string} name
 * @returns {string}
 * @example
 * let r = concatenate("jame auth")
 * // r = "JA:
 */

function concatenate(name) {
  if (name === "") {
    return "";
  }
  let newName = name;
  let r = [];
  titles = titles.concat([",", "."]);
  titles.forEach((title) => {
    newName = newName.replace(title, "");
  });
  newName.split(" ").forEach((n) => {
    if (n !== "") {
      r.push(n.slice(0, 1).toLocaleUpperCase());
    }
  });
  return r[0] + r[r.length - 1];
}

export { concatenate };
