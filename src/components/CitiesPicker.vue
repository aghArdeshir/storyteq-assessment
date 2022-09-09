<script setup lang="ts">
import { MIN_CHARACTERS_LENGTH_TO_SEARCH } from "@/constants/constants";
import { cityStore } from "@/data-stores/city-store";
import AutoComplete from "./AutoComplete.vue";
</script>

<template>
  <AutoComplete
    @on-text-change="cityStore.search"
    @on-change="cityStore.setSelectedItems"
    @on-remove-option="cityStore.removeItem"
    :available-options="cityStore.availableItemsToSelect"
    :selected-options="cityStore.selectedItems"
    :min-length="MIN_CHARACTERS_LENGTH_TO_SEARCH"
    placeholder="search for cities..."
  />
</template>
