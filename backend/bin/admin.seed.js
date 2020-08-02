const User = require("../models/User.model");
const mongoose = require("mongoose");

const admin = [
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
        role: { type: String, enum: ["admin", "notadmin"], default: "notadmin" },
      },
      {
        timestamps: true,
        versionKey: false,
      }