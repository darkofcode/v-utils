import { getNextValue } from "../sequence-next-value";
import { Model as _Model } from "objection";

/**
 *
 * @param {typeof _Model} Model
 * @returns
 */
export default function setSeqId(Model) {
  return class SetSeqId extends Model {
    // seqId could be string or array
    // if array [seqId,idKey,pre]
    // default idKey = "id"
    // ex: seqId = "acc_payable_id_seq";
    // ex: seqId = []
    static seqId() {
      return "";
    }

    async $beforeInsert(context) {
      await super.$beforeInsert(context);

      if (this.constructor.seqId) {
        const [_, idKey] = getSeqId(this.constructor);

        // check if id value not existed
        // this is context aka req.body
        if (!this[idKey]) {
          const nextId = await getNextId(this.constructor);
          this[idKey] = nextId;
        }
      }
    }
  };
}

const getNextId = async (self) => {
  const [seqId, idKey, pre] = getSeqId(self);
  return await getNextValue(seqId, pre);
};

const getSeqId = (self) => {
  let seqId = self.seqId;
  let idKey = "id";
  let pre;
  if (Array.isArray(seqId)) {
    [seqId, idKey = idKey, pre = pre] = seqId;
  }
  return [seqId, idKey, pre];
};
