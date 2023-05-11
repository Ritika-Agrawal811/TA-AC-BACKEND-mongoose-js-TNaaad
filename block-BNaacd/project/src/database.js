const mongoose = require("mongoose");

const server = "127.0.0.1:27017";
const database = "sample";

class Database {
  constructor() {
    this._connect();
  }

  _connect() {
    mongoose
      .connect(`mongodb://${server}/${database}`)
      .then(() => console.log("Database connected successfully"))
      .catch((err) => console.error(err));
  }
}

module.exports = new Database();
