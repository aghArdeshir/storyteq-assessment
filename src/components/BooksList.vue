<script setup lang="ts">
import AutoComplete from "./AutoComplete.vue";
import { bookStore } from "@/data-stores/book-store";
import { MIN_CHARACTERS_LENGTH_TO_SEARCH } from "@/constants/constants";
</script>

<template>
  <AutoComplete
    @on-text-change="bookStore.onTextChange"
    @on-change="bookStore.onSelectedBooksChange"
    @on-remove-option="bookStore.onRemoveBook"
    :available-options="bookStore.availableOptions"
    :selected-options="bookStore.selectedBooks"
    :min-length="MIN_CHARACTERS_LENGTH_TO_SEARCH"
    placeholder="search for books..."
  >
    <template #checkbox-label="{ option: book }"
      >{{ book.title }} <small>by</small> <em>{{ book.author }}</em></template
    >
    <template #selected-option-chip="{ selectedOption: book }">
      <div class="chip-content">
        <span>{{ book.title }} </span>
        <span>{{ book.author }} </span>
      </div>
    </template>
  </AutoComplete>
</template>

<style scoped>
.chip-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
