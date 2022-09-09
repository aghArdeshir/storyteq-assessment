<script setup lang="ts">
import { computed, reactive, watch } from "vue";

const emit = defineEmits<{
  // disabling eslint because I don't know why it is complaining! it shouldn't!
  // eslint-disable-next-line no-unused-vars
  (e: "onTextChange", inputText: string): void;
  // disabling eslint because I don't know why it is complaining! it shouldn't!
  // eslint-disable-next-line no-unused-vars
  (e: "onChange", selectedOptions: any[]): void;
  // disabling eslint because I don't know why it is complaining! it shouldn't!
  // eslint-disable-next-line no-unused-vars
  (e: "onRemoveOption", rmeovedOption: any): void;
}>();

const props = defineProps<{
  availableOptions: any[];
  selectedOptions: any[];
  minLength: number;
  placeholder: string;
}>();

const state = reactive<{ inputText: string; internal_selectedOptions: any[] }>({
  inputText: "",
  internal_selectedOptions: [],
});

watch(props, (newValue) => {
  state.internal_selectedOptions = newValue.selectedOptions;
});

function onInputTextChange() {
  emit("onTextChange", state.inputText);
}

function onSelectedOptionsChange() {
  emit("onChange", state.internal_selectedOptions);
}

const noMatchFound = computed(
  () =>
    props.availableOptions.length === 0 &&
    state.inputText.length >= props.minLength
);

function onRemoveOption(removedOption: any) {
  emit("onRemoveOption", removedOption);
}
</script>

<template>
  <div class="autocomplete-wrapper">
    <div class="chips-and-input">
      <div
        v-for="selectedOption in props.selectedOptions"
        :key="selectedOption"
        class="selected-option-chip"
      >
        <slot name="selected-option-chip" v-bind="{ selectedOption }">
          {{ selectedOption }}
        </slot>
        <button
          class="selected-option-chip-remove-button"
          @click="onRemoveOption(selectedOption)"
        >
          X
        </button>
      </div>

      <input
        type="text"
        v-model="state.inputText"
        @input="onInputTextChange"
        autofocus
        :placeholder="props.placeholder"
      />
    </div>

    <div v-if="state.inputText.length < props.minLength">
      Write at least {{ props.minLength }} characters to start searching
    </div>

    <ul class="autocomplete-popup">
      <li v-if="noMatchFound">No matches found! Try another search term</li>

      <li v-for="option in props.availableOptions" :key="option">
        <label>
          <input
            type="checkbox"
            :value="option"
            @change="onSelectedOptionsChange"
            v-model="state.internal_selectedOptions"
            style="margin-right: 10px"
          />
          <slot name="checkbox-label" v-bind="{ option }">{{ option }}</slot>
        </label>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.selected-option-chip {
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: lightslategray;
  padding: 5px;
  border-radius: 4px;
  font-size: 14px;
  margin: 5px;
}

.selected-option-chip-remove-button {
  border: 1px solid lightblue;
  background-color: transparent;
  color: white;
  border-radius: 50%;
  margin-left: 10px;
  cursor: button;
}

input[type="text"] {
  font-size: 20px;
  color: white;
  flex: 1;
}

.autocomplete-wrapper {
  font-size: 20px;
}

.chips-and-input {
  display: flex;
  flex-wrap: wrap;
  max-width: 600px;
  min-width: 300px;

  border-bottom: 1px solid gray;
}

.chips-and-input input {
  border: none;
  background-color: transparent;
  outline: none;
  padding: 10px;
}

.autocomplete-popup {
  background-color: blueviolet;
  box-shadow: 0px 0px 8px black;
}
</style>
