<template>
  <div>
    <el-form label-width="55px" :rules="rules" :model="account" ref="fromRef">
      <el-form-item label="账号" prop="name">
        <el-input placeholder="请输入账号" v-model="account.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          placeholder="请输入密码"
          v-model="account.password"
          type="password"
          show-password
        ></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { ElForm } from 'element-plus'

import { rules } from '../config/account-config'
import localCache from '@/utils/cache'

export default defineComponent({
  setup() {
    const store = useStore()
    const account = reactive({
      name: localCache.getCache('name') ?? '',
      password: localCache.getCache('password') ?? ''
    })
    const fromRef = ref<InstanceType<typeof ElForm>>()
    const loginAction = (isKeepPassword: boolean) => {
      fromRef.value?.validate((valid) => {
        if (valid) {
          if (isKeepPassword) {
            //记住密码
            localCache.setCache('name', account.name)
            localCache.setCache('password', account.password)
          } else {
            //没有记住密码
            localCache.deleteCache('name')
            localCache.deleteCache('password')
          }
          store.dispatch('login/accountLoginAction', { ...account })
        }
      })
    }

    return { account, rules, fromRef, loginAction }
  }
})
</script>

<style scoped></style>
