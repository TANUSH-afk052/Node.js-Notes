// error_handling.js

import fs from 'fs';


// ✅ Synchronous error handling
try {
  console.log("Reading file...");
  const data = fs.readFileSync("nonexistent.txt", "utf8");
  console.log(data);
} catch (err) {
  console.error("❌ Caught sync error:", err.message);
}

// ✅ Async error handling with callback
fs.readFile("nonexistent.txt", "utf8", (err, data) => {
  if (err) {
    console.error("❌ Caught async error:", err.message);
  } else {
    console.log(data);
  }
});

// ✅ Custom Error Example
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero!");
  }
  return a / b;
}

try {
  const result = divide(10, 0);
  console.log("Result:", result);
} catch (err) {
  console.error("❌ Custom Error:", err.message);
}

// ✅ Catching unhandled promise errors
process.on("unhandledRejection", (reason, promise) => {
  console.error("💥 Unhandled Promise Rejection:", reason);
});

// Triggering unhandled rejection
Promise.reject("Oops! Something failed...");
