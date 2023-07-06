const mongoose = require("mongoose");

const BookModelSchema = mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
});

const BookModel = mongoose.model("books", BookModelSchema);

module.exports = { BookModel };
