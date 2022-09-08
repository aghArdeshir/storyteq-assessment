<script setup lang="ts">
import { reactive } from "vue";
import AutoComplete from "./AutoComplete.vue";
import { books, type Book } from "../constants/db";

const MIN_CHARACTERS_LENGTH_TO_SEARCH = 3;

const state = reactive<{ selectedBooks: Book[]; availableOptions: Book[] }>({
  selectedBooks: [],
  availableOptions: [],
});

function onTextChange(inputText: string) {
  if (inputText.length < MIN_CHARACTERS_LENGTH_TO_SEARCH) {
    state.availableOptions = [];
    return;
  }

  state.availableOptions = books.filter((book) =>
    book.title.toLowerCase().includes(inputText.toLowerCase())
  );
}

function onSelectedBooksChange(newSelectedBooks: Book[]) {
  state.selectedBooks = newSelectedBooks;
}
</script>

<template>
  <AutoComplete
    @on-text-change="onTextChange"
    @on-change="onSelectedBooksChange"
    :available-options="state.availableOptions"
    :selected-options="state.selectedBooks"
    :min-length="MIN_CHARACTERS_LENGTH_TO_SEARCH"
    placeholder="search for books..."
  >
    <template #checkbox-label="{ option: book }"
      >{{ book.title }} <small>by</small> <em>{{ book.author }}</em></template
    >
  </AutoComplete>
</template>
