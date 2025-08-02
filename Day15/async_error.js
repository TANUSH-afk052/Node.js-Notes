const fs = require("fs/promises");

async function readFileContent(path) {
  try {
    const data = await fs.readFile(path, "utf-8");
    console.log("File Content:", data);
  } catch (err) {
    console.error("❌ Async Error:", err.message);
  }
}

readFileContent("nonexistent.txt");
