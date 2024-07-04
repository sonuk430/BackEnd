const express = require("express");
const imageUrls = require("./data.js");
const app = express();
const posrt = 8000;

app.get("/imageUrls", (req, res) => {
  const randomImageIndex = Math.floor(Math.random() * imageUrls.length);
  return res.status(200).json(imageUrls[randomImageIndex]);
});

app.listen(posrt, () => {
  console.log(`server running on port number:- ${posrt}`);
});

//  url for API Call:=> http://localhost:8000/imageUrls
