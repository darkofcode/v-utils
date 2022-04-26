/**
 *
 * @param {import('../type.d.js').tVector} v1
 * @param {import('../type.d.js').tVector} v2
 */
export function getDotOf2Vectors(v1, v2) {
  return v1.x * v2.x + v1.y * v2.y;
}
