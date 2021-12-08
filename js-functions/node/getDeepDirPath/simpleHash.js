function pad(hash, len) {
  while (hash.length < len) {
    hash = "v" + hash;
  }
  return hash;
}

function fold(hash, text) {
  text = text.toString();
  if (text.length < 8) text = pad(text, 8);
  var i;
  var chr;
  var len;
  if (text.length === 0) {
    return hash;
  }
  for (i = 0, len = text.length; i < len; i++) {
    chr = text.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0;
  }
  return hash < 0 ? hash * -2 : hash;
}

/**
 *
 * @param {string|number} text
 * @param {number} initHash
 * @returns {string}
 */
export const hash = (text, initHash = 39819) => fold(initHash, text).toString(16);
