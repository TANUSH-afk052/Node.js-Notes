import express from 'express';
import fs from 'fs';
const router = express.Router();

const file = 'posts.json';

// GET all posts
router.get('/', (req, res) => {
  const data = JSON.parse(fs.readFileSync(file));
  res.json(data);
});

// GET single post by ID
router.get('/:id', (req, res) => {
  const data = JSON.parse(fs.readFileSync(file));
  const post = data.find(p => p.id == req.params.id);
  res.json(post || {});
});

// CREATE new post
router.post('/', (req, res) => {
  const data = JSON.parse(fs.readFileSync(file));
  const newPost = { id: Date.now(), ...req.body };
  data.push(newPost);
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
  res.status(201).json(newPost);
});

// UPDATE post by ID
router.put('/:id', (req, res) => {
  let data = JSON.parse(fs.readFileSync(file));
  const index = data.findIndex(p => p.id == req.params.id);
  if (index === -1) return res.status(404).json({ error: "Post not found" });

  data[index] = { ...data[index], ...req.body };
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
  res.json(data[index]);
});

// DELETE post by ID
router.delete('/:id', (req, res) => {
  let data = JSON.parse(fs.readFileSync(file));
  const filtered = data.filter(p => p.id != req.params.id);

  if (filtered.length === data.length)
    return res.status(404).json({ error: "Post not found" });

  fs.writeFileSync(file, JSON.stringify(filtered, null, 2));
  res.status(204).end();
});

export default router;
