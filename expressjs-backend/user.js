const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },
    pwd: {
      type: String,
      required: true,
      trim: true,
    },
    token: {
      type: String,
      required: false
    },
    admin: {
      type: Boolean,
      required: true
    }
  },
  { collection: "users_list" }
);

const User = mongoose.model("User", UserSchema);

module.exports = { User, UserSchema };