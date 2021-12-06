const { isNumber } = require("../numbers/is-numeric");

/**
 *
 * @param {string|number} num1
 * @param {string|number} num2
 * @return {boolean}
 */
export const isGreater = (num1, num2) => {
  if (!isValid(num1) || !isValid(num2)) throw "expect number!";
  const s1 = getSign(num1);
  const s2 = getSign(num2);
  const numStr1 = getNumber(num1);
  const numStr2 = getNumber(num2);
  if (s1 === "+" && s2 === "+") return isGreaterPositive(numStr1, numStr2);
  if (s1 === "+" && s2 === "-") return true;
  if (s1 === "-" && s2 === "+") return false;
  if (s1 === "-" && s2 === "-") return isGreaterPositive(numStr2, numStr1);
};

/**
 *
 * @param {string|number} num
 * @return {true}
 */
const isValid = (num) => {
  const calString = getNumber(num);

  for (let i = 0; i < calString.length; i++) {
    if (!isNumber(calString[i])) return false;
  }
  return true;
};
/**
 *
 * @param {string|number} num
 */
const getSign = (num) => {
  const numString = num.toString();
  const n1 = numString[0];
  return n1 === "-" ? "-" : "+";
};

const getNumber = (num) => {
  const numString = num.toString();
  const n1 = numString[0];
  return n1 === "+" || n1 === "-" ? numString.slice(1) : numString;
};

/**
 *
 * @param {string|number} num1
 * @param {string|number} num2
 */
const isGreaterPositive = (num1, num2) => {
  const str1 = num1.toString();
  const str2 = num2.toString();
  if (str1.length > str2.length) return true;
  if (str1.length < str2.length) return false;

  for (let i = 0; i < str1.length; i++) {
    const n1 = +str1[i];
    const n2 = +str2[i];
    // 3234 3134
    if (n1 !== n2) {
      return n1 > n2 ? true : false;
    }
  }
  return false;
};

// const t1 = isGreater(1, 2);
// const t2 = isGreater(2, 1);
// const t3 = isGreater(1, 1);
// const t4 = isGreater(-2, 1);
// const t5 = isGreater("-2a", 1);

// console.log(`from test:\n`, { t1, t2, t3, t4, t5 });
