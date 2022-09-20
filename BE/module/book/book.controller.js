const booksServices = require("./book.services");

const createBook = async (req, res) => {
  try {
    const book = await booksServices.createBook(req);
    res.json({
      data: book,
    });
  } catch (error) {
    res.json({
      error: error,
    });
  }
};

const deleteBook = async (req, res) => {
  try {
    const book = await booksServices.deleteBook(req);
    res.json({
      success: true,
      data: book,
    });
  } catch (error) {
    res.json({
      success: false,
      data: error,
    });
  }
};

const updateBook = async (req, res) => {
  const book = await booksServices.updateBook(req);
  res.json({
    data: book,
  });
};

const getAllBook = async (req, res) => {
  const book = await booksServices.getAllBook(req);
  res.json({
    data: book,
  });
};

const getBookById = async (req, res) => {
  const book = await booksServices.getBookById(req);
  res.json({
    data: book,
  });
};

module.exports = {
  createBook,
  deleteBook,
  updateBook,
  getAllBook,
  getBookById,
};
