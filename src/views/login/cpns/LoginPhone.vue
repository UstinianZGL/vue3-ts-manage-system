<template>
  <div class="login-phone">
    <el-form style="max-width: 460px" :model="userMassage" :rules="phoneRule">
      <el-form-item label="手机号" required prop="phoneNumber">
        <el-input v-model="userMassage.phoneNumber" type="text" />
      </el-form-item>
      <el-form-item label="验证码" required prop="password">
        <div class="verify-body">
          <el-input v-model="userMassage.password" type="text" />
          <el-button
            type="primary"
            color="#626aef"
            size="large"
            class="verity-button"
            >获取验证码</el-button
          >
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { phoneRule } from '../config/phoneConfig'

export default defineComponent({
  name: 'LoginPhone',
  setup() {
    const userMassage = reactive({
      phoneNumber: '',
      password: ''
    })

    return {
      userMassage,
      phoneRule
    }
  }
})
</script>

<style lang="less">
.verify-body {
  display: flex;
}
.verity-button {
  margin-left: 10px;
}
</style>
