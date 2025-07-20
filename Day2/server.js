const http = require('http');

const server = http.createServer((req, res) => {
  res.write('Welcome to your Node.js server!');
  res.end();
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
