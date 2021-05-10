import _isEmpty from "lodash/isEmpty";

/**
 *
 * @param {any} something
 * @return {boolean}
 */
const isEmpty = (something) => {
  if (typeof something === "number") {
    return !!something;
  }
  return _isEmpty(something);
};

export { isEmpty };
