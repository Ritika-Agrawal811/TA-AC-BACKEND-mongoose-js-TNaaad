const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let article = Schema({
  title: String,
  description: String,
  createdAt: Date,
  tags: [String],
});

module.exports = mongoose.model("Article", article);
