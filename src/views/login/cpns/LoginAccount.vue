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
import { useStore } from 'vuex'
import { accountRule } from '../config/accountConfig'
import { ElForm } from 'element-plus'
import localCache from '@/utils/cache'
import { ILoginAccount } from '@/service/login/type'

export default defineComponent({
  name: 'LoginAccount',
  setup() {
    const store = useStore()

    const userMassage = reactive({
      account: localCache.getCache('userAccount') ?? '',
      password: localCache.getCache('password') ?? ''
    })

    const formRef = ref<InstanceType<typeof ElForm>>()

    const loginAction = (isNeedStoreUserMassage: boolean) => {
      console.log('账号登录响应')
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
        } else {
          window.alert('请输入正确格式的账号和密码')
        }
      })
      const loginAccount: ILoginAccount = {
        name: userMassage.account,
        password: userMassage.password
      }
      store.dispatch('login/accountLoginAction', { ...loginAccount })
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
