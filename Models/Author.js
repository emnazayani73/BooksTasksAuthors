const mongoose = require("mongoose");
const authorSchema = mongoose.Schema({
  lastName: { type: String, required: true },
  firstName: { type: String, required: true },
  nationality: { type: String, required: true },
});
module.exports = mongoose.model("author", authorSchema);
