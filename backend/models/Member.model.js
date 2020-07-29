const { Schema, model } = require("mongoose");

const memberSchema = new Schema({
  fullname: String,
  email: String,
  password: String,
  voted: Boolean, //one vote
  cc: {
    number: Number,
    exp: Number,
    cvv: Number,
    saved: Boolean,
  },
  login: Boolean,
});

module.exports = model("Member", memberSchema);
