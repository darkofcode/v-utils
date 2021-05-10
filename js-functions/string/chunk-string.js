function _chunkString(str, length) {
  const _str = str.toString();
  const len = length ? length : _str.length;
  return _str.match(new RegExp(".{1," + len + "}", "g"));
}

const _chunkStringReverse = (str, length = 3) => {
  if (!str) return "";
  const _str = str.toString();
  const strLen = _str.length;
  let r = [];
  for (let i = length; i < strLen + length; i = i + length) {
    // console.log(i);

    r.unshift(_str.slice(-i, strLen - i + length));
  }
  return r;
};

/**
 *
 * @param {string | number} str
 * @param {number} length
 * @param {boolean} isReverse
 * @return {string[]}
 *
 */
const chunkString = (str, length = 3, isReverse = false) => {
  if (isReverse) return _chunkStringReverse(str, length);
  return _chunkString(str, length);
};
// const str = "seomfaseerot         er sjut back home";
// const a = chunkString(str, Math.ceil(str.length / 2));
// console.log(`from chunk string`, a);

export { chunkString };
