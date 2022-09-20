const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  book_name: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  authors: {
    type: String,
    required: true,
  },
  isbn: {
    type: Number,
    required: true,
  },
  publisher: {
    type: String,
    required: true,
  },
  published_on: {
    type: Date,
    required: true,
  },
});

const Books = mongoose.model("Books", bookSchema);

module.exports = Books;
