const { createCipheriv, createDecipheriv } = require("crypto");

/**
 *
 * @param {string} str
 * @param {string} secrete string at least 32 chars
 * @param {string} iv string at least 16 chars
 * @param {import("crypto").Encoding} inputEncoding
 * @param {import("crypto").Encoding} outputEncoding
 */
const getEncrypt = (str, secrete, iv, inputEncoding = "utf8", outputEncoding = "hex") => {
  const cipher = createCipheriv("aes256", secrete.slice(0, 32), iv.slice(0, 16));
  const encryptedMessage =
    cipher.update(str, inputEncoding, outputEncoding) + cipher.final(outputEncoding);
  return encryptedMessage;
};

/**
 *
 * @param {string} str
 * @param {string} secrete string at least 32 chars
 * @param {string} iv string at least 16 chars
 * @param {import("crypto").Encoding} inputEncoding string at least 16 chars
 * @param {import("crypto").Encoding} outputEncoding string at least 16 chars
 */
const getDecrypt = (
  encrypted,
  secrete,
  iv,
  inputEncoding = "hex",
  outputEncoding = "utf8"
) => {
  try {
    const decipher = createDecipheriv("aes256", secrete.slice(0, 32), iv.slice(0, 16));
    return (
      decipher.update(encrypted, inputEncoding, outputEncoding) +
      decipher.final(outputEncoding)
    );
  } catch (error) {
    return "";
  }
};
export { getEncrypt, getDecrypt };

// const { generateSecrete: rnd } = require("../string/generate-secrete");
// const msg = JSON.stringify({
//   exp: new Date(),
//   id: "925716934757673",
//   name: "Darth of Code",
//   photo_url: "https://avatars.githubusercontent.com/u/37630148?v=4",
//   rank: "lieutenant",
//   ip: "114.134.185.138",
// });
// const key = rnd(32, { special: false, upper: false });
// const iv = rnd(16, { special: false, upper: false });
//   key: 'n9MV77@F)f%?M7p9(DVP)k3@%%Zg&)TB',
//  iv: '(9&9d9(K3?(Dm%Q%',
// console.log(`from enc:\n`, { key, iv });

// const enc = getEncrypt(msg, key, iv, "utf8", "base64");
// const dec = getDecrypt(enc, key, iv, "base64", "utf8");

// console.log(`from encrypt`, {
//   key,
//   iv,
//   enc: encodeURIComponent(enc),
//   dec,
//   msg,
// });
