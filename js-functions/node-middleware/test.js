var test = function (a, skipEmptyArg) {
  if (skipEmptyArg === void 0) {
    skipEmptyArg = true;
  }
  return skipEmptyArg ? a : a + a;
};

const a = async () => {
  let t = await test("4");
  console.log(`from test:\n`, t);
};
a();
