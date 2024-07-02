import Author from '../../database/models/author.model.js';

export const createAuthor = async (req, res) => {
  try {
    const { name, bio, birthDate } = req.body;
    const author = new Author({ name, bio, birthDate });
    await author.save();

    res.status(201).json(author);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getAllAuthors = async (req, res) => {
  try {
    const authors = await Author.find();
    res.json(authors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getAuthorById = async (req, res) => {
  try {
    const author = await Author.findById(req.params.id);
    if (!author) {
      return res.status(404).json({ error: 'Author not found' });
    }
    res.json(author);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateAuthorById = async (req, res) => {
  try {
    const { name, bio, birthDate } = req.body;
    const updatedAuthor = await Author.findByIdAndUpdate(
      req.params.id,
      { name, bio, birthDate },
      { new: true }
    );
    if (!updatedAuthor) {
      return res.status(404).json({ error: 'Author not found' });
    }
    res.json(updatedAuthor);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteAuthorById = async (req, res) => {
  try {
    const deletedAuthor = await Author.findByIdAndDelete(req.params.id);
    if (!deletedAuthor) {
      return res.status(404).json({ error: 'Author not found' });
    }
    res.json({ message: 'Author deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
