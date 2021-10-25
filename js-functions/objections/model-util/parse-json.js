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
    static get jsonColumns() {
      return [];
    }
    static get jsonFields() {
      return [];
    }
    static _1611337314219_getFields() {
      return !isEmpty(this.jsonColumns) ? this.jsonColumns : this.jsonFields;
    }

    $formatJson(obj) {
      obj = super.$formatJson(obj);

      this.constructor._1611337314219_getFields().forEach((field) => {
        if (typeof obj[field] === "string") {
          obj[field] = JSON.parse(obj[field]);
        }
      });

      return obj;
    }
    async $beforeInsert(context) {
      await super.$beforeInsert(context);
      this.constructor._1611337314219_getFields().forEach((field) => {
        this[field] = JSON.stringify(this[field]);
      });
    }

    async $beforeUpdate(context) {
      await super.$beforeUpdate(context);
      this.constructor._1611337314219_getFields().forEach((field) => {
        this[field] = JSON.stringify(this[field]);
      });
    }
  };
}
