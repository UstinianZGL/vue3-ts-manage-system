<template>
  <div class="login-account">
    <el-form style="max-width: 460px" :model="userMassage">
      <el-form-item label="账号" required>
        <el-input v-model="userMassage.account" />
      </el-form-item>
      <el-form-item label="密码" required>
        <el-input v-model="userMassage.password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  name: 'LoginAccount',
  setup() {
    const userMassage = reactive({
      account: '',
      password: ''
    })

    return {
      userMassage
    }
  }
})
</script>

<style lang="less"></style>
