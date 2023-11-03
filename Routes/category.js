const express = require("express");
const router = express.Router();
const categoryController = require("../Controllers/category");

router.post("/", categoryController.addCategory);

module.exports = router;
