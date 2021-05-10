const { isObject } = require("./is-obj");

var getFirstLevelDeep = function (ob) {
  var toReturn = {};
  for (var i in ob) {
    if (!ob.hasOwnProperty(i)) continue;

    if (isObject(ob[i]) || Array.isArray(ob[i])) {
      var flatObject = getFirstLevelDeep(ob[i]);
      for (var x in flatObject) {
        if (!flatObject.hasOwnProperty(x)) continue;

        toReturn[i + "." + x] = flatObject[x];
      }
    } else {
      toReturn[i] = ob[i];
    }
  }
  return toReturn;
};

export { getFirstLevelDeep };

// // prettier - ignore;
// const nested = {
//   headTitle: "Payment confirmed",
//   name: "John Doe",
//   receipt: { id: "214356451234512123", date: "2021-03-01", expired: "2022-02-01" },
//   company: {
//     id: "114256451734512628",
//     name: "Jack Lima",
//     address: "#349,Str.99,Steung ",
//   },
//   purchases: [[1, "personal", "1 year", "72"]],
//   total: ["total", "$ 216.00"],
// };
// console.log(`from r:\n`, getFirstLevelDeep(nested));
