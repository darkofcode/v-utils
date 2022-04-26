/**
 *
 * @param {import('../type.d.js').tVector} v
 * @returns {number}
 */
export function getVectorValue(v) {
  return Math.sqrt(v.x ** 2 + v.y ** 2);
}
