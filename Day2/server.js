const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');

  // Serve different pages based on URL
  if (req.method === 'GET') {
    if (req.url === '/') {
      servePage(res, 'index.html');
    } else if (req.url === '/about') {
      servePage(res, 'about.html');
    } else if (req.url === '/contact') {
      servePage(res, 'contact.html');
    } else {
      res.statusCode = 404;
      res.end('<h1>404 - Page Not Found</h1>');
    }
  }

  // Handle POST request from contact form
  else if (req.method === 'POST' && req.url === '/submit') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      const formData = new URLSearchParams(body);
      const name = formData.get('name');
      const message = formData.get('message');

      res.end(`<h1>Thanks, ${name}!</h1><p>Your message: ${message}</p><a href="/">Go Home</a>`);
    });
  }
});

// Helper function to serve HTML files
function servePage(res, filename) {
  const filepath = path.join(__dirname, 'pages', filename);
  fs.readFile(filepath, (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.end('<h1>500 - Server Error</h1>');
    } else {
      res.end(data);
    }
  });
}

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
