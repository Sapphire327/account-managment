<script setup lang="ts">

</script>

<template>
  <ul class="title-list">
    <li>Метки</li>
    <li>Тип записи</li>
    <li>Логин</li>
    <li>Пароль</li>
  </ul>
</template>

<style scoped>
.title-list{
  display: grid;
  grid-template-columns: repeat(4, 1fr) 30px;
  gap: 10px;
}
</style>