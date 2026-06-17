const express = require('express');
const app = express();

app.get('/users', (req, res) => {
  res.json([
    { id: 1, name: "Ranjit" },
    { id: 2, name: "John" }
  ]);
});

app.listen(3001, () => console.log("User Service running on 3001"));

