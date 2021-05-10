/**
 *
 * @param {any[]} arr
 * @param {(item:any)=>Boolean} filter
 * @param {(item:any)=>any} map
 */
const filterMap = (arr, filter, map) => {
  let newArray = [];
  arr.forEach((o) => {
    const condition = filter(o);
    if (condition) {
      const newItem = map ? map(o) : o;
      newArray.push(newItem);
    }
  });
  return newArray;
};

export { filterMap };
