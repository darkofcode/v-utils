const fs = require("fs");

/**
 * 
return from fs.lstatSync(path_string);

stats.isFile()
stats.isDirectory()
stats.isBlockDevice()
stats.isCharacterDevice()
stats.isSymbolicLink() // (only valid with fs.lstat())
stats.isFIFO()
stats.isSocket()

 */

/**
 *
 * @param {string} path_string
 * @returns {boolean}
 */
const getIsFile = (path_string) => {
  return fs.lstatSync(path_string).isFile();
};

/**
 *
 * @param {string} path_string
 * @returns {boolean}
 */
const getIsDirectory = (path_string) => {
  return fs.lstatSync(path_string).isDirectory();
};

const pathStat = { getIsFile, getIsDirectory };

module.exports = pathStat;
