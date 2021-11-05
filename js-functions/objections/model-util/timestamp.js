import { Model as _Model } from "objection";

/**
 *
 * @param {{Model: typeof _Model,beforeInsert:boolean,beforeUpdate:boolean}} _param
 * @returns
 */
export default function timeStamps({
  Model = _Model,
  beforeInsert = true,
  beforeUpdate = true,
}) {
  return class TimeStamp extends Model {
    async $beforeInsert(context) {
      await super.$beforeInsert(context);
      // const jsonFields = this.constructor.jsonFields;
      if (beforeInsert) {
        if (this.created_at) return;
        this.created_at = new Date().toISOString();
      }
    }

    async $beforeUpdate(context) {
      await super.$beforeUpdate(context);
      if (beforeUpdate) {
        if (this.updated_at) return;
        this.updated_at = new Date().toISOString();
      }
    }
  };
}