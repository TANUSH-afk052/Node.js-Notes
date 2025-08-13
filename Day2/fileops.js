const fs = require('fs');

// -------------------
// 1. Write file
// -------------------
fs.writeFileSync('note.txt', 'Hello from Node.js');
console.log('✅ File created and written.');

// -------------------
// 2. Read file (Sync)
// -------------------
const data = fs.readFileSync('note.txt', 'utf8');
console.log('\n--- Sync Read ---');
console.log(data);

// -------------------
// 3. Append text
// -------------------
fs.appendFileSync('note.txt', '\nThis is appended text!');
console.log('\n✅ Text appended to file.');

// -------------------
// 4. Read file (Async)
// -------------------
fs.readFile('note.txt', 'utf8', (err, asyncData) => {
  if (err) throw err;
  console.log('\n--- Async Read ---');
  console.log(asyncData);
});

// -------------------
// 5. Read file (Sync, updated)
// -------------------
const data2 = fs.readFileSync('note.txt', 'utf8');
console.log('\n--- Sync Read After Append ---');
console.log(data2);

// -------------------
// 6. Read file as Buffer
// -------------------
const rawData = fs.readFileSync('note.txt');
console.log('\n--- Raw Buffer ---');
console.log(rawData);
console.log('\n--- Buffer Decoded (UTF-8) ---');
console.log(rawData.toString('utf8'));

// -------------------
// 7. UTF-8 & UTF-16 Example
// -------------------
fs.writeFileSync('utf8file.txt', 'Hello 😄', 'utf8');
fs.writeFileSync('utf16file.txt', 'Hello 😄', 'utf16le');

console.log('\n✅ UTF-8 and UTF-16 files written.');

// Read UTF-16 file directly
const utf16Text = fs.readFileSync('utf16file.txt', 'utf16le');
console.log('\n--- UTF-16 Decoded ---');
console.log(utf16Text);
