import { getAngleOf2Points } from "./getAngleOf2Points.js";
import { getDistanceOf2Points } from "./getDistanceOf2Points.js";
import { distancePoint2Line } from "./getDistancePointToLine.js";
import { getEndPos } from "./getEndPos.js";

/**
 *
 * @param {import('./type.d.js').tCircle} nowBall
 * @param {import('./type.d.js').tPoint} ballNextPosition
 * @param {import('./type.d.js').tCircle} restrictBall
 * @param {number} adjustDistance
 *
 */
export function getAdjustBallPositionByBall(nowBall, ballNextPosition, restrictBall, adjustDistance) {
  if (!adjustDistance) adjustDistance = nowBall.radius + restrictBall.radius;
  const nextPos = ballNextPosition;
  const ballDirection = getAngleOf2Points(nowBall, ballNextPosition);
  const d2 = distancePoint2Line(restrictBall, [nowBall, nextPos]);
  const cosA = Math.cos(Math.asin(d2 / adjustDistance));
  const l23 = adjustDistance * cosA;
  const d12 = getDistanceOf2Points(nowBall, restrictBall);
  const cosG = Math.cos(Math.asin(d2 / d12));
  const l12 = d12 * cosG;
  const l13 = l12 - l23;

  if (isNaN(cosA) || isNaN(cosG)) {
    throw "the two ball not collide";
  }
  return getEndPos(nowBall, ballDirection, l13);
}
