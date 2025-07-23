
---

### 📁 `PROJECT_STRUCTURE.md`
```md
# Project Structure: node-blog-api

node-blog-api/
├── app.js # Main server file
├── posts.json # Local JSON file to store blog posts
└── routes/
└── posts.js # Routes to handle all /api/posts operations


## Details:

### `app.js`
- Imports express and routes
- Sets up middleware `express.json()`
- Mounts `/api/posts` route
- Starts server

### `routes/posts.js`
- Implements:
  - `GET /` - List all posts
  - `GET /:id` - Get post by ID
  - `POST /` - Create new post
  - `PUT /:id` - Update post
  - `DELETE /:id` - Remove post
- Uses `fs` to read/write `posts.json`

### `posts.json`
- Simple JSON array of objects (posts)
- Each post has:
  - `id` (timestamp-based)
  - `title`
  - `content`

---

will  use this as a reference to build larger APIs or connect this to a database like MongoDB later.
