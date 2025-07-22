
# Node.js Learning - Day 4

## 🧠 Topics Covered

- **Basic Server with Node.js**
- **Creating and Using Routes**
- **Query Parameters in URLs**
- **HTTP Status Codes**
- **Express.js - Introduction and Usecases**

---

## 🚀 Summary

Today we focused on creating a basic HTTP server using native `http` module and then shifted to `Express.js`, a lightweight and fast Node.js framework.

---

## 📦 Express.js – What & Why?

### What is Express.js?

- Express is a **minimal and flexible Node.js web application framework**.
- It provides robust features for building single-page, multipage, and hybrid web applications.
- Makes it easier to handle routes, requests, and middleware logic.

### Why not just Node.js?

- Node.js is low-level and requires manual handling of routing, headers, responses, etc.
- Express provides abstraction, middleware support, and routing features out of the box.

---

## 📄 Files Created

### 1. `server.js`(a basic server where using route parameters user can get github user info https:/localhost 3000:/github/octocat or Tanush-afk052)

```js
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

OUTPUT
{"login":"TANUSH-afk052","id":214317165,"node_id":"U_kgDODMY4bQ","avatar_url":"https://avatars.githubusercontent.com/u/214317165?v=4","gravatar_id":"","url":"https://api.github.com/users/TANUSH-afk052","html_url":"https://github.com/TANUSH-afk052","followers_url":"https://api.github.com/users/TANUSH-afk052/followers","following_url":"https://api.github.com/users/TANUSH-afk052/following{/other_user}","gists_url":"https://api.github.com/users/TANUSH-afk052/gists{/gist_id}","starred_url":"https://api.github.com/users/TANUSH-afk052/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/TANUSH-afk052/subscriptions","organizations_url":"https://api.github.com/users/TANUSH-afk052/orgs","repos_url":"https://api.github.com/users/TANUSH-afk052/repos","events_url":"https://api.github.com/users/TANUSH-afk052/events{/privacy}","received_events_url":"https://api.github.com/users/TANUSH-afk052/received_events","type":"User","user_view_type":"public","site_admin":false,"name":"Tanush Vishwakarma","company":null,"blog":"","location":null,"email":null,"hireable":null,"bio":"Bachelors Of Commerce\r\nStudent at P.M. College of Excellence\r\nSouth Civil Lines, Jabalpur, M.P ","twitter_username":null,"public_repos":18,"public_gists":0,"followers":0,"following":1,"created_at":"2025-06-01T03:42:20Z","updated_at":"2025-07-14T04:43:00Z"}
```

---

### 2. `route.js`

```js
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

```

---

### 3. `queryparameters.js`

```js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());

app.get('/search', (req, res) => {
  const { term } = req.query;
  res.send(`You searched for: ${term}`);
});

app.listen(PORT, () => {
  console.log(`✅ Query Params server running at http://localhost:${PORT}`);
});
//try /search?term=thanos  ? this is where query param is used
//output you searched for thanos
```

---

## ❓ Questions & Answers

**Q1: What is the purpose of the `url` module?**  
A1: It parses the URL string and allows access to query parameters and pathnames.

**Q2: What is the port number in Node.js server?**  
A2: It's the number used to listen to incoming HTTP requests (e.g., `3000`).

**Q3: How does Express.js help with routing?**  
A3: Express simplifies route definition and allows middleware usage easily.

---
