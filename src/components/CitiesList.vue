<script setup lang="ts">
import { reactive } from "vue";
import AutoComplete from "./AutoComplete.vue";
import { cities, type City } from "../constants/db";

const MIN_CHARACTERS_LENGTH_TO_SEARCH = 3;

const state = reactive<{ selectedCities: City[]; availableOptions: City[] }>({
  selectedCities: [],
  availableOptions: [],
});

function onTextChange(inputText: string) {
  if (inputText.length < MIN_CHARACTERS_LENGTH_TO_SEARCH) {
    state.availableOptions = [];
    return;
  }

  state.availableOptions = cities.filter((city) =>
    city.toLowerCase().includes(inputText.toLowerCase())
  );
}

function onSelectedCitiesChange(newSelectedCities: City[]) {
  state.selectedCities = newSelectedCities;
}
</script>

<template>
  <AutoComplete
    @on-text-change="onTextChange"
    @on-change="onSelectedCitiesChange"
    :available-options="state.availableOptions"
    :selected-options="state.selectedCities"
    :min-length="MIN_CHARACTERS_LENGTH_TO_SEARCH"
    placeholder="search for cities..."
  />
</template>
