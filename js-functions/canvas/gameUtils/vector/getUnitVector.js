import { getMultiplyVector } from "./getMultiplyVector.js";
import { getVectorValue } from "./getVectorValue.js";

/**
 *
 * @param {import('../type.d.js').tVector} vector
 * @returns
 */
export function getUnitVector(vector) {
  const value = 1 / getVectorValue(vector);
  return getMultiplyVector(value, vector);
}
