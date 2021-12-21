import { Model as _Model } from "objection";
import { isEmpty } from "../../object/is-empty";

/**
 *
 * @param {typeof _Model} Model
 * @returns
 */
export default function parseJson(Model = _Model) {
  // you can override the hashid properties on a per-model basis using model properties
  return class ParseJson extends Model {
    static jsonColumns() {
      return [];
    }
    static jsonFields() {
      return [];
    }

    $formatJson(obj) {
      obj = super.$formatJson(obj);
      const fields = getFields(this.constructor);

      fields.forEach((field) => {
        if (typeof obj[field] === "string") {
          obj[field] = JSON.parse(obj[field]);
        }
      });

      return obj;
    }
    async $beforeInsert(context) {
      await super.$beforeInsert(context);
      getFields(this.constructor).forEach((field) => {
        this[field] = JSON.stringify(this[field]);
      });
    }

    async $beforeUpdate(opt, context) {
      await super.$beforeUpdate(opt, context);
      getFields(this.constructor).forEach((field) => {
        this[field] = JSON.stringify(this[field]);
      });
    }
  };
}

const getFields = (self) => {
  if (isEmpty(self)) return [];
  const fields = !isEmpty(self.jsonColumns) ? self.jsonColumns : self.jsonFields;
  return Array.isArray(fields) ? fields : [];
};
