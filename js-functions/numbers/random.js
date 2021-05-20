/**
 *
 * @param {number} min
 * @param {number} max
 * @return {number} random number between min and max
 * @example
 * let r =rndBetween(1,7);
 * // r = number between 1 and 7; 1 or 7 includes
 */
function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// console.log(`from rnd:\n`, getRandomInteger(1311212, 513123141));
export { getRandomInteger };
