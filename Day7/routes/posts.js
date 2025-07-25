const express = require('express');
const router = express.Router();

let posts = [];

router.post('/', (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res.status(400).json({ error: 'Title and content are required' });
  }

  const newPost = { id: posts.length + 1, title, content };
  posts.push(newPost);

  res.status(201).json(newPost);
});

// Add this if you want to GET all posts
router.get('/', (req, res) => {
  res.json(posts);
});

module.exports = router;
