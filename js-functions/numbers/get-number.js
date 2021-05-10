/**
 *
 * @param {string} value
 * @param {number} precision
 * @return {string}
 * @example
 * getNumber('fa123.12') // 123.12
 * getNumber('fa123.12',0) // 123
 * getNumber('fa123.12',-1) // 123
 *
 */
const getNumber = (value, precision = 2) => {
  const _precision = precision > 0 ? precision : 0;
  if (value.length === 0) return `0`;
  const values = value.split(".");
  const firstPart = values[0].split("");
  const secondPart = (values[1] ? values[1] : "").split("");

  let r1 = [],
    r2 = [];
  //get first letter - or digit
  if (firstPart[0] === "-" || /^[0-9-]/.test(firstPart[0])) {
    r1.push(firstPart[0]);
  }
  for (let i = 1; i < firstPart.length; i++) {
    let v = firstPart[i];
    if (/^[0-9]/.test(v)) r1.push(v);
  }
  for (let i = 0; i < secondPart.length; i++) {
    let v = secondPart[i];
    if (r2.length === _precision) break;
    if (/^[0-9]/.test(v)) r2.push(v);
  }
  r1 = r1.length === 0 ? "0" : r1.join("");
  r2 = r2.length === 0 ? "0" : r2.join("");
  return _precision > 0 ? `${r1}.${r2}` : r1.toString();
};

// console.log(getNumber("fa123.12"));
// console.log(getNumber("fa123.12", 0));
// console.log(getNumber("fa123.1a12", 1));
// console.log(getNumber("fa123.1a2", -1));
export { getNumber };
