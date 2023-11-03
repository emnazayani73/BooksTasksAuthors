const mongoose = require("mongoose");
const bookSchema = mongoose.Schema({
  title: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "author" },
  category: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }],
});
module.exports = mongoose.model("Book", bookSchema);
