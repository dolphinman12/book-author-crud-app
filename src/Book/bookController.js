import Book from '../../database/models/book.model.js'; // Adjust the path based on your actual structure

export const createBook = async (req, res) => {
  try {
    const { title, content, author } = req.body;
    const book = new Book({ title, content, author });
    await book.save();
    
    res.status(201).json(book);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.json(book);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateBookById = async (req, res) => {
  try {
    const { title, content } = req.body;
    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true }
    );
    if (!updatedBook) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.json(updatedBook);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteBookById = async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    if (!deletedBook) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.json({ message: 'Book deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
