/**
 *
 * @param {number | string} num
 * @param {number} precision
 * @param {"up" | "down"} upDown
 * @default {precision:2,upDown:"up"}
 */
const round = (num, precision = 2, upDown = "up") => {
  const number = +num;
  if (upDown === "up") {
    return (Math.round((number + Number.EPSILON) * 10 ** precision) / 10 ** precision).toFixed(precision);
  } else {
    return (Math.floor((number + Number.EPSILON) * 10 ** precision) / 10 ** precision).toFixed(precision);
  }
};
export { round };
