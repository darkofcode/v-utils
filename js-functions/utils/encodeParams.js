/**
 *
 * @param {{[key:string]:string}} p
 * @return {string}
 *
 * @example
 * encodeUrlParams({a: '1', b: 'two three', myName: 'faser what $'})
 * => 'a=1&b=two%20three&myName=faser%20what%20%24'
 */
const encodeUrlParams = (p) => {
  return Object.entries(p)
    .map((kv) => kv.map(encodeURIComponent).join("="))
    .join("&");
};

/**
 *
 * @param {string} str
 * @return {{[key:string]:string}|{}}
 *
 * @example
 * decodeUrlParams('a=1&b=two%20three&myName=faser%20what%20%24')
 * => {a: '1', b: 'two three', myName: 'faser what $'}
 */
const decodeUrlParams = (str) => {
  if (!str) return {};
  let r = {};
  str.split("&").forEach((kv) => {
    const kvs = kv.split("=");
    r[kvs[0]] = decodeURIComponent(kvs[1] || "");
  });
  return r;
};

export { encodeUrlParams, decodeUrlParams };
