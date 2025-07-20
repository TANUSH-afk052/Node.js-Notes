const fs = require('fs');

// Write file
fs.writeFileSync('note.txt', 'Hello from Node.js');

// Read file
const data = fs.readFileSync('note.txt', 'utf8');
console.log('Read:', data);

// Append text
fs.appendFileSync('note.txt', '\nThis is appended text!');


//output Hello from node.js