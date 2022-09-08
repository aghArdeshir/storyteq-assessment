import { books, type Book } from "../constants/db";
import { createAutocompleteStore } from "./store-builder";

export const bookStore = createAutocompleteStore<Book>(
  books,
  (searchTerm) => (book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
);
