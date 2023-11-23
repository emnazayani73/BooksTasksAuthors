const express = require("express");
const router = express.Router();
const bookController = require("../Controllers/book");

router.get("/", bookController.fetchBooks);

router.post("/", bookController.addBooks);

router.get("/:id", bookController.getBookById);

router.patch("/:id", bookController.updateBooks);

router.delete("/:id", bookController.deleteBook);

router.get("/author/:id", bookController.findBooks);

// module.exports accepte un objet router ici est un objet
//hadhra le cas des fontions ahna nsn3ou l'objet w n3aytou fih ll fonction kima fi lcontrollers

module.exports = router;
