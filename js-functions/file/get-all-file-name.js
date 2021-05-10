import fs from "fs";

/**
 *
 * @param {string} directoryPath
 * @return {string[]} string file name array
 */
const getAllFileNames = (directoryPath) => {
  return new Promise((resolve, reject) => {
    fs.readdir(directoryPath, { withFileTypes: true }, (err, files) => {
      if (err) {
        reject(err);
      }
      const filesNames = files.filter((file) => file.isFile()).map((dirent) => dirent.name);
      resolve(filesNames);
    });
  });
};

export { getAllFileNames };
