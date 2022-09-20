const express = require("express");
const router = express.Router();
const bookRouter = require("./bookRouter");

router.use("/book", bookRouter);

module.exports = router;
