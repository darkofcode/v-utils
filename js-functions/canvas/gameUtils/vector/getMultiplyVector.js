/**
 *
 * @param {number} magnitude
 * @param {import('../type.d.js').tVector} vector
 */
export function getMultiplyVector(magnitude, vector) {
  return {
    x: magnitude * vector.x,
    y: magnitude * vector.y,
  };
}
