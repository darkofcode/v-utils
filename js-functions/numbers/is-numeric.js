/**
 *
 * @param {any} num
 * @return {boolean}
 */
export const isNumber = (num) => {
  const test = +(num + "");
  return !isNaN(test);
};
