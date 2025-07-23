# Day 5 – Git + Express + File-based API
Revised Day1-4

## ✅ Git
- Created Day 5 folder and pushed it to GitHub.
- Practiced maintaining codebase with modular file structure.
- Folder included:
  - `routes/posts.js`
  - `posts.json`
  -  `app.js`
  -  `.env`
  -  `Readme.md`


## ✅ Express + File-Based CRUD API

### Routes Implemented in `routes/posts.js`:
| Route             | Method | Description            |
|------------------|--------|------------------------|
| `/posts`         | GET    | Get all posts          |
| `/posts/:id`     | GET    | Get post by ID         |
| `/posts`         | POST   | Add a new post         |
| `/posts/:id`     | PUT    | Update a post by ID    |
| `/posts/:id`     | DELETE | Delete a post by ID    |

### Tools & Methods Used:
- **File System (fs)**
  - `fs.readFileSync()` – Read data from `posts.json`
  - `fs.writeFileSync()` – Write updated data back to file
- **Request Handling**
  - `req.params.id` – Extract ID from route
  - `req.body` – Extract data from request body
- **ID Generation**
  - Used `Date.now()` to generate unique post ID.
- ** CRUD**
  - Create  Read  Update  Delete

## 📁 Example `posts.json`
```json
[
  {
    "id": 1721735432100,
    "title": "Hello Post",
    "content": "This is my first file-based post."
  }
]
...