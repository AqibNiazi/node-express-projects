const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    unique: true,
    index: true,
  },
  email: String,
  age: Number,
});

module.exports = mongoose.model("User", UserSchema);
