/**
 *
 * @param {string} str
 * @returns {string}
 */
function shuffle(str) {
  var a = str.toString().split(""),
    n = a.length;
  for (var i = n - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
  }
  return a.join("");
}

// const a = "xnbcgxhpbvvqgkrtqsrpfmwmjljkdlshcntwfd";
// const b = shuffle(a);
// console.log(`from a:\n`, { a, b });

export { shuffle };
