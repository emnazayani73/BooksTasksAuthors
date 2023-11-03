const Category = require("../Models/Category");

const addCategory = (req, res) => {
  console.log(req.body);
  const category = new Category(req.body);
  category
    .save()
    .then(() => {
      res.status(201).json({
        model: category,
        message: "object créé ",
      });
    })
    .catch((error) => {
      s;
      res.status(400).json({
        error: error.message,
        message: "erreur d'extraction ",
      });
    });
};

module.exports = {
  addCategory,
};
