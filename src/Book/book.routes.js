import express from 'express';
import {
  createBook,
  getAllBooks,
  getBookById,
  updateBookById,
  deleteBookById,
} from './bookController.js';

const router = express.Router();

router.post('/books', createBook);
router.get('/books', getAllBooks);
router.get('/books/:id', getBookById);
router.patch('/books/:id', updateBookById);
router.delete('/books/:id', deleteBookById);

export default router;


'./bookController.js';
