import { Model as _Model } from "objection";
import { isEmpty } from "../../object/is-empty";

/**
 *
 * @param {typeof _Model} Model
 * @returns {typeof _Model}
 * @example
class Transform extends transform(Model) {
  static transformColumn = ['double',fnDouble];
}
// expected behavior
Transform.query().insert({
  double:5,
})
// before insert 
// double must have some value otherwise not invoke function
double => 10

// before update
// double must also have some value otherwise doubleFunction will not be invoked

 */
export default function transform(Model = _Model) {
  return class Transform extends Model {
    // tsSearchColumns = ['double',fn,'transformArgumentPath_defaultToColumn']
    static transformColumn = [];

    async $beforeInsert(context) {
      await super.$beforeInsert(context);
      const [key, fn, keyPath] = getTransformArguments(this.constructor.transformColumn);
      if (isEmpty(key) || isEmpty(this[keyPath])) return;
      const trValue = await fn(this[keyPath]);

      // const whatIsThis = this;
      // console.log(`from tsSearch`, { whatIsThis, context, searchValue });

      this[key] = trValue;
    }

    async $beforeUpdate(opt, context) {
      await super.$beforeUpdate(opt, context);
      const [key, fn, keyPath] = getTransformArguments(this.constructor.transformColumn);
      if (isEmpty(key) || isEmpty(this[keyPath])) return;

      const trValue = await fn(this[keyPath]);

      this[key] = trValue;
    }
  };
}

const getTransformArguments = (searchArr = []) => {
  if (isEmpty(searchArr) || !Array.isArray(searchArr)) {
    return [];
  }
  const columnKey = searchArr[0];
  const fn = searchArr[1];
  const keyPath = searchArr[2] || columnKey;
  return [columnKey, fn, keyPath];
};
