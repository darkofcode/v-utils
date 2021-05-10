const crypto = require("crypto");

/**
 *
 * @param {string} string
 * @param {'hex'|'base64'} digestType
 * @returns {string}
 * @default {digestType:"hex"}
 */
const getMd5Hash = (string, digestType = "hex") => {
  return crypto.createHash("md5").update(string).digest(digestType).toString();
};

export { getMd5Hash };
