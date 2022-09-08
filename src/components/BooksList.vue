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
</script>

<template>
  <AutoComplete
    @on-text-change="onTextChange"
    :available-options="state.availableOptions"
    :selected-options="state.selectedBooks"
  />
</template>
