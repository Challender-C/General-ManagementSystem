<template>
  <div>
    <el-form label-width="70px" :rules="rules" :model="verification">
      <el-form-item label="手机号" prop="phone">
        <el-input
          placeholder="请输入手机号"
          v-model="verification.phone"
        ></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <div class="get-code">
          <el-input
            placeholder="请输入验证码"
            v-model="verification.code"
          ></el-input>
          <el-button type="primary" class="get-btn">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { rules } from '../config/account-config'

export default defineComponent({
  setup() {
    const verification = reactive({
      phone: '',
      code: ''
    })
    return { verification, rules }
  }
})
</script>

<style scoped lang="less">
.get-code {
  display: flex;
  .get-btn {
    margin-left: 10px;
  }
}
</style>
