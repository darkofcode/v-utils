import { getAddVector } from "./vector/getAddVector.js";
import { getDotOf2Vectors } from "./vector/getDotOf2Vectors.js";
import { getMultiplyVector } from "./vector/getMultiplyVector.js";

/**
 * getVelocityAfterCollision of 2 ball of the same mass
 * @param {{x:number,y:number,vx:number,vy:number}} b1
 * @param {{x:number,y:number,vx:number,vy:number}} b2
 */
export function getVelocityAfterCollision(b1, b2) {
  const v01 = {
    x: b1.vx,
    y: b1.vy,
  };
  const v02 = {
    x: b2.vx,
    y: b2.vy,
  };
  const un = getUnitVectorOf2Points(b1, b2);
  const ut = getUnitTangentOf2Balls(b1, b2);

  const v1n = getMultiplyVector(getDotOf2Vectors(v02, un), un);
  const v1t = getMultiplyVector(getDotOf2Vectors(v01, ut), ut);
  const v1 = getAddVector(v1n, v1t);

  const v2n = getMultiplyVector(getDotOf2Vectors(v01, un), un);
  const v2t = getMultiplyVector(getDotOf2Vectors(v02, ut), ut);
  const v2 = getAddVector(v2n, v2t);

  return { v1, v2, ut, un, v1n, v1t, v2n, v2t };
}

/**
 *
 * @param {import('./type.d.js').tPoint} p1
 * @param {import('./type.d.js').tPoint} p2
 */
export function getUnitVectorOf2Points(p1, p2) {
  const v = getVector(p1, p2);
  const s = Math.sqrt(v.x ** 2 + v.y ** 2);
  return {
    x: v.x / s,
    y: v.y / s,
  };
}

/**
 * result of tangent angle in clockwise direction
 * @param {import('./type.d.js').tPoint} p1
 * @param {import('./type.d.js').tPoint} p2
 */
export function getUnitTangentOf2Balls(p1, p2) {
  const u = getUnitVectorOf2Points(p1, p2);
  return {
    x: -u.y,
    y: u.x,
  };
}
