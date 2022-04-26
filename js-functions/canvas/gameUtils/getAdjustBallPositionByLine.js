import { getAngleOf2Points } from "./getAngleOf2Points.js";
import { getDistanceOf2Points } from "./getDistanceOf2Points.js";
import { distancePoint2Line } from "./getDistancePointToLine.js";

/**
 * if a ball next position move over or past by restrict line (of 2 points)
 * then adjust it position back
 * @param {import('./type.d.js').tPoint} nowPosition
 * @param {import('./type.d.js').tPoint} nextPosition
 * @param {import('./type.d.js').tLine} restrictLine
 * @param {number} adjustRadius
 * @returns {{x:number,y:number}}
 */

export function getAdjustPositionByLine(nowPosition, nextPosition, restrictLine, adjustRadius) {
  const ballDirection = getAngleOf2Points(nowPosition, nextPosition);
  const d2 = distancePoint2Line(nextPosition, restrictLine);
  const d1 = distancePoint2Line(nowPosition, restrictLine);

  const lt = getDistanceOf2Points(nowPosition, nextPosition);
  const a = (d2 + d1) / lt;
  const lr = (d1 - adjustRadius) / a;

  let x = nowPosition.x + lr * Math.cos(ballDirection);
  let y = nowPosition.y + lr * Math.sin(ballDirection);
  if (x <= config.ballMinSpeed) x = 0;
  if (y <= config.ballMinSpeed) y = 0;
  return { x, y };
}
