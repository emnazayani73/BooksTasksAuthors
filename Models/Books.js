const mongoose = require("mongoose");
idValidator = require("mongoose-id-validator");
const bookSchema = mongoose.Schema({
  title: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "author" },
  category: [{ type: mongoose.Schema.Types.ObjectId, ref: "category" }],
});

bookSchema.plugin(idValidator);

bookSchema.statics.findByAuthor = function (authorId) {
  return this.find({ author: authorId });
};

module.exports = mongoose.model("Book", bookSchema);
