const express = require('express');
const app = express();
const postsRoute = require('./routes/posts');

app.use(express.json()); // Required for parsing JSON body using Middleware
app.use('/posts', postsRoute); // Base route: /posts

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
