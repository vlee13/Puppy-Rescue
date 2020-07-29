const { Schema, model } = require("mongoose");

const dogSchema = new Schema({
  name: String,
  shelterID: String,
  age: Number,
  weight: Number,
  description: String,
  location: String,
  votes: { type: Number, default: 0 },
  image: String,
  foster: { type: Boolean, default: false },
});

module.exports = model("Dog", dogSchema);
