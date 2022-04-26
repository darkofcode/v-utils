/**
 *
 * @param {import('../type.d.js').tPoint} p1
 * @param {import('../type.d.js').tPoint} p2
 * @return {{x:number,y:number}}
 */
export function getVector2Points(p1, p2) {
  return { x: p2.x - p1.x, y: p2.y - p1.y };
}
