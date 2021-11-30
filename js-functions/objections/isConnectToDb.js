import { Model } from "objection";
import { get } from "../object/get";

export const getIsConnectToDb = async () => {
  try {
    const knex = Model.knex();
    if (!knex) return false;
    const conn = await knex.raw("select 1+2");
    const r = get(conn, ["rows", "0", "?column?"], 0) === 3;
    // console.log(`from is connect`, { conn, rows: conn.rows, r });

    return r;
  } catch (error) {
    return false;
  }
};

// const objection = require("../../../../_server/db/objection").default;
// objection();
// const test = async () => {
//   const conn = await isConnectToDb();
//   console.log(`from is connected`, { conn });
// };
// test();
