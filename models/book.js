const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true, index: true, unique: true },
  author: { type: Array, required: false },
  description: { type: String, required: false },
  image: { type: String, required: false },
  link:{ type: String, required: false }
  
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
