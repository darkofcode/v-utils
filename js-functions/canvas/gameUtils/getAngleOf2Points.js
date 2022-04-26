/**
 *
 * @param {import('./type.d.js').tPoint} start
 * @param {import('./type.d.js').tPoint} end
 * @returns {number} in radian
 */
export function getAngleOf2Points(start, end) {
  return Math.atan2(end.y - start.y, end.x - start.x);
}
