# 📘 Node.js GitHub Profile Checker — Project Notes (as for now)

## 🧠 Project Idea

A simple yet functional full-stack app that allows users to enter a GitHub username and fetches:

* User profile details
* Repositories
* Starred repositories
* GitHub rate limit info

Built using **Node.js + Express** on the backend and **HTML/CSS/JS** on the frontend. Deployed on **Render**.

---

## 📂 Project Structure

```
GithubProfile/
├── public/
│   ├── index.html       # Frontend UI
│   ├── script.js        # Client-side logic
│   └── style.css        # Styling and themes
├── server.js            # Express server with API routes
├── package.json         # Dependencies and scripts
└── README.md            # Project overview
```

---

## 🚀 Current Features

### ✅ API Endpoints (in `server.js`)

* `/api/github/:username` → Fetch basic GitHub profile
* `/api/github/:username/repos` → Fetch user repos
* `/api/github/:username/starred` → Fetch starred repos
* `/api/github/rate-limit` → Show GitHub API rate limit info
* `/api/search/users?q=USERNAME` → Search GitHub users

### ✅ Frontend

* Input field to enter GitHub username
* Fetch and display user info, repos, and starred repos
* Themes: 🌊 Water (default), 🔥 Fire, 🌪️ Windy (user can toggle)just colors nothing else
* Responsive layout with animated background (depending on theme)

### ✅ Deployment

* Hosted live at: [https://githubprofile-hb6t.onrender.com]
* Uses built-in fetch (Node v18+)

---

## 🔧 Technical Notes

* `express` for routing
* `express.static()` serves frontend
* `node-fetch` not required for Node 18+
* Rate limiting via `express-rate-limit` planned
* Basic error handling (`User not found`, `Repo not found`, etc.)

---

## 📌 Future Enhancements

* Add user score or gamification (based on profile stats)
* Include more user stats: contribution graph, languages used
* Add loading animation while fetching
* Improve UI/UX and mobile styling
* Save last searched users (localStorage)

---

## ✍️ Author Notes

I'm building this as a learning + practical deployment project helping me :

* Learn Express.js deeply
* Understand client-server interaction
* Deploy real projects
* Improve my debugging and hosting skills

More updates soon as the project Updates! 💻
