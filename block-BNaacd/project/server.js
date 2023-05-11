const express = require("express");
const mongoose = require("./src/database");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome!");
});

app.listen(3000, () => {
  console.log("server listening on port 3000");
});
