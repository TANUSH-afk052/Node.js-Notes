// console_example.js

console.log("✅ This is a normal log");
console.info("ℹ️ Info log");
console.warn("⚠️ Warning log");
console.error("❌ Error log");

const user = {
  name: "Tanush",
  age: 24,
  skills: ["Node.js", "React", "Excel"]
};

console.table(user);  // Displays object in a table
console.dir(user, { depth: null }); // Shows object properties

function demoTrace() {
  console.trace("Trace log from here");
}
demoTrace();

console.time("Loop Timer");
for (let i = 0; i < 1000000; i++) {} // Simulate work
console.timeEnd("Loop Timer");
