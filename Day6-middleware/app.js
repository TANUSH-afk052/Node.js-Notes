const express = require('express');
const app = express();
const logger = require('./middleware/logger');
const postRoutes = require('./routes/posts');

app.use(express.json());     // built-in
app.use(logger);             // custom logger

app.use('/api/posts', postRoutes);

app.listen(3000, () => console.log('Server running'));
