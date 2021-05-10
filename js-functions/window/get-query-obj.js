/**
 *
 * @param {Window} _window
 * @return {{[key:string]:string}}
 */
const getQueryObj = (_window) => {
  try {
    const query = _window.location.search.substring(1);
    if (!query) return {};
    const vars = query.split("&");
    let obj = {};

    for (let i = 0; i < vars.length; i++) {
      let pair = vars[i].split("=");
      obj[pair[0]] = pair[1];
    }
    return obj;
  } catch (error) {
    return {};
  }
};
export { getQueryObj };
