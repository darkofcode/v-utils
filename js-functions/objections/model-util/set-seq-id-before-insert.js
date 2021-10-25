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
    static get seqId() {
      return "";
    }

    static async getNextId() {
      const [seqId, idKey, pre] = this._1611337397889_getSeqId();
      return await getNextValue(seqId, pre);
    }
    static _1611337397889_getSeqId() {
      let seqId = this.seqId;
      let idKey = "id";
      let pre;
      if (Array.isArray(seqId)) {
        [seqId, idKey = idKey, pre = pre] = seqId;
      }
      return [seqId, idKey, pre];
    }

    async $beforeInsert(context) {
      await super.$beforeInsert(context);

      if (this.constructor.seqId) {
        const [_, idKey] = this.constructor._1611337397889_getSeqId();

        // check if id value not existed
        // this is context aka req.body
        if (!this[idKey]) {
          const nextId = await this.constructor.getNextId();
          this[idKey] = nextId;
        }
      }
    }
  };
}
