import express from 'express';
import {
  createAuthor,
  getAllAuthors,
  getAuthorById,
  updateAuthorById,
  deleteAuthorById,
} from './authorController.js';

const router = express.Router();

router.post('/authors', createAuthor);
router.get('/authors', getAllAuthors);
router.get('/authors/:id', getAuthorById);
router.patch('/authors/:id', updateAuthorById);
router.delete('/authors/:id', deleteAuthorById);

export default router;
