/**
 * @param {string} query ?foo=bar
 * @return {object}
 */
export const querySearch = (query) => {
  let search = query.startsWith("?") ? query.substr(1) : query;
  let result = {};
  search.split("&").forEach((src) => {
    if (src.includes("=")) {
      const keyValue = src.split("=");
      result[keyValue[0]] = keyValue[1];
    }
  });
  return result;
};
