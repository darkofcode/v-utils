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

export { getHashPassword, comparePassword };
