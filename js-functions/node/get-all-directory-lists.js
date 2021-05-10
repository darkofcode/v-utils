const fs = require("fs");

/**
 *
 * @param {string} source
 * @returns {string[]}
 * @description
 * return all sub direname only if not include file
 */
const getDirectories = (source, includeFile = false) => {
  return fs
    .readdirSync(source, { withFileTypes: true })
    .filter((dirent) => (includeFile ? dirent : dirent.isDirectory()))
    .map((dirent) => dirent.name);
};

// console.log(`from dir`, getDirectories(path.join(__dirname, "../../zmenka/")));
// console.log(`from dir file`, getDirectories(path.join(__dirname, "../../zmenka/"), true));

export { getDirectories };
