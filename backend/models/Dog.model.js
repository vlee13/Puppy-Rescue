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
});

module.exports = model("Dog", dogSchema);

// cant grab url for images the site does not allow. can i grab them locally in image folder?