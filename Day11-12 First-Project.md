# 📅 Day 11–12: Node.js Project – GitHub Profile Checker 🚀

## ⭐ Project Highlight

On Day 11 and 12, I built and polished my **first full-stack Node.js project**—a **GitHub Profile Checker** using Node.js, Express, and vanilla frontend. This app lets users:
- Search any GitHub username
- View profile details, public repos, and starred repos
- Switch between fun animated themes (Water, Fire, Windy)
- Track API rate limit and handle errors gracefully
- Deploy live on Render

It was my first real project with the production mindset.

---

## ✂️ Project Setup & Structure

github-profile/
├── public/
│ ├── index.html
│ ├── style.css # Animated themes & mobile styling
│ └── script.js # fetch logic, theme switcher, score calc
├── server.js # Express API server (import-style, Node 18+)
├── package.json # metadata, dependencies, scripts
└── README.md # Project overview & live demo link

---

## 🛠️ Key Technologies & Features

- **Express.js** backend with modular routes:
  - `/api/github/:username` → Profile data  
  - `/api/github/:username/repos` → Public repos  
  - `/api/github/:username/starred` → Starred repos  
  - `/api/github/rate-limit` → API status  
  - Fallback route (`*`) to serve `index.html` for frontend routing  

- **Modern ES module syntax**:
  - Using `import` statements  
  - Included `"type": "module"` in `package.json`

- **Frontend features**:
  - Fetch pattern with `async/await`, error handling, alerts
  - Theme system (dropdown )
  - Animated CSS backgrounds per theme
  - Mobile-friendly layout

- **Security & Performance**:
  - `helmet`, `cors`, `compression` middlewares
  - `express-rate-limit` to prevent API abuse

---

## ✅ What I Accomplished (Tasks Completed)

- 🚚 Set up Express server and API endpoints
- 🎨 Implemented animated themes and theme-switcher
- 🧠 Managed API fetching, user input validation, and error states
- 💡 Used `fetchGitHub()` helper to simplify API calls (with optional token)
- 🚀 Deployed the live app on Render: *githubprofile-hb6t.onrender.com* 🔗 [Check out the live app](https://githubprofile-hb6t.onrender.com/)
- 🧪 Tested on both desktop and mobile, handling cold-start delays and errors

---

## ✔️ Challenges & Learnings

1. Realized `Node.js 18+` supports native `fetch` and `import` syntax  
2. Learned to handle 60-requests/hour GitHub limit and display rate-limit info  
3. Refactored `changeTheme()` to `document.body.classList.add(\`\${theme}-theme\`)` to match CSS  
4. Improved UI: animated gradient backgrounds instead of static colors  

---

## 🎯 What's Next?

- **Add gamification**: score/ranking based on followers, repos, stars  
- **Plot statistics**: language distribution, commit trends (Chart.js)  
- **Add UI polish**: loading spinners, badges, dark/light toggle  


---

> **Lesson**: This project taught me how frontend and backend interact. I now understand Express routing, middleware setup, deployment on Render, and how to add polish and interactivity using plain JS and CSS. It’s a solid debut Node.js app I’m proud of!

---

