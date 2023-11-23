const Book = require("../Models/Books");

const fetchBooks = (req, res) => {
  Book.find()
    .then((books) => {
      res.status(200).json({
        model: books,
        message: "success",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error.message,
        message: "error d'extraction",
      });
    });
};

const addBooks = (req, res) => {
  console.log(req.body);
  const book = new Book(req.body);
  book
    .save()
    .then(() => {
      res.status(201).json({
        model: book,
        message: "object créé ",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error.message,
        message: "erreur d'extraction ",
      });
    });
};

const getBookById = (req, res) => {
  console.log(req.params.id);
  Book.findOne({ _id: req.params.id })
    .populate("author")
    .populate("category")
    .then((book) => {
      if (!book) {
        res.status(404).json({
          message: "objet non trouvé ",
        });
        return;
      }
      res.status(200).json({
        model: book,
        message: "objet trouvé",
      });
    })
    .catch((error) => {
      res.status(400).json({
        error: error.message,
        message: "erreur d'extraction ",
      });
    });
};

const updateBooks = (req, res) => {
  Book.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((book) => {
      if (!book) {
        res.status(404)({
          message: "Objet non trouvé",
        });
      } else
        res.status(200).json({
          model: book,
          message: "Objet modifié",
        });
    })
    .catch((error) => {
      res.status(400).json({
        error: error.message,
        message: "problème d'extraction ",
      });
    });
};

const deleteBook = (req, res) => {
  Book.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: "objet supprimé" }))
    .catch((error) => res.status(400).json({ error }));
  console.log(req.params.id);
};

const findBooks = async (req, res) => {
  try {
    const books = await Book.findByAuthor(req.params.id);

    if (books.length > 0) {
      res.status(200).json({
        booksByAuthor: books,
        message: "Objects trouvés",
      });
    } else {
      res.status(404).json({
        message: "Aucun livre trouvé pour cet auteur",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: error.message,
      message: "Problème d'extraction",
    });
  }
};

module.exports = {
  fetchBooks,
  addBooks,
  getBookById,
  updateBooks,
  deleteBook,
  findBooks,
};
