const express = require("express");

const app = express();

app.use(function (req, res, next) {
  console.log("middleware chala");
  next();
});

app.get("/", function (req, res) {
  res.send("champion mere bhai");
});

app.listen(3000);
