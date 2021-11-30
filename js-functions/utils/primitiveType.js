const { isDate } = require("../date/is-date");

const isPrimitiveType = (v) => {
  const primitiveType = ["string", "date", "boolean", "number", "bigint"];
  if (isDate(v)) return true;
  const t = typeof v;
  return primitiveType.includes(t);
};

export { isPrimitiveType };
