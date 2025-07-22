const express = require('express');
const app = express();
const PORT = 3000;

// Route with dynamic parameter
app.get('/user/:username', (req, res) => {
  const username = req.params.username;
  res.send(`Profile for user: ${username}`);
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
