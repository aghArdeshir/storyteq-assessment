<script setup lang="ts">
import BooksList from "./components/BooksList.vue";
import CitiesList from "./components/CitiesList.vue";
</script>

<template>
  <main class="main-division">
    <div>
      <BooksList />
    </div>

    <hr />

    <div>
      <CitiesList />
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
