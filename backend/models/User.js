const { Schema, model } = require("mongoose");
const PLM = require("passport-local-mongoose");

const userSchema = new Schema(
  {
    email: String,
    name: String,
    googleId: String,
    imageUrl: String,

    votes: {
      type: Number,
      default: 3,
    },
    cc: {
      number: Number,
      exp: Number,
      cvv: Number,
      saved: Boolean,
    },
    login: Boolean,
    role: { type: String, enum: ["admin", "notadmin"], default: "admin" },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

userSchema.plugin(PLM, { usernameField: "email" });

module.exports = model("User", userSchema);
