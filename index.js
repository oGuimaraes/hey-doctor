const express = require("express");

const server = express();

// Query params = ?teste=1
// Route params = /users/1
// Request body = { }

const users = ["Otávio", "Cleiton", "Rasta", "Cabeça", "Gelo"];

server.get("/users/:index", (req, res) => {
  const { index } = req.params;
  return res.json(users[index]);
});

server.listen(3000);
