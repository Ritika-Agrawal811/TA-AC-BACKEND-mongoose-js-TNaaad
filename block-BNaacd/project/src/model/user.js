const mongoose = require("mongoose");

let user = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

let users2 = new mongoose.Schema({
  name: String,
  age: Number,
  email: {
    type: String,
    lowercase: true,
    required: true,
  },
});
