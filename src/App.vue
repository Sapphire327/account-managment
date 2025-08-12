<script setup lang="ts">
import Hint from "./components/Hint/Hint.vue";
import AccountManager from "./components/AccountManager/AccountManager.vue";
</script>

<template>
  <div class="container main-page">
    <div class="main-page__top">
      <h2 class="title">Учетные записи</h2>
      <el-button class="main-page__addBtn" type="primary" plain size="large"><span style="font-size: 24px;">+</span></el-button>
    </div>
    <Hint text="Для указания нескольких меток для одной пары логин/пароль используйте разделитель ;"></Hint>
    <AccountManager></AccountManager>

  </div>
</template>

<style scoped>
.main-page{
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.title{
  font-size: 28px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.81);
}
.main-page__top{
  margin-top: 30px;
  display: flex;
  align-items: center;
  gap: 15px;
}
.main-page__addBtn{
  width: 40px;
  height: 40px;
  padding-top: 9px;
}
</style>
