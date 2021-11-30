import { getTsVector } from "./get-tsvector";
import { isDate } from "../date/is-date";
import formatDate from "date-fns/format";
import { looper } from "../object/looper";
import pick from "lodash/pick";
// import objection from "../../../../_server/db/objection";

/**
 *
 * @param {{[key:string]:any}} body
 * @param {string[]} joinColumns
 * @returns {Promise<string>}
 */
export const getSearchJoinValue = async (body = {}, joinColumns = []) => {
  let r = [];
  const newBody = pick(body, joinColumns);
  looper(newBody, (k, v) => {
    const primitive = getPrimitive(v);
    if (primitive) r.push(primitive);
  });
  const tsv = await getTsVector(r.join(" "));
  console.log(`from join search`, { tsv, newBody, body });
  return tsv;
};

const getDateString = (date) => {
  return formatDate(date, "MMMM MMM yyyy");
};

const getPrimitive = (v) => {
  const p = ["string", "number", "bigint"];
  if (isDate(v)) return getDateString(v);
  const t = typeof v;
  if (p.includes(t)) return v.toString();
  return "";
};

// objection();
// getSearchJoinValue(
//   {
//     a: 1,
//     b: new Date(),
//     c: "c",
//     1: "time",
//     d: {
//       ae: "ae",
//       big: BigInt(123),
//       u: undefined,
//       n: null,
//       o: 0,
//     },
//   },
//   ["a", "b", "d"]
// );
