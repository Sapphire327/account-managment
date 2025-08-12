<script setup lang="ts">
import AccountElement from "./AccountElement.vue";
import AccountElementTitle from "./AccountElementTitle.vue";
</script>

<template>
  <div class="element-container">
    <AccountElementTitle/>
    <AccountElement v-for="i in 4" :key="i"></AccountElement>
  </div>
</template>

<style scoped>
  .element-container{
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
</style>