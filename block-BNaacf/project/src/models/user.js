const mongoose = require("mongoose");

let user = new mongoose.Schema({
  name: String,
  age: Number,
  favorites: [String],
  marks: [Number],
  address: {
    village: String,
    cty: String,
    state: String,
    pin: Number,
    user: mongoose.Schema.Types.ObjectId,
  },
});
