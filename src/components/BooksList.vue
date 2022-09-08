<script setup lang="ts">
import AutoComplete from "./AutoComplete.vue";
import {
  bookStore,
  MIN_CHARACTERS_LENGTH_TO_SEARCH,
} from "@/data-stores/book-store";
</script>

<template>
  <AutoComplete
    @on-text-change="bookStore.onTextChange"
    @on-change="bookStore.onSelectedBooksChange"
    :available-options="bookStore.availableOptions"
    :selected-options="bookStore.selectedBooks"
    :min-length="MIN_CHARACTERS_LENGTH_TO_SEARCH"
    placeholder="search for books..."
  >
    <template #checkbox-label="{ option: book }"
      >{{ book.title }} <small>by</small> <em>{{ book.author }}</em></template
    >
  </AutoComplete>
</template>
