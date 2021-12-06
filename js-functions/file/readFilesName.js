const fs = require("fs");
const path = require("path");

/**
 *
 * @param {string} dirPath
 * @returns {boolean}
 */
const isEndWithSep = (dirPath) => {
  const sep = path.sep;
  return dirPath[dirPath.length - 1] === sep;
};
const getFileNames = (files) =>
  files.filter((file) => file.isFile()).map((dirent) => dirent.name);

const getNames = (dirPath, files, isFullPath) => {
  const names = getFileNames(files);
  if (!isFullPath) return names;
  return names.map((f) => (isEndWithSep(dirPath) ? dirPath + f : dirPath + path.sep + f));
};

/**
 *
 * @param {string} directoryPath
 * @param {boolean} isFullPath
 * @returns {Promise<string[]>}
 * @default {isFullPath:false}
 * @example
 * getFileNamesAsync(path.join(__dirname,'./abc'))
 * =>['1.png','2.jpg']
 */
const getFileNamesAsync = async (directoryPath, isFullPath = false) => {
  const dirPath = directoryPath;
  return new Promise((resolve) => {
    fs.readdir(dirPath, { withFileTypes: true }, (err, files) => {
      if (err) throw err;
      resolve(getNames(dirPath, files, isFullPath));
    });
  });
};

/**
 *
 * @param {string} directoryPath
 * @param {boolean} isFullPath
 * @returns {string[]}
 * @default {isFullPath:false}
 * @example
 * getFileNamesAsync(path.join(__dirname,'./abc'))
 * =>['1.png','2.jpg']
 */
const getFileNamesSync = (directoryPath, isFullPath = false) => {
  const names = fs.readdirSync(directoryPath, { withFileTypes: true });
  return getNames(directoryPath, names, isFullPath);
};

export { getFileNamesAsync, getFileNamesSync };
