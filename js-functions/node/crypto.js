const { createHash, scryptSync, randomBytes, timingSafeEqual } = require("crypto");

/**
 *
 * @param {string} input
 */
function getHash(input) {
  return createHash("sha256").update(input).digest("base64");
}

/**
 *
 * @param {string} input
 * @param {'hex'|'base64'} baseString
 */
function getHashSalt(input, baseString = "base64") {
  const salt = randomBytes(16).toString(baseString);
  // scrypt is designed to be computed intensively to prevent brut force
  const hastPassword = scryptSync(input, salt, 64).toString(baseString);
  return `${salt}:${hastPassword}`;
}
/**
 *
 * @param {string} password string contains salt separated by ex:':'
 * @param {string} input
 */
function compareHashSalt(password, input) {
  const [salt, key] = password.split(":");
  const hashedInputBuffer = scryptSync(input, salt, 64);
  const keyBuffer = Buffer.from(key, "hex");
  const isMatch = timingSafeEqual(hashedInputBuffer, keyBuffer);
  return isMatch;
}

const str = "some text";
const t1 = getHashSalt(str, "hex");
const t2 = getHashSalt(str, "hex");

console.log(`from test: `, { t1, t2 });
