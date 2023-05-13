const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let address = Schema(
  {
    village: String,
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    pin: Number,
    user: Schema.Types.ObjectId,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Address", address);
