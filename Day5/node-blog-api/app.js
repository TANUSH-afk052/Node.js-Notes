import express from 'express';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the Node Blog API 🚀');
});

// Post routes
app.use('/api/posts', postRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
