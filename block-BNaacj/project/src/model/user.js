const mongoose = require("mongoose");

let user = mongoose.Schema({
  name: String,
  age: Number,
  password: {
    type: String,
    minLength: 5,
    maxLength: 15,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});
