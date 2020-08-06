const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  email: String,
  name: String,
  message: String,
});

module.exports = model("User", userSchema);
