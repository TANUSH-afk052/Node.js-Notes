const path = require('path');

console.log('Current file:', __filename);
console.log('Current directory:', __dirname);

const customPath = path.join(__dirname, 'files', 'demo.json');
console.log('Joined path:', customPath);

console.log('Extension:', path.extname('demo.json')); 
