/**
 *
 * @param {string} str
 * @return string
 * @example
 * camelToSnake("userOne")=> "user_one";
 * camelToSnake("UserOne")=> "user_one";
 * camelToSnake("USerOne")=> "u_ser_one";
 */
const camelToSnakeCase = (str) => {
  str = str[0].toLowerCase() + str.substr(1);
  return str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
};
export { camelToSnakeCase };
