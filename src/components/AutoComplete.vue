<script setup lang="ts">
import { reactive, watch } from "vue";

const emit = defineEmits<{
  // disabling eslint because I don't know why it is complaining! it shouldn't!
  // eslint-disable-next-line no-unused-vars
  (e: "onTextChange", inputText: string): void;
  // disabling eslint because I don't know why it is complaining! it shouldn't!
  // eslint-disable-next-line no-unused-vars
  (e: "onChange", selectedOptions: any[]): void;
}>();

const props = defineProps<{
  availableOptions: any[];
  selectedOptions: any[];
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
</script>

<template>
  <input v-model="state.inputText" @input="onInputTextChange" autofocus />
  <ul>
    <li v-for="option in props.availableOptions" :key="option">
      <label>
        <input
          type="checkbox"
          :value="option"
          @change="onSelectedOptionsChange"
          v-model="state.internal_selectedOptions"
        />
        <slot name="checkbox-label" v-bind="{ option }">{{ option }}</slot>
      </label>
    </li>
  </ul>
</template>
