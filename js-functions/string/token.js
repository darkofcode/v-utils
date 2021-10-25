const jwt = require("jsonwebtoken");
const shuffleSeed = require("shuffle-seed");
const { encode, decode } = require("./encode-decode");

const verifyToken = (token, secrete) => {
  try {
    const verify = jwt.verify(token, secrete);
    if (verify.exp < verify.iat) {
      return null;
    }
    return verify;
  } catch (error) {
    return null;
  }
};

/**
 *
 * @param {[string]:any} payloadObj
 * @param {string} jwtSecrete
 * @param {string} shuffleSecrete
 * @param {number} expiresInDays
 * @returns {string}
 *
 */
const getToken = (payloadObj, jwtSecrete, shuffleSecrete, expiresInDays) => {
  const token = jwt.sign(payloadObj, jwtSecrete, {
    expiresIn: `${expiresInDays}d`,
  });
  return encode(shuffleSeed.shuffle(token.split(""), shuffleSecrete).join(""));
};

/**
 *
 * @param {string} token
 * @param {string} jwtSecrete 
 * @param {string} shuffleSecrete 
 * @returns {any | null}

*/
const getDecodeToken = (token, jwtSecrete, shuffleSecrete) => {
  const decodedToken = decode(token);
  const newToken = shuffleSeed.unshuffle(decodedToken.split(""), shuffleSecrete).join("");
  const gotToken = verifyToken(newToken, jwtSecrete);
  return gotToken;
};

export { getToken, getDecodeToken };
