<template>
  <div class="login-account">
    <el-form
      style="max-width: 460px"
      :model="userMassage"
      :rules="accountRule"
      ref="formRef"
    >
      <el-form-item label="账号" required prop="account">
        <el-input v-model="userMassage.account" />
      </el-form-item>
      <el-form-item label="密码" required prop="password">
        <el-input
          v-model="userMassage.password"
          type="password"
          show-password
        />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { accountRule } from '../config/accountConfig'
import { ElForm } from 'element-plus'
import localCache from '@/utils/cache'

export default defineComponent({
  name: 'LoginAccount',
  setup() {
    const userMassage = reactive({
      account: '',
      password: ''
    })

    const formRef = ref<InstanceType<typeof ElForm>>()

    const loginAction = (isNeedStoreUserMassage: boolean) => {
      console.log('手机号登录响应')
      //校验规则
      formRef.value?.validate((valid) => {
        if (valid) {
          if (isNeedStoreUserMassage) {
            //做本地缓存
            localCache.setCache('userAccount', userMassage.account)
            localCache.setCache('password', userMassage.password)
          } else {
            //清除缓存
            localCache.deleteCache('userAccount')
            localCache.deleteCache('password')
          }
        }
      })
    }

    return {
      userMassage,
      accountRule,
      formRef,
      loginAction
    }
  }
})
</script>

<style lang="less"></style>
