
---

# Node.js Interview Q\&A

## **Basic Node.js Interview Questions & Answers**

### 1. What is Node.js?

**Q:** What is Node.js and why is it used?
**A:** Node.js is a **JavaScript runtime environment** built on Chrome’s **V8 engine**. It allows running JS code **outside** the browser. Used for **server-side applications**, APIs, and tools because it’s **non-blocking** and **event-driven**.

---

### 2. How does Node.js handle asynchronous operations?

**Q:** How does Node.js handle async tasks if it’s single-threaded?
**A:** Node.js uses an **event loop** and **callback queue**. Heavy operations (I/O, network requests) are offloaded to the **libuv** thread pool or OS, and results are handled via callbacks, promises, or async/await.

---

### 3. What are some core modules in Node.js?

**A:** `fs`, `http`, `https`, `path`, `os`, `events`, `crypto`.

---

### 4. How do you create a basic server in Node.js?

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, Node.js!');
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

---

### 5. What is npm?

**A:** Node Package Manager — installs and manages dependencies.

---

### 6. What is the difference between `require()` and `import`?

**A:**

* `require()` → CommonJS
* `import` → ES Modules

---

### 7. How do you handle errors in Node.js?

**A:** Use `try...catch` for async/await, `.catch()` for promises, or pass errors to callbacks.

---

### 8. What is the event emitter in Node.js?

```javascript
const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('greet', name => {
  console.log(`Hello, ${name}!`);
});

emitter.emit('greet', 'Thanos');
```

---

### 9. How do you read and write files in Node.js?

```javascript
const fs = require('fs');
fs.writeFileSync('test.txt', 'Hello, World!');
const data = fs.readFileSync('test.txt', 'utf8');
console.log(data);
```

---

### 10. What is middleware in Express.js?

**A:** Functions that run before the route handler for logging, parsing, authentication, etc.

```javascript
app.use((req, res, next) => {
  console.log('Request received');
  next();
});
```

---

## 🚀 Rapid-Fire Node.js Q\&A

1. What is Node.js?
A JavaScript runtime built on Chrome’s V8 engine for running JS outside the browser.

2. Is Node.js single-threaded?
Yes — but it handles async operations via an event loop & non-blocking I/O.

3. What is npm?
Node Package Manager — installs and manages dependencies.

4. Difference between synchronous & asynchronous in Node.js?
Sync blocks execution until complete; async uses callbacks/promises so code continues.

5. How to create a simple HTTP server?
Use the http module with http.createServer().

6. What are core modules in Node.js?
fs, http, path, os, events, crypto.

7. What is the event loop?
A mechanism that lets Node.js handle multiple tasks asynchronously in a single thread.

8. Difference between require and import?
require = CommonJS; import = ES Modules (modern syntax).

9. How to read a file in Node.js?
fs.readFile() (async) or fs.readFileSync() (sync).

10. How to handle errors in async code?
try...catch for async/await or .catch() for promises.

11. What is middleware in Express?
Functions that run before the route handler for logging, parsing, auth, etc.

12. How to serve static files in Express?
app.use(express.static('public')).

13. What is process in Node.js?
A global object giving info/control over the current Node.js process.

14. What is package.json?
File that stores project metadata and dependencies.

15. What is the difference between exec() and spawn()?
exec buffers output (good for small data); spawn streams output (good for large data).

16. How to create an event in Node.js?
Use EventEmitter from the events module.

17. What is a stream in Node.js?
Objects for reading/writing data in chunks (types: readable, writable, duplex, transform).

18. How to handle environment variables?
Use process.env or a .env file with dotenv package.

19. Difference between blocking and non-blocking code?
Blocking waits for completion; non-blocking executes in background.

20. How to make an API call in Node.js?
Use https module or libraries like axios / node-fetch.

---


