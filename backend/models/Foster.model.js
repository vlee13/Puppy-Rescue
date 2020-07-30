const { Schema, model } = require("mongoose");

const fosterSchema = new Schema({
  name: String,
  email: String,
  phone: Number,
  address: String,
  descripton: String,
  startdate: { type: Date, default: Date.now },
});

module.exports = model("Foster", fosterSchema);
