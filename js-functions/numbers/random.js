/**
 *
 * @param {number} min
 * @param {number} max
 * @return {number} random number between min and max include min || max
 * @example
 * let r =rndBetween(1,7);
 * // r = number between 1 and 7; 1 or 7 includes
 */
function getRandomInteger(min, max) {
  // // min and max included
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// const test = () => {
//   for (let i = 0; i <= 10; i++) {
//     const r = getRandomInteger(0, 3);
//     console.log(`from rnd: `, r);
//   }
// };
// test();

export { getRandomInteger };
