import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    bookName: { type: String, required: true },
    bookId: { type: String, required: true, unique: true },
    publishDate: { type: Date, required: true },
  },
  { timestamps: true }
);

const Book = mongoose.model("Book", bookSchema);
export default Book;
