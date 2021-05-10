import User from "../../models/user";

// findUser is a doc
const findUser = User.findById(id);

//up1 mongodb return nModified:1,ok:true
const up1 = await findUser.updateOne({ name: "" }, { runValidators: true });

//up2 new updated document
const up2 = await User.findOneAndUpdate({ id: "" }, { name: "" }, { runValidators: true, new: true });

//up1 mongodb return nModified:1,ok:true
const up3 = await User.updateOne({ _id: "" }, { name: "" }, { runValidators: true });

// add item collection to first of array
// push item to array of doc with position 0
// update mongodb return nModified:1,ok:true
const update = await findUser.updateOne(
  { $push: { companies: { $each: [{ id, name }], $position: 0 } } },
  { runValidators: true }
);

// remove collection item from array
// update mongodb return nModified:1,ok:true
const update = await findUser.updateOne({ $pull: { companies: { id: companyId } } });
