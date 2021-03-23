require("dotenv").config();

const express = require("express");
const consign = require("consign");

const app = express();

app.set("view engine", "ejs");
app.set("views", "./app/views");

app.use(express.urlencoded({ extended: true }));

consign()
  .include("app/routes")
  .then("config/database.js")
  .then("app/models")
  .into(app);

module.exports = app;
