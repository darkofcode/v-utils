// mongoose schema
// int min max 2,147,483,647
import mongoose from "mongoose";
const PhoneNo = new mongoose.Schema({
  type: String,
  //must not use arrow fn, as use this
  require: function () {
    return this.name.length > 10;
  },
  // is not build in validator
  // so cant use [true,'why not unique']
  // mongo uniq
  unique: true,
  // no need if unique is true;
  index: true,
  validate: {
    validator: function (v) {
      return /\d{3}-\d{3}-\d{4}/.test(v);
    },
    message: (props) => `${props.value} is not a valid phone number!`,
  },
  dateDue: {
    type: Number,
    get: function (v) {
      if (this.plan.toLocaleLowerCase() === "personal") {
        return 0;
      } else {
        try {
          const nextPayment = new Date(this.nextPayment);
          return differenceInCalendarDays(nextPayment, new Date());
        } catch (error) {
          return 0;
        }
      }
    },
  },
});

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      maxlength: [20, "20 char only"],
      default: Date.now,
      lowercase: true,
      trim: true,
      required: [true, "must have a name"],
      type: { type: String },
    },
    phoneNos: [PhoneNo],
    otherPhoneNos: {
      type: [PhoneNo],
      validate: {
        validator: function (v) {
          return v.length < 10;
        },
        message: (props) => `${props.value} is not a valid phone number!`,
      },
    },
    phoneId: {
      type: mongoose.ObjectId,
      ref: PhoneNo,
    },
  },
  {
    strict: true,
  }
);
UserSchema.path("phoneNo").validate({
  validator: function (v) {
    return v.length < 10;
  },
  message: (props) => `${props.value} is over 10`,
});
export default mongoose.model("User", UserSchema);
