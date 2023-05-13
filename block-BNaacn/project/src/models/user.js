const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let user = Schema(
  {
    name: String,
    email: {
      type: String,
      lowercase: true,
    },
    age: {
      type: Number,
      default: 0,
    },
    password: {
      type: String,
      minLength: 5,
    },
    createdAt: {
      type: Date,
      default: new Date(),
    },
    favourites: [String],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", user);
