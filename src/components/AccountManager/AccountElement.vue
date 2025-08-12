<script setup lang="ts">
import {computed, ref} from "vue";

  const input = ref()
  const select = ref("LOCAL")
  const login = ref("")
  const password = ref("")

  const showPassword = computed(()=>(
    select.value === "LOCAL"
  ))

</script>

<template>
  <form class="account-form">
    <el-input v-model="input" class="account-form__input" size="large"  maxlength="50"/>
    <el-select v-model="select" size="large" class="account-form__select" placeholder="Select">
      <el-option label="Локальная"  value="LOCAL"/>
      <el-option label="LDAP" value="LDAP"/>
    </el-select>
    <el-input v-model="login" class="account-form__input" :class="{'wide-login':!showPassword}" size="large" maxlength="100" />
    <el-input v-model="password" v-if="showPassword" type="password" show-password class="account-form__input" size="large"  maxlength="100" />
    <el-button size="large"><img src="/icons/Delete.svg" class="logo vue" alt="Vue logo" /></el-button>
  </form>
</template>

<style scoped>
  .account-form{
    display: grid;
    grid-template-columns: repeat(4, 1fr) 30px;
    gap: 10px;
  }
  .account-form__input{
    font-size: 20px;
  }
  .wide-login{
    grid-column: span 2;
  }

</style>