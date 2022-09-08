<script setup lang="ts">
import { reactive } from "vue";

const emit = defineEmits<{
  (e: "onTextChange", inputText: string): void;
}>();

const props = defineProps<{
  availableOptions: any[];
  selectedOptions: any[];
}>();

const state = reactive({
  inputText: "",
});

function onInputTextChange() {
  emit("onTextChange", state.inputText);
}
</script>

<template>
  <input v-model="state.inputText" @input="onInputTextChange" autofocus />
  <ul>
    <li v-for="option in props.availableOptions" :key="option">
      {{ option }}
    </li>
  </ul>
</template>
