# 📘 Node.js Learning Summary (Day 1–15)

This markdown file summarizes all key topics learned from Day 1 to Day 15 of your Node.js journey.

---

## ✅ **Day 1–10 (Basics Recap)**

### 📂 Modules
- Built-in modules: `fs`, `path`, `os`
- Importing modules using `require()`
- Creating custom modules

### 📁 File System
- `fs.readFile`, `fs.writeFile`, `fs.appendFile`
- Sync vs Async methods
- Working with JSON files

### 🌐 HTTP Module
- Creating a basic server using `http.createServer`
- Handling routes manually (`if-else`, `url.parse()`)

### 📦 NPM & Package.json
- Installing local/global packages
- `npm init`, dependencies vs devDependencies

### 📄 Express.js Basics
- Creating REST APIs using Express
- Middleware and routing

---

## ✅ **Day 11–12 (Intermediate)**

### 🧠 Middleware in Express
- Custom middleware
- Built-in middleware like `express.json()`

### 🔄 RESTful API Methods
- GET, POST, PUT, DELETE
- Route Parameters and Query Strings

---

## ✅ **Day 13: Authentication Practice**

- Created a mini project focused on **authentication & testing**
- Topics explored:
  - JWT token basics
  - Password hashing (e.g., bcrypt)
  - Login, Register, and protected routes

---

## ✅ **Day 14: Streams & Buffers (Planned)**

- Marked to be learned (🔸)
- To be covered next:
  - `fs.createReadStream`, `fs.createWriteStream`
  - Handling large files efficiently

---

## ✅ **Day 15: Deep Dive - Error Handling**

### 🧱 Sync Error Handling
```js
try {
  // code that might throw error
} catch (err) {
  console.error("Caught error:", err.message);
}
```

### 🌐 Async Error Handling (Promises & async/await)
```js
fs.promises.readFile("nonexistent.txt")
  .catch(err => console.error("Caught async error:", err.message));
```

### ⚠️ Custom Errors
```js
class InsufficientFundsError extends Error {
  constructor(message) {
    super(message);
    this.name = "InsufficientFundsError";
  }
}
```

### 🏦 Example: Bank Withdrawal App
```js
try {
  const balance = 5000;
  const withdraw = 800;
  if (withdraw > balance) throw new InsufficientFundsError("Too much!");
  console.log("✅ Withdrawal Success");
} catch (err) {
  console.error(`❌ ${err.name}: ${err.message}`);
}
```

### 🌍 Global Error Events
- `process.on("uncaughtException", callback)`
- `process.on("unhandledRejection", callback)`

---

## 🔜 Coming up (To Learn):
| Area                      | Status      |
| ------------------------- | ----------- |
| EventEmitter              | 🔸 To Learn |
| Streams & Buffers         | 🔸 To Learn |
| CLI Tools with Node       | 🔸 To Learn |
| Debugging Tools           | 🔸 To Learn |
| Child Process             | 🔸 To Learn |
| Console & Logging         | 🔸 To Learn |

---

> Keep revising daily and building projects using what you learn. You're making great progress! 🚀