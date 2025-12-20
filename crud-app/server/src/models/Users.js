const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  email: String,
  age: Number,
});

const UserModel = mongoose.model("Users", userSchema);

module.exports = UserModel;
