/**
 * get position of object relative to first point
 * @param {number} startX
 * @param {number} startY
 * @param {number} angle
 * @param {number} lenOrVelocity
 * @returns {{x:number,y:number}}
 */
export const getEndingPos = (startX, startY, angle, lenOrVelocity) => ({
  x: Math.cos(angle) * lenOrVelocity + startX,
  y: Math.sin(angle) * lenOrVelocity + startY,
});
