/**
 *
 * @param {number} searchNumber
 * @param {number[]} sortedArrayNumber
 */
const binarySearch = (searchNumber, sortedArrayNumber) => {
  let lowerIndex = 0;
  let upperIndex = sortedArrayNumber.length - 1;

  // let counter = 0;
  let r = -1;
  while (lowerIndex <= upperIndex) {
    const middleIndex = Math.floor((upperIndex + lowerIndex) / 2);
    const middleValue = sortedArrayNumber[middleIndex];

    // counter++;
    if (searchNumber === middleValue) {
      r = middleIndex;
      break;
    }
    if (searchNumber < middleValue) {
      upperIndex = middleIndex - 1;
    } else {
      lowerIndex = middleIndex + 1;
    }
  }
  // console.log({ counter });
  return r;
};

export { binarySearch };

// const getArr = () => {
//   let arr = [];
//   for (let i = 0; i <= 1e6; i++) {
//     arr.push(i);
//   }
//   return arr;
// };
// const test = getArr();
// console.log(`from binary search`, binarySearch(99999, test));
