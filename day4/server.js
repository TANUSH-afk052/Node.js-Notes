import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Welcome to the GitHub User API!');
});

app.get('/github/:username', async (req, res) => {
  const username = req.params.username;
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (!response.ok) {
      console.error(`GitHub API error: ${response.status}`);
      return res.status(response.status).json({ error: 'GitHub user not found or API error' });
    }
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error('Fetch failed:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
