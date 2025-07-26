
# 📘 Node.js Day 8 Summary - W3Schools Topics

## ✅ Topics Covered

### 1. 🔹 Node Intro
- Node.js is a **JavaScript runtime** built on **Chrome's V8 engine**.
- Allows running JS code **outside the browser**.
- Built for **asynchronous**, **event-driven** apps (perfect for servers).

---

### 2. 🔹 Node Get Started
- Run `.js` files using:  
  ```bash
  node filename.js
  ````

* Print to console:

  ```js
  console.log('Hello Node');
  ```

---

### 3. 🔹 Node JS Requirements

* Know:

  * Basic JavaScript
  * Terminal usage
  * File/directory handling
  * Using code editors (like VS Code)

---

### 4. 🔹 Node.js vs Browser

| Feature            | Node.js     | Browser         |
| ------------------ | ----------- | --------------- |
| File System Access | ✅ Yes       | ❌ No            |
| JS Engine          | V8          | V8              |
| Global Object      | `global`    | `window`        |
| Node APIs          | ✅ Available | ❌ Not available |

---

### 5. 🔹 Node Command Line

* Node REPL:

  ```bash
  node
  ```
* Try expressions like `2 + 2`
* Exit with `.exit` or `Ctrl+C` twice

---

### 6. 🔹 Node V8 Engine

* V8 compiles JS to machine code
* Fast and optimized
* Also powers Chrome

---

### 7. 🔹 Node Architecture

* **Single-threaded**, **non-blocking I/O**
* Components:

  * Call Stack
  * Node APIs
  * Callback Queue
  * Event Loop

---

### 8. 🔹 Node Event Loop

* Core of async behavior in Node.js
* Manages operations like:

  * `setTimeout()`
  * Promises
  * `fs.readFile()`

#### Event Loop Phases:

* **Timers** → for `setTimeout()`
* **I/O callbacks**
* **Idle, prepare**
* **Poll** → retrieve new I/O events
* **Check** → for `setImmediate()`
* **Close callbacks**

> Event loop ensures callbacks run when the call stack is empty.

---

## 🧠 Practice Status

✅ Completed practice on all the above topics up to **Node Event Loop** using W3Schools tutorials.

---

