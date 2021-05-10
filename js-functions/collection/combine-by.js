import { arrayToObj } from "../array/array-to-obj";

/**
 *
 * @param {{}[]} mainCollection
 * @param {{}[]} secondCollection
 * @param {(item:{})=>any} compareValueFn
 * @return {{}[]}
 * @example
const col1 = [{ id: 1 }, { id: 2 }];
const col2 = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
const r = combineBy(col1, col2, (o) => o.id);
// r = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]
 *
 *
 */
const combineBy = (mainCollection, secondCollection, compareValueFn) => {
  // console.log(`from combine fnc`, { mainCollection, secondCollection });
  const col1Obj = arrayToObj(mainCollection, compareValueFn, compareValueFn);
  const r = [];
  secondCollection.forEach((col) => {
    const test = compareValueFn(col);
    if (test) {
      if (!col1Obj[test]) r.push(col);
    }
  });
  return [...mainCollection, ...r];
};

// const col1 = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }];
// const col2 = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 7 }, { id: 8 }, { id: 9 }];
// const r = combineBy(col1, col2, (o) => o.id);
// console.log(`from test`, r);
export { combineBy };
