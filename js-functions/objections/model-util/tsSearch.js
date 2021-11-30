import { Model as _Model } from "objection";
import { isEmpty } from "../../object/is-empty";
import pick from "lodash/pick";
import { getSearchJoinValue } from "../joinSearch";

/**
 *
 * @param {typeof _Model} Model
 * @returns 
 * @example
class Post extends tsSearch(Model) {
  static tsSearchColumns = ['search','title','description'];
}
Post.query().insert({
  title:'some unique title',
  description:'very useful description'
})
search => tsVectorValueOf('some unique title very useful description')

// before insert
// search value vary depend on how you add new value 

// using $query() to get old value and get properly search value

const oldDoc = Post.query().findById('12313')
oldDoc.$query().patch({
  title:'new title',
})
// search also updated from old description
search => tsVectorValueOf('new title very useful description')


Post.query().findById('12313').patch({title:'new title'})
// search can not be update with old description value
// search has no way know what old value is
search => tsVectorValueOf('new title');

 */
export default function tsSearch(Model = _Model) {
  // deep join search value
  return class TsSearch extends Model {
    // tsSearchColumns = ['search','title','description']
    static get tsSearchColumns() {
      return [];
    }

    async $beforeInsert(context) {
      await super.$beforeInsert(context);
      const { searchKey, otherKeys } = getSearchObjKeys(this.constructor.tsSearchColumns);
      if (isEmpty(searchKey) || isEmpty(otherKeys)) return;
      const searchValue = await getSearchJoinValue(this, otherKeys);

      const whatIsThis = this;
      console.log(`from tsSearch`, { whatIsThis, context, searchValue });

      this[searchKey] = searchValue;
    }

    async $beforeUpdate(opt, context) {
      await super.$beforeUpdate(opt, context);
      const { searchKey, otherKeys } = getSearchObjKeys(this.constructor.tsSearchColumns);
      if (isEmpty(searchKey) || isEmpty(otherKeys)) return;

      const oldDoc = pick(opt.old || {}, otherKeys);
      const newDoc = pick(this, otherKeys);
      const searchValue = await getSearchJoinValue({ ...oldDoc, ...newDoc }, otherKeys);

      const whatIsThis = this;
      console.log(`from tsSearch`, { whatIsThis, opt, context, searchValue });

      this[searchKey] = searchValue;
    }
  };
}

const getSearchObjKeys = (searchArr = []) => {
  const searchKey = searchArr[0] || "";
  const otherKeys = searchArr.slice(1);
  return { searchKey, otherKeys };
};
