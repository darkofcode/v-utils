const getRndBetween = (len) => {
  return Math.floor(Math.random() * len);
};
const getRndString = (str) => {
  const rnd = getRndBetween(str.length);
  return str.substring(rnd, rnd + 1);
};
const getRndArray = (arr) => {
  let rnd = getRndBetween(arr.length);
  if (rnd >= arr.length) rnd = arr.length - 1;
  if (rnd < 0) rnd = 0;
  return arr[rnd];
};

/**
 * @param {number} len
 * @param {{upper:boolean,special:boolean,baseChar:string}} opt
 * @return {string} string
 * @default {len,{upper:true,special:false}}
 */

const generateSecrete = (len, { upper = true, special = false, baseChar = "" } = {}) => {
  // exclude aeiou to filter bad word
  let chars = baseChar ? baseChar : "0123456789bcdfghklmnpqrstvwxyz";
  const specialChar = "$%&()?@";
  const string_length = len;
  let randomStr = "";

  for (let i = 0; i < string_length; i++) {
    let allChars = [];
    const charLower = getRndString(chars);
    allChars.push(charLower);
    if (upper) {
      allChars.push(charLower.toUpperCase());
    }
    if (special) {
      allChars.push(getRndString(specialChar));
    }
    randomStr = randomStr + getRndArray(allChars);
  }
  return randomStr;
};

// const a1 = generateSecrete(32, { upper: true, special: true });
// const a2 = generateSecrete(32, { upper: true, special: true });
// const a3 = generateSecrete(32, { upper: true, special: true });
// console.log({ a1, a2, a3 });

export { generateSecrete };
