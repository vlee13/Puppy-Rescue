const { Schema, model } = require("mongoose");

const orgSchema = new Schema({
  name: String,
  description: String,
  image: {
    type: String,
    default:
      "https://images.unsplash.com/photo-1594005374167-5fd900fb82c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
  },
  homepage: String,
});

module.exports = model("Org", orgSchema);
