/**
 *
 * @param {import('./type.d.js').tPoint} point
 * @param {import('./type.d.js').tLine} line
 */
export function distancePoint2Line(point, line) {
  const A = line[0];
  const B = line[1];
  const xa = A.x;
  const ya = A.y;
  const xb = B.x;
  const yb = B.y;
  const x0 = point.x;
  const y0 = point.y;

  if (xb === xa) {
    return Math.abs(x0 - xa);
  }
  const a = (yb - ya) / (xb - xa);
  return Math.abs(-a * x0 + y0 + a * xa - ya) / Math.sqrt(a ** 2 + 1);
}
