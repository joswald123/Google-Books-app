const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  
  title: { type: String, required: true },
  subtitle: { type: String },
  authors: [{ type: String, required: true }],
  description: String,
  image: { type: String, trim: true },
  link: { type: String, },
  date: { type: Date, default: Date.now },
  image: { type: String, trim: true },
  id: { type: String, required: true, unique: true }
  
  });
  
  
  const Book = mongoose.model("Book", bookSchema);
  
  module.exports = Book;
