const bcrypt = require("bcrypt");

/**
 *
 * @param {string} password
 * @returns {string}
 */
const getHashPassword = (password) => {
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  return bcrypt.hashSync(password, salt);
};

const comparePassword = (password, hash) => {
  return bcrypt.compareSync(password, hash);
};

/*

const pass1 = getHashPassword("123456");
const pass2 = getHashPassword("123456");
const pass3 = getHashPassword("123456");
console.log(`from password`, { pass1, pass2, pass3 });
note that pass1 !== pass2 !== pass3
event though they are all the same pass,
if want to compare has to use compare function
*/
export { getHashPassword, comparePassword };
