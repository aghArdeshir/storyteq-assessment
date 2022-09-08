import { MIN_CHARACTERS_LENGTH_TO_SEARCH } from "@/constants/constants";
import { reactive } from "vue";
import { books, type Book } from "../constants/db";

export const bookStore = reactive<{
  selectedBooks: Book[];
  availableOptions: Book[];
  onTextChange: (inputText: string) => void;
  onSelectedBooksChange: (newSelectedBooks: Book[]) => void;
  onRemoveBook: (removedBook: Book) => void;
}>({
  selectedBooks: [],
  availableOptions: [],
  onTextChange(inputText: string) {
    if (inputText.length < MIN_CHARACTERS_LENGTH_TO_SEARCH) {
      bookStore.availableOptions = [];
      return;
    }

    bookStore.availableOptions = books.filter((book) =>
      book.title.toLowerCase().includes(inputText.toLowerCase())
    );
  },
  onSelectedBooksChange(newSelectedBooks: Book[]) {
    bookStore.selectedBooks = newSelectedBooks;
  },
  onRemoveBook(removedBook: Book) {
    bookStore.selectedBooks = bookStore.selectedBooks.filter(
      (book) => book !== removedBook
    );
  },
});
