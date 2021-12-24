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
  let testObj = {};
  let r = [];

  [mainCollection, secondCollection].forEach((array) =>
    array.forEach((col) => {
      const id = compareValueFn(col);

      if (id) {
        if (!testObj[id]) r.push(col);
      }
      testObj[id] = id;
    })
  );

  return r;
};

// const col1 = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }];
// const col2 = [
//   { id: 1 },
//   { id: 2 },
//   { id: 3 },
//   { id: 4 },
//   { id: 5 },
//   { id: 6 },
//   { id: 1 },
//   { id: 2 },
//   { id: 3 },
//   { id: 7 },
//   { id: 8 },
//   { id: 9 },
// ];
// const r = combineBy(col1, col2, (o) => o.id);
export { combineBy };
