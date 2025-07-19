# 📒 Day 1 – Node.js Notes (By Me)

## 💡 What I Learned Today

### 🔹 What is Node.js?
- Node.js lets us run JavaScript **outside the browser**, like in a terminal.
- It’s built using Chrome’s V8 engine.
- Mostly used for backend (server-side) stuff.
- Great for real-time apps like chat and games.

---

### 🔹 Installed Node.js and npm
- Downloaded from [nodejs.org](https://nodejs.org)
- It installed two things:
  - `node`: runs `.js` files
  - `npm`: helps install packages/libraries

---

### 🔹 My First Program
Created a file called `hello.js` with this code:
```js
console.log("Hello, Node.js!");
```
Ran it using terminal:
```bash
node hello.js
```
It printed: `Hello, Node.js!`

---

### 🔹 REPL (Read-Eval-Print Loop)
- Typed `node` in terminal → Entered REPL
- Practiced small JavaScript code directly:
```bash
> 2 + 5
7
> "Hello".toUpperCase()
'HELLO'
```

---

### 🔹 Built-in Modules (Like fs)
Used `fs` to write into a file:
```js
const fs = require('fs');
fs.writeFileSync('notes.txt', 'Learning Node.js Day 1!');
```

It created a file `notes.txt` with my text in it.

---

### 🔹 My Own Module
Created `greet.js`:
```js
function greet(name) {
  console.log("Hello, " + name);
}
module.exports = greet;
```

Used it in `app.js`:
```js
const greet = require('./greet');
greet("Thanos");
```

---

### 🔹 Installed a Package using npm
1. Initialized my project:
```bash
npm init -y
```
2. Installed `chalk`:
```bash
npm install chalk
```
3. Used it like this:
```js
const chalk = require('chalk');
console.log(chalk.green("Day 1 Done!"));
```

---

## ✅ Summary of Day 1

| Thing | What I Did |
|------|-------------|
| ✅ Node.js | Installed it and learned what it is |
| ✅ Terminal | Ran JS files using `node` |
| ✅ REPL | Practiced JS in interactive shell |
| ✅ Modules | Used built-in and custom ones |
| ✅ npm | Installed and used a package |

---

## 🚀 What's Next?
- Learn about Express.js
- Create my first Node.js web server
- Explore routes and responses
