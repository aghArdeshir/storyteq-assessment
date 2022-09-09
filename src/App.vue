<script setup lang="ts">
import BooksPicker from "./components/BooksPicker.vue";
import CitiesPicker from "./components/CitiesPicker.vue";
</script>

<template>
  <main class="main-division">
    <div>
      <BooksPicker />
    </div>

    <hr />

    <div>
      <CitiesPicker />
    </div>
  </main>
</template>

<style scoped>
.main-division {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

@media (min-width: 1000px) {
  .main-division {
    flex-direction: row;
  }
}

.main-division > div {
  flex: 1;

  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
