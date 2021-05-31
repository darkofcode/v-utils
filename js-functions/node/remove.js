const exec = require("child_process").exec;

/**
 *
 * @param {string} destPath
 * @description remove file or folder
 * @returns {Promise<void>}
 */
const remove = (destPath) => {
  return new Promise((resolve, reject) => {
    exec(`rm -rf "${destPath}"`, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

export { remove };
