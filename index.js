import express from 'express';
import connectDB from './database/database.js';
import cors from 'cors';
import bookRoutes from './src/Book/book.routes.js';
import authorRoutes from './src/Author/author.routes.js';

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(cors());
app.use(express.json());

app.use('/api', bookRoutes);
app.use('/api', authorRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
