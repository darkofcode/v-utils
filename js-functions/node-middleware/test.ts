type t = (a: string, skipEmptyArg: boolean) => string;
const test: t = (a, skipEmptyArg = true) => {
  return skipEmptyArg ? a : a + a;
};
