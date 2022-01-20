import * as pkg from "../numbers/random.js";

const rnd = pkg.getRandomInteger;
/**
 *
 * @param {number} constraint
 * @param {number} width
 * @param {number} height
 * @returns {{x:number,y:number}}
 */
export const getOutSidePosition = (constraint, width, height) => {
  const preX = {
    min: -constraint, //
    middle: rnd(constraint, width - constraint), //
    max: constraint + width,
  };
  const preY = {
    min: -constraint, //
    middle: rnd(constraint, height - constraint), //
    max: constraint + height,
  };
  /*
    xMin => yMiddle
    xMiddle => yMin || yMax
    yMax => yMiddle
  */
  const xKey = ["min", "middle", "max"][rnd(0, 2)];
  const yKey = getYKey(xKey);

  return { x: preX[xKey], y: preY[yKey] };
};

function getYKey(xKey) {
  switch (xKey) {
    case "min":
    case "max":
      return "middle";

    default:
      return ["min", "max"][rnd(0, 1)];
  }
}

// const a1 = getOutSidePosition(5, 35, 15);
// const a2 = getOutSidePosition(10, 50, 70);
// const a3 = getOutSidePosition(2, 22, 42);
// const a4 = getOutSidePosition(4, 34, 14);

// console.log(`from test:\n`, {
//   a1,
//   a2,
//   a3,
//   a4,
// });
