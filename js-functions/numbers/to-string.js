/**
 *
 * @param {string} secrete
 * @param {number} number
 * @param {number} radix
 * @return {string}
 * @example
 * toString("abcdef",12345,6) => "bddafd"
 */
const toString = (secrete, number, radix) => {
  if (isNaN(Number(number)) || number === null || number === Number.POSITIVE_INFINITY)
    throw new Error("The input is not valid");
  if (number < 0) throw new Error("Can't represent negative numbers now");
  if (radix > secrete.length || radix <= 1) throw new Error("radix must be 2<= x <= " + secrete.length);
  var rixit;
  var residual = Math.floor(number);
  var result = "";
  while (true) {
    rixit = residual % radix;
    result = secrete.charAt(rixit) + result;
    residual = Math.floor(residual / radix);
    if (residual === 0) break;
  }
  return result;
};

let s = "G2JTYWMXVN4RLC96B1ZKH5S03DPFQ87";
for (let i = 29810; i < 29830; i++) {
  // console.trace(`case ${i}`, toString(s, i, s.length));
}

/**
case 29810 5BRL8Q 
case 29811 YV6Q00 
case 29812 5DBZ8V 
case 29813 YZ9K08 
case 29814 56NDMZ 
case 29815 YR407W 
case 29816 Y9DV48 
case 29817 YNX8MN 
case 29818 584VL7 
case 29819 Y00D69 
case 29820 YQDWVL 
case 29821 YPZNBW 
case 29822 YKKZML 
case 29823 53VD9V 
case 29824 Y10696 
case 29825 YXLQM4 
case 29826 YMZNL3 
case 29827 5WQDXR 
case 29828 5L38W0 
case 29829 Y4RD96 
​
 */

export { toString };
