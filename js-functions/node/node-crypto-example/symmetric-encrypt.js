const { generateSecrete: rnd } = require("../../string/generate-secrete");
const { createCipheriv, createDecipheriv } = require("crypto");

/// Cipher

const message = "i like turtles";
const key = rnd(32, { special: true, upper: true });
const iv = rnd(16, { special: true, upper: true });
// console.log(`from encrypt`, { key, iv });

const cipher = createCipheriv("aes256", key, iv);

/// Encrypt

const encryptedMessage = cipher.update(message, "utf8", "hex") + cipher.final("hex");
//console.log(`Encrypted: `, { encryptedMessage });

/// Decrypt

const decipher = createDecipheriv("aes256", key, iv);
const decryptedMessage = decipher.update(encryptedMessage, "hex", "utf-8") + decipher.final("utf-8");

//console.log(`Deciphered: ${decryptedMessage}`);
