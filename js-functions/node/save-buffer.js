import fs from "fs";

/**
 * @param {any} buffer
 * @param {string} filePath
 */

const saveBuffer = async (buffer, filePath) => {
  if (!buffer || !Buffer.isBuffer(buffer)) {
    throw new TypeError("A buffer is required.");
  }

  if (!filePath) {
    throw new TypeError("A file path is required.");
  }

  // await makeDir(dir);

  const err = await new Promise((resolve, reject) =>
    fs.writeFile(filePath, buffer, (err) => {
      if (err) return reject(err);

      return resolve();
    })
  );

  return err;
};

export { saveBuffer };
