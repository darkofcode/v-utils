import { camelToSnakeCase } from "../string/to-snake";
import { looper } from "./looper";

/**
 *
 * @param {Object} obj
 * @param {{removeKeyIfNull:boolean}} options
 */
const objKeyToSnake = (obj, options = {}) => {
  const { removeKeyIfNull = false } = options;
  return looper(obj, (key, val) => {
    if (removeKeyIfNull) {
      if (val) {
        return { key: camelToSnakeCase(key), val };
      } else {
        return { key: false, val };
      }
    } else {
      return { key: camelToSnakeCase(key), val };
    }
  });
};

export { objKeyToSnake };
