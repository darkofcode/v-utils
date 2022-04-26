/**
 *
 * @param {import('./type.d.js').tPoint} start
 * @param {number} angle
 * @param {number} length
 * @returns
 */
export function getEndPos(start, angle, length) {
  return {
    x: start.x + length * Math.cos(angle),
    y: start.y + length * Math.sin(angle),
  };
}
