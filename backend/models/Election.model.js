const { Schema, model } = require("mongoose");

const electionSchema = new Schema({
  dogs: [{ type: Schema.Types.ObjectId, ref: "Dog" }],
  startdate: { type: Date, default: Date.now },
  enddate: { type: Date },
  totalvotes: Number,
});

module.exports = model("Election", electionSchema);
