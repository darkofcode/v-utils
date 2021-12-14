const jwt = require("jsonwebtoken");
const { isEmpty } = require("../object/is-empty");
const { getEncrypt, getDecrypt } = require("../node/encryptDecrypt");

const verifyToken = (token, secrete) => {
  try {
    const verify = jwt.verify(token, secrete, {
      algorithms: "HS256",
    });
    // console.log(`from verify:\n`, verify);
    return verify;
  } catch (error) {
    // console.log(`from verify error:\n`, error);
    return null;
  }
};

/**
 *
 * @param {{[key:string]:any}} payloadObj
 * @param {string} jwtSecrete
 * @param {number} expiresInSecond
 * @param {{secrete:string,iv:string}} encryption
 * @returns {string}
 *
 */
const getToken = (payloadObj, jwtSecrete, expiresInSecond, encryption = {}) => {
  const token = jwt.sign(payloadObj, jwtSecrete, {
    expiresIn: expiresInSecond,
    algorithm: "HS256",
    header: {
      alg: "HS256",
      typ: "JWT",
      me: "3Ax&0SRd{Ajx%vA",
    },
  });
  // console.log(`from getToken:\n`, { jwtSecrete, encryption });
  if (isEmpty(encryption)) return encodeURIComponent(token);
  const { secrete, iv } = encryption;
  return encodeURIComponent(getEncrypt(token, secrete, iv, "utf8", "base64"));
};

/**
 *
 * @param {string} token
 * @param {string} jwtSecrete 
 * @param {{secrete:string,iv:string}} encryption
 * @returns {any | null}
  
*/
const getDecodeToken = (token, jwtSecrete, encryption = {}) => {
  const { secrete, iv } = encryption;
  let _token = decodeURIComponent(token);

  _token = isEmpty(encryption)
    ? _token
    : getDecrypt(_token, secrete, iv, "base64", "utf8");

  // console.log(`from decode:\n`, { _token, jwtSecrete });
  const gotToken = verifyToken(_token, jwtSecrete);
  return gotToken;
};
export { getToken, getDecodeToken };

// const { generateSecrete } = require("./generate-secrete");

// const jwtSec = "CS2K5gh55w6LtTskpKCbSn7yt420lHM22Y6lpR3RT366h4bPLBvC7nk876TqRg70";
// const sec = "2mXc1B5VNTHHD7w4bf62wR3w39LcSczcbSn7yt420lHM22Y6lpR3RT366";
// const iv = "YhgVsmybP52bSn7yt420lHM22Y6lpR3RT366B7sPn";

// const token1 = getToken({ id: 123 }, jwtSec, 1 * 60, { secrete: sec, iv });
// const deToken1 = getDecodeToken(token1, jwtSec, { secrete: sec, iv });
// console.log(`from token enc`, { token1, deToken1 });

// const token3 =
//   "2pR1HwMoJAEWrP1nJGp7LvKgn%2BoyqCK%2BHL59D8w1DWBSEV2hJeCSk71jQQQLXXMwmrffGb4I%2BpZ41xAfEn0L5AVz1s5ROTWRFoxNPaohfWW9F%2BMNC5t3XkgtQYzYq2sCS1%2BqfsdqGtbVPpY08CPiBA6GWb7uHpYRqdHFlcLG6hwXb1NtT%2BDeNGh%2BGP3xw%2FSs";
// const deToken3 = getDecodeToken(token3, jwtSec, { secrete: sec, iv });
// // deToken3: { id: 123, iat: 1637512482, exp: 1637512542 }

// const token2 = getToken({ id: 123, user: "abc" }, jwtSec, 2 * 60);
// const deToken2 = getDecodeToken(token2, jwtSec + "a");

// console.log(`from token enc`, { token1, deToken1, token3, deToken3, token2, deToken2 });
