const fs = require('fs');

const buffer = fs.readFileSync('user.json');
const data = JSON.parse(buffer.toString());

console.log('User Data:', data);
