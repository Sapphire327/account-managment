<script setup lang="ts">
const {text} = defineProps<{text:string}>()
</script>

<template>
  <div class="hint">
    <p class="question">?</p>
    <p class="hint__text">{{text}}</p>
  </div>
</template>

<style scoped>
  .hint{
    background-color: var(--el-color-primary-light-9);
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
  }
  .hint__text{
    font-size: 18px;
  }
  .question{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    width: 20px;
    height: 20px;
    border: 2px solid rgba(0, 0, 0, 0.44);
    border-radius: 50%;
  }
</style>