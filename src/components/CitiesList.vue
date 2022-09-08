<script setup lang="ts">
import { MIN_CHARACTERS_LENGTH_TO_SEARCH } from "@/constants/constants";
import { cityStore } from "@/data-stores/city-store";
import AutoComplete from "./AutoComplete.vue";
</script>

<template>
  <AutoComplete
    @on-text-change="cityStore.onTextChange"
    @on-change="cityStore.onSelectedCitiesChange"
    @on-remove-option="cityStore.onRemoveCity"
    :available-options="cityStore.availableOptions"
    :selected-options="cityStore.selectedCities"
    :min-length="MIN_CHARACTERS_LENGTH_TO_SEARCH"
    placeholder="search for cities..."
  />
</template>
