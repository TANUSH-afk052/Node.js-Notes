
# 📘 Node.js Error Handling – Daily Summary

## ✅ Topics Covered

1. **Synchronous vs Asynchronous Error Handling**
2. **Handling file system (fs) errors**
3. **Creating and throwing Custom Errors**
4. **try...catch usage for sync and async**
5. **Unhandled Promise Rejections**
6. **Practical Bank Withdrawal example with custom error**

---

## 🔹 1. Synchronous Error Handling

```js
try {
  const data = fs.readFileSync('nonexistent.txt', 'utf-8');
  console.log("File read:", data);
} catch (err) {
  console.error("❌ Caught sync error:", err.message);
}
```

- `fs.readFileSync` throws immediately if file doesn't exist.
- Caught using regular `try...catch`.

---

## 🔹 2. Asynchronous Error Handling

```js
fs.promises.readFile('nonexistent.txt', 'utf-8')
  .then(data => console.log("File read:", data))
  .catch(err => console.error("❌ Caught async error:", err.message));
```

- `.catch()` is used for `Promise` rejection.

---

## 🔹 3. Unhandled Promise Rejection (global handler)

```js
process.on('unhandledRejection', (reason, promise) => {
  console.error("💥 Unhandled Promise Rejection:", reason.message);
});
```

---

## 🔹 4. Custom Error Class Example

```js
class DivisionByZeroError extends Error {
  constructor(message) {
    super(message);
    this.name = "DivisionByZeroError";
  }
}

function divide(a, b) {
  if (b === 0) throw new DivisionByZeroError("Cannot divide by zero!");
  return a / b;
}

try {
  const result = divide(10, 0);
  console.log(result);
} catch (err) {
  console.error("❌ Custom Error:", err.message);
}
```

---

## 🔹 5. Bank App Example (Custom Error in Real-World Scenario)

```js
class InsufficientFundsError extends Error {
  constructor(message) {
    super(message);
    this.name = "InsufficientFundsError";
  }
}

function withdraw(balance, amount) {
  if (amount > balance) {
    throw new InsufficientFundsError("Withdrawal amount exceeds account balance.");
  }
  return balance - amount;
}

try {
  const userBalance = 5000;
  const withdrawalAmount = 800;

  console.log(`💰 Current Balance: ₹${userBalance}`);
  console.log(`💸 Attempting Withdrawal: ₹${withdrawalAmount}`);

  const remainingBalance = withdraw(userBalance, withdrawalAmount);
  console.log(`✅ Withdrawal successful! Remaining Balance: ₹${remainingBalance}`);
} catch (error) {
  if (error instanceof InsufficientFundsError) {
    console.error(`❌ Transaction failed: ${error.message}`);
  } else {
    console.error(`💥 Unexpected error: ${error.message}`);
  }
}
```

🟢 **Output:**
```
💰 Current Balance: ₹5000
💸 Attempting Withdrawal: ₹800
✅ Withdrawal successful! Remaining Balance: ₹4200
```

---

## 💡 Summary

| Type            | Technique              | Tool / Method     |
|-----------------|------------------------|-------------------|
| Sync Error      | try...catch            | `fs.readFileSync` |
| Async Error     | `.catch()`             | `fs.promises`     |
| Custom Error    | `class extends Error`  | User-defined      |
| Global Handling | `process.on()`         | Unhandled rejection|

---

## 📦 Extra Note

If you see this warning:
```
Warning: Module type of file is not specified...
```
→ Just add `"type": "module"` in your `package.json`:
```json
{
  "type": "module"
}
```

---

✅ **Status:** All tests working. You deeply understood and implemented both sync and async error handling, along with a real use case!
