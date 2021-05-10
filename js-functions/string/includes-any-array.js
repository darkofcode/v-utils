/**
 * @param {{str:string,arr:any[],condition:"oneOf"|"all",caseSensitive:boolean}} param0
 * @default {condition:"oneOf",caseSensitive:false}
 */
const includeAnyArray = ({ str, arr, condition = "oneOf", caseSensitive = false }) => {
  const separator = "-----x-qre-------71a129".toLocaleLowerCase();
  const string = caseSensitive ? str : str.toLocaleLowerCase();
  const array = caseSensitive ? arr : arr.join(separator).toLocaleLowerCase().split(separator);

  // console.trace({ string, array });

  if (condition === "oneOf") {
    for (let i = 0; i < array.length; i++) {
      if (string.includes(array[i])) {
        // console.trace({ i, arr: array[i] });
        return true;
      }
    }
    return false;
  } else if (condition === "all") {
    for (let i = 0; i < array.length; i++) {
      if (!string.includes(array[i])) {
        // console.trace("case all-false", { i, arr: array[i] });
        return false;
      }
    }
    return true;
  }
};

export { includeAnyArray };
