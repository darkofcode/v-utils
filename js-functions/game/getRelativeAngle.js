
/**
 * get relative angle between 2 points
 * @param {number} x1 
 * @param {number} y1 
 * @param {number} x2 
 * @param {number} y2 
 * @returns {number} angle in radian
 */
export const getRelativeAngle= (x1, y1, x2, y2) => Math.atan2(y2 - y1, x2 - x1),