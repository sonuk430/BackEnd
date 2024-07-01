const express = require("express");
const jokes = require("./data.js");
const app = express();

const port = 8000;

app.get("/jokes", (req, res) => {
  const rendomJokesIndex = Math.floor(Math.random() * jokes.length);
  return res.status(200).json(jokes[rendomJokesIndex]);
});

app.get("/joke/:jokeId", (req, res) => {
  const jokeId = req.params.jokeId;
  // validation
  if (isNaN(Number(jokeId)) || Number(jokeId) < 0) {
    return res.status(400).json({ error: "Invalid joke id" });
  }

  return res.status(200).json(jokes.find((joke) => joke.id == jokeId));
});

app.listen(port, () => {
  console.log(`server running on port number:- ${port}`);
});
