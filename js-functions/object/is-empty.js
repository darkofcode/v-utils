import _isEmpty from "lodash/isEmpty";

/**
 *
 * @param {any} something
 * @return {boolean}
 */
const isEmpty = (something) => {
  if (typeof something === "number") {
    return something === 0;
  }
  return _isEmpty(something);
};

export { isEmpty };
