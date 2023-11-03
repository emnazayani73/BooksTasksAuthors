const express = require("express");
const router = express.Router();
const authorController = require("../Controllers/author");

router.post("/", authorController.addAuthor);

module.exports = router;
