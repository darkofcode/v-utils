import { getDeg } from "../getDeg.js";
import { getRad } from "../getRad.js";
import { getVectorValue } from "./getVectorValue.js";

/**
 *
 * @param {import('../type.d.js').tVector} v
 * @param {number} degAngle
 */
export function addVectorAngle(v, degAngle) {
  const angle0 = getDeg(Math.atan2(v.y, v.x));
  const value = getVectorValue(v);
  const newAngle = getRad(angle0 + degAngle);

  return {
    x: value * Math.cos(newAngle),
    y: value * Math.sin(newAngle),
  };
}
