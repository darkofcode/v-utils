/**
 * @param {number} len
 * @param {{upper:boolean,special:boolean,baseChar:string}} opt
 * @return {string} string
 * @default {len,{upper:true,special:false}}
 */

const generateSecrete = (len, { upper = true, special = false, baseChar = "" } = {}) => {
  let chars = "0123456789bcdfghklmnpqrstvwxyz"; // exclude aeiou to filter bad word
  const upperChar = "BCDFGHJKLMNPQRSTVWXTZ"; // exclude aeiou
  const specialChar = "$%&(),-;?@";
  if (upper) {
    chars = chars + upperChar;
  }
  if (special) {
    chars = chars + specialChar;
  }
  chars = baseChar ? baseChar : chars;
  const string_length = len;
  let randomStr = "";
  for (let i = 0; i < string_length; i++) {
    let rnd = Math.floor(Math.random() * chars.length);
    randomStr += chars.substring(rnd, rnd + 1);
  }
  return randomStr;
};

// const a = generateSecrete(6, { upper: true, special: false });
// console.log(a);

export { generateSecrete };
