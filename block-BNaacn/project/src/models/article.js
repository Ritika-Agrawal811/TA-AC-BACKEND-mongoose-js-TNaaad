const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let article = Schema({
  title: String,
  description: String,
  tags: [String],
  createdAt: Date,
  likes: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Article", article);
