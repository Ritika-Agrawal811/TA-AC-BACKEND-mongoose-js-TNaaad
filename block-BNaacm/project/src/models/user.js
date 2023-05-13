const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let user = Schema({
  name: String,
  age: Number,
  adress: {
    house: Number,
    street: String,
    city: String,
    country: String,
  },
});

module.exports = mongoose.model("User", user);
