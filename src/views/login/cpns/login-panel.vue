<template>
  <div class="login-panel">
    <h1 class="title">通用型后台管理系统</h1>
    <el-tabs type="border-card" class="demo-tabs" stretch>
      <el-tab-pane>
        <template #label>
          <span>
            <el-icon class="my-icon"><avatar /></el-icon>账号登录
          </span>
        </template>
        <login-account ref="accountRef"></login-account>
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span>
            <el-icon class="my-icon"><iphone /></el-icon>手机号登录
          </span>
        </template>
        <login-phone></login-phone>
      </el-tab-pane>
    </el-tabs>
    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button type="primary" class="login-btn" @click="handleLoginClick"
      >立即登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Avatar, Iphone } from '@element-plus/icons-vue'
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'

export default defineComponent({
  components: {
    Avatar,
    Iphone,

    LoginAccount,
    LoginPhone
  },
  setup() {
    const isKeepPassword = ref(true)
    const accountRef = ref<InstanceType<typeof LoginAccount>>()
    const handleLoginClick = () => {
      accountRef.value?.loginAction(isKeepPassword.value)
    }

    return { isKeepPassword, handleLoginClick, accountRef }
  }
})
</script>

<style scoped lang="less">
.login-panel {
  width: 320px;
  margin-bottom: 350px;
  .title {
    text-align: center;
    color: #409eff;
  }
  .my-icon {
    margin-right: 5px;
  }
  .account-control {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }
  .login-btn {
    width: 100%;
    height: 50px;
    margin-top: 10px;
    font-size: 20px;
    font-weight: 600;
  }
}
</style>
