/**
 *
 * @param {import('./type.d.js').tPoint} point_1
 * @param {import('./type.d.js').tPoint} point_2
 * @returns
 */
export function getDistanceOf2Points(point_1, point_2) {
  return Math.hypot(point_2.y - point_1.y, point_2.x - point_1.x);
}
