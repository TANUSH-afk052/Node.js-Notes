
# Day 2 – Node.js Learning Notes 🚀


## 📁 Files Created

```
Day2/
├── app.js
├── fileops.js
├── input.js
├── math.js
├── note.txt
└── server.js
```

---

## 1️⃣ `input.js` – User Input via Terminal

```js
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What's your name? ", (answer) => {
  console.log(`Hello, ${answer}!`);
  rl.close();
});
```

🛠️ Run:  
```bash
node input.js
```

---

## 2️⃣ `server.js` – Creating a Basic HTTP Server

```js
const http = require('http');

const server = http.createServer((req, res) => {
  res.write('Welcome to your Node.js server!');
  res.end();
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
```

🛠️ Run:  
```bash
node server.js
```

🌐 Open browser: `http://localhost:3000`

---

## 3️⃣ `fileops.js` – File System Operations (FS Module)

```js
const fs = require('fs');

// Write to a file
fs.writeFileSync('note.txt', 'This file was created with fs.writeFileSync');

// Read file
const content = fs.readFileSync('note.txt', 'utf8');
console.log(content);
```

---

## 4️⃣ `math.js` – Custom Functions Example

```js
function add(a, b) {
  return a + b;
}

function square(n) {
  return n * n;
}

console.log(add(5, 3));     // 8
console.log(square(6));     // 36
```

---

## 5️⃣ `app.js` – Bringing It Together

```js
const os = require('os');

console.log("Platform:", os.platform());
console.log("Arch:", os.arch());
```

---

## 📌 Concepts Covered

- `readline` for input
- `http` for servers
- `fs` for file I/O
- `os` for system info
- Simple module organization

---


