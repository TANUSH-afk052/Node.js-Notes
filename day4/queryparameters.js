const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());

app.get('/search', (req, res) => {
  const { term } = req.query;
  res.send(`You searched for: ${term}`);
});

app.listen(PORT, () => {
  console.log(`✅ Query Params server running at http://localhost:${PORT}`);
});
//try /search?term=thanos
//output you searched for thanos