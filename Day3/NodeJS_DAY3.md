
# Node.js - Day 3 📁

Learning Node.js modules and core features by working on individual files.

---

## ✅ File Overview

### 1. `app.js`
- Entry point of the project.
- Includes logic to test or coordinate other modules.

---

### 2. `calc.js` (CLI Calculator)
- A command-line calculator using `process.argv`.
- Supports basic arithmetic like add, subtract, multiply, divide.

Example:
```js
// Run: node calc.js add 5 10
const [,, operation, num1, num2] = process.argv;
const a = parseFloat(num1), b = parseFloat(num2);

switch(operation) {
  case 'add': console.log(a + b); break;
  case 'sub': console.log(a - b); break;
  case 'mul': console.log(a * b); break;
  case 'div': console.log(a / b); break;
  default: console.log("Unknown operation");
}
```

---

### 3. `json-editor.js`
- Reads and modifies JSON data using `fs` module.
- Works with `user.json`.

Example:
```js
const fs = require('fs');

const name = process.argv[2];
const age = process.argv[3];

const user = {
  name,
  age
};

fs.writeFileSync('user.json', JSON.stringify(user, null, 2));
console.log('User saved to user.json');

```

---

### 4. `mathUtils.js`
- Utility functions like `add` used in app.js.

```js
function add(a, b) {
  return a + b;
}

module.exports = { add };

```

---

### 5. `os-info.js`
- Uses Node.js `os` module. (operating system)
- Gets info like:
  - `platform`, `arch`, `totalmem`, `freemem`, `cpus`.

Example:
```js
const os = require('os');
console.log("Platform:", os.platform());
console.log("CPU Info:", os.cpus());
```

---

### 6. `path.js`
- Uses the built-in `path` module.
- Functions like `path.join`.

```js
const path = require('path');

console.log('Current file:', __filename);
console.log('Current directory:', __dirname);

const customPath = path.join(__dirname, 'files', 'demo.json');
console.log('Joined path:', customPath);

console.log('Extension:', path.extname('demo.json')); 

```

---

### 7. `read-json.js`
- Reads and logs data from `user.json`.

```js
const fs = require('fs');

const buffer = fs.readFileSync('user.json');
const data = JSON.parse(buffer.toString());

console.log('User Data:', data);

```

---

### 8. `user.json`
- JSON file containing mock user data.
- Used by `read-json.js` and `json-editor.js`.

```json
{
  "name": "Thanos",
  "age": 23
}
```

---

## 📌 Summary

> Practiced using **built-in modules** like `fs`, `os`, and `path`, and worked on multiple JS files to handle JSON, create reusable utility functions, and build small Node.js features.
