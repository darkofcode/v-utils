/**
 *
 * @param {import('../type.d.js').tVector} v1
 * @param {import('../type.d.js').tVector} v2
 */
export function getAddVector(v1, v2) {
  return {
    x: v1.x + v2.x,
    y: v1.y + v2.y,
  };
}
