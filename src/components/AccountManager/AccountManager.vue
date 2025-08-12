<script setup lang="ts">
import AccountElement from "./AccountElement.vue";
import AccountElementTitle from "./AccountElementTitle.vue";
import {useAccountsStore} from "../../store/accountStore.ts";
const store = useAccountsStore();

</script>

<template>
  <div class="element-container">
    <AccountElementTitle/>
    <AccountElement
        @change="store.updateAccount"
        @remove="store.removeAccount"
        v-for="account in store.accounts"
        :key="account.id"
        :account></AccountElement>
  </div>
</template>

<style scoped>
  .element-container{
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
</style>