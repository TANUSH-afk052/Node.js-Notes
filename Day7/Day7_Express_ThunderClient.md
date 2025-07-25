
# 📘 Day 7 – Express.js API Setup & Thunder Client Testing

## ✅ Goal:
Build a simple Express server with one route (`/posts`) that supports:
- `GET` → to retrieve all posts
- `POST` → to create a new post

---

## 🔧 Project Structure

```
project-folder/
│
├── server.js          # Main server file
├── routes/
│   └── posts.js      # All /posts routes here
|__ data/ 
    └──posts.json     # Mock Data
```

---

## 1️⃣ server.js (Main Server File)

```js
const express = require('express');
const app = express();
const postsRoute = require('./routes/posts');

// Middleware to parse JSON
app.use(express.json());

// Use postsRoute when visiting /posts
app.use('/posts', postsRoute);

// Start the server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
```

---

## 2️⃣ routes/posts.js (Route Handler)

```js
const express = require('express');
const router = express.Router();

let posts = []; // In-memory array to store posts

// POST /posts
router.post('/', (req, res) => {
  const { title, content } = req.body;
  const newPost = { id: posts.length + 1, title, content };
  posts.push(newPost);
  res.status(201).json(newPost);
});

// GET /posts
router.get('/', (req, res) => {
  res.json(posts);
});

module.exports = router;
```

---

## ⚙️ How It Works

- You start the server by running:
  ```bash
  node server.js
  ```
  Server will be available at `http://localhost:3000`.

- Routes available:
  - `POST /posts` – Add a post
  - `GET /posts` – Get all posts

---

## 🚀 Thunder Client Usage

### ➕ Create a Post

- **Method**: `POST`
- **URL**: `http://localhost:3000/posts`
- **Body (JSON)**:
```json
{
  "title": "My First Post",
  "content": "This is added via Thunder Client"
}
```

### 📥 Get All Posts

- **Method**: `GET`
- **URL**: `http://localhost:3000/posts`

---

## 📤 Example Output

### ✅ POST /posts Response

```json
{
  "id": 1,
  "title": "My First Post",
  "content": "This is added via Thunder Client"
}
```

---

### 📋 GET /posts Response

```json
[
  {
    "id": 1,
    "title": "My First Post",
    "content": "This is added via Thunder Client"
  }
]
```

---

