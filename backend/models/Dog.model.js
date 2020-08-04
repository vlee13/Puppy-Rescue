const { Schema, model } = require("mongoose");

const dogSchema = new Schema({
  name: String,
  shelterID: String,
  age: Number,
  weight: Number,
  descr: String,
  location: String,
  votes: [{ type: Schema.Types.ObjectId, ref: "Member" }],
  image: {
    type: String,
    default:
      "https://images.unsplash.com/photo-1586796304259-5fa44d5e3f71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  },
  status: { type: String, enum: ["available", "fostered", "adopted"] },
});

module.exports = model("Dog", dogSchema);
