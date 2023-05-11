const mongoose = require("mongoose");

const article = new mongoose.Schema({
  title: String,
  data: Date,
  tags: Array,
});
