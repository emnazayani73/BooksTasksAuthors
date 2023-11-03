const mongoose = require("mongoose");
const categorySchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    enum: ["horror", "mystery", "romantic", "comedy"],
  },
});
module.exports = mongoose.model("category", categorySchema);
