// global config to run validator
import mongoose from "mongoose";

function setRunValidators() {
  this.setOptions({ runValidators: true });
}
module.exports = async () => {
  mongoose.plugin((schema) => {
    schema.pre("findOneAndUpdate", setRunValidators);
    schema.pre("updateMany", setRunValidators);
    schema.pre("updateOne", setRunValidators);
    schema.pre("update", setRunValidators);
  });

  const connect = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
  // console.trace(`connect to mongodb: ${connect.connection.host}`);
};
