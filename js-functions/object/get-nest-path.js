/**
 *
 * @param {any} data
 * @param {string | number} findId
 * @param {string} idKey
 * @param {string} childrenKey
 * @return {-1|1|string[]} -1 Not found, 1 found current data,string[] other nested path
 * @default {idKey:"id",string:"children"}
 */
const getNestedPath = (data, findId, idKey = "id", childrenKey = "children") => {
  const found = _findIndex(data, findId, idKey, childrenKey);
  // console.log(found);
  if (found === undefined) {
    return -1;
  }
  if (found === ".") return 1;
  return found.split(".").slice(1);
};
const _findIndex = (data, findId, idKey, childrenKey, _i, _path) => {
  // let path = [""];
  const { [childrenKey]: children = [], [idKey]: id } = data;
  let childCount = children.length - 1;
  const path = _i !== undefined ? `${_path}.${childrenKey}.${_i}` : "";
  if (id === findId) {
    // memoObj = [path];
    return path ? path : ".";
  }
  if (children.length) {
    for (let i = 0; i <= childCount; i++) {
      const child = children[i];
      const found = _findIndex(child, findId, idKey, childrenKey, i, path);
      if (found) return found;
    }
  }
  // return { memo, memoObj, path };
};

export { getNestedPath };
