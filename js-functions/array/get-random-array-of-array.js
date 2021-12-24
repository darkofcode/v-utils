import { getRandomInteger as rnd } from "../numbers/random";
/**
 *
 * @param {any[]} arr any array
 * @param {number} min
 * @param {number} max
 * @return {any[]}
 */

const getRandomArrayOfArray = (arr, min, max) => {
  if (min < 0 || max >= arr.length) {
    throw new Error("min should not be less that 0 or max should not be greater than arr len");
  }
  const len = rnd(min, max - 1);
  const iteratePerTime = parseInt(arr.length / len);
  const rndArr = [];
  for (let i = 0; i < len; i++) {
    const sliceArr = arr.slice(iteratePerTime * i, iteratePerTime * (i + 1));
    rndArr.push(sliceArr[rnd(0, sliceArr.length - 1)]);
  }
  return rndArr;
};

export { getRandomArrayOfArray };
