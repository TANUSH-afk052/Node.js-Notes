const express = require('express');
const router = express.Router();

// Sample in-memory array as data store
let posts = [
  { id: 1, title: 'First Post', content: 'Hello Pyhton!' },
  { id: 2, title: 'Second Post', content: 'Another Node.js' }
];

// 📥 Create a post
router.post('/', (req, res) => {
  const { title, content } = req.body;
  const newPost = {
    id: posts.length + 1,
    title,
    content
  };
  posts.push(newPost);
  res.status(201).json(newPost);
});

// 📤 Read all posts
router.get('/', (req, res) => {
  res.json(posts);
});

// 📄 Read a single post
router.get('/:id', (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).json({ error: 'Post not found' });
  res.json(post);
});

// ✏️ Update a post
router.put('/:id', (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).json({ error: 'Post not found' });

  const { title, content } = req.body;
  post.title = title || post.title;
  post.content = content || post.content;

  res.json(post);
});

// ❌ Delete a post
router.delete('/:id', (req, res) => {
  const postIndex = posts.findIndex(p => p.id === parseInt(req.params.id));
  if (postIndex === -1) return res.status(404).json({ error: 'Post not found' });

  const deletedPost = posts.splice(postIndex, 1);
  res.json(deletedPost[0]);
});

module.exports = router;
