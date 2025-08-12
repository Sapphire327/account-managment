<script setup lang="ts">
import {computed, ref} from "vue";
import {AccountType, type IAccount} from "../../types/types.ts";
import type {IAccountForm} from "./FormType.ts";
  const emit = defineEmits<{
    (e: 'change', account: IAccount): void
    (e: 'remove', id: number): void
  }>()
  const props = defineProps<{account: IAccount}>()
  const errors = ref<{login:string|null;password?:string|null}>({
    login: null,
    password: null,
  })
  const formFields = ref<IAccountForm>({
    label:props.account.label.map(el => el.text).join(";"),
    type:props.account.type,
    login:props.account.login,
    password:props.account.password
  })
  const showPassword = computed(()=>(formFields.value.type === AccountType.LOCAL))

  function validateForm(){
    errors.value.login=null
    errors.value.password=null
    if(!formFields.value.login){
      errors.value.login="Остуствтует значение";
      return
    }
    if(formFields.value.type===AccountType.LOCAL&&!formFields.value.password){
      errors.value.password="Остуствтует значение";
      return
    }
    emit("change", {
      id:props.account.id,
      login:formFields.value.login,
      label:formFields.value.label.split(";").map((el)=>({text:el})),
      type:formFields.value.type,
      password:formFields.value.password
    })
  }

</script>

<template>
  <form class="account-form" @submit.prevent="validateForm">
    <el-input  v-model="formFields.label" @blur="validateForm" class="account-form__input" size="large"  maxlength="50"/>
    <el-select v-model="formFields.type" @change="validateForm" size="large" class="account-form__select" placeholder="Select">
      <el-option label="Локальная"  :value="AccountType.LOCAL"/>
      <el-option label="LDAP" :value="AccountType.LDAP"/>
    </el-select>
    <el-input aria-required="true" @blur="validateForm" v-model="formFields.login" class="account-form__input" :class="{'wide-login':!showPassword,'account-form__input_error':errors.login}" size="large" maxlength="100" />
    <el-input v-model="formFields.password" @blur="validateForm" v-if="showPassword" type="password" show-password class="account-form__input" :class="{'account-form__input_error':errors.password}" size="large"  maxlength="100" />
    <el-button @click="$emit('remove',props.account.id)" size="large"><img src="/icons/Delete.svg" class="logo vue" alt="Vue logo" /></el-button>
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
  .account-form__input_error{
    border-radius: var(--el-input-border-radius, var(--el-border-radius-base));
    outline: 1.2px solid rgba(139, 0, 0, 0.64);
  }
</style>