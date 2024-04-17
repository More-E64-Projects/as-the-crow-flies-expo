require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

const mongoUrl = process.env.DB_URL;

//const createRouter = require("./create_router.js");

mongoose
  .connect(mongoUrl)
  .then(() => {
    console.log("Database connected");
  })
  .catch(console.err);

app.get("/", (req, res) => {
  res.send({ status: "Server started" }).catch((err) => {
    console.error(err);
    res.status(500);
    res.json({ status: 500, error: err });
  });
});

app.listen(9000, function () {
  console.log(`Listening on port ${this.address().port}`);
});

module.exports = app;
