import { Model as _Model } from "objection";
import { pick } from "../../object/pick";
import { unpick } from "../../object/unpick";

/**
 *
 * @param {typeof _Model} Model
 * @returns
 */
export default function hidden(Model = _Model) {
  return class Hidden extends Model {
    $formatJson(json) {
      let formattedJson = super.$formatJson(json);
      const conf = this.constructor;
      const hidden = getArray(conf.hidden);
      const selectOnly = getArray(conf.selectOnly);

      if (!hidden && !selectOnly) {
        return formattedJson;
      }
      if (selectOnly) {
        return (formattedJson = pick(formattedJson, selectOnly, [Infinity]));
      }
      if (hidden) {
        return (formattedJson = unpick(formattedJson, hidden, [Infinity]));
      }
      return formattedJson;
    }
  };
}

/**
 *
 * @param {string[]|string} item
 */
const getArray = (item) => {
  return typeof item === "string" ? item.replace(/\s/gi, "").split(",") : item;
};
