const exec = require("child_process").exec;

/**
 *
 * @param {string} sourcePath
 * @param {string} destPath
 * @returns {Promise<void>}
 */
const move = (sourcePath, destPath) => {
  return new Promise((resolve, reject) => {
    exec(`rm -rf "${destPath}"`, (err) => {
      if (err) {
        reject(err);
      } else {
        exec(`mv "${sourcePath}" "${destPath}"`, (err) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
      }
    });
  });
};

export { move };
