const express = require("express");
const router = express.Router();
const booksController = require("../../module/index");

router.get("/", booksController.getAllBook);
router.get("/:id", booksController.getBookById);
router.post("/", booksController.createBook);
router.put("/", booksController.updateBook);
router.delete("/:id", booksController.deleteBook);

module.exports = router;
