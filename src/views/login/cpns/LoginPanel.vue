<template>
  <div class="login-panel">
    <h1 class="login-title">后台登录管理系统</h1>
    <div class="el-tab-part">
      <el-tabs
        type="border-card"
        class="el-tab-body"
        stretch
        v-model="userSelectTab"
      >
        <el-tab-pane name="account">
          <template #label>
            <span class="custom-tabs-label">
              <el-icon><Reading /></el-icon>
              <span>账号登录</span>
            </span>
          </template>
          <login-account ref="accountRef"></login-account>
        </el-tab-pane>
        <el-tab-pane name="phone">
          <template #label>
            <span class="custom-tabs-label">
              <el-icon><Phone /></el-icon>
              <span>手机登录</span>
            </span>
          </template>
          <login-phone ref="phoneRef"></login-phone>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="account-control-body">
      <div class="account-control">
        <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
        <el-link type="primary">忘记密码</el-link>
      </div>
    </div>
    <div class="submit-button-body">
      <el-button
        type="primary"
        size="large"
        @click="userSubmit"
        class="submit-button"
        >立即登录</el-button
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import LoginAccount from './LoginAccount.vue'
import LoginPhone from './LoginPhone.vue'
import localCache from '@/utils/cache'

export default defineComponent({
  name: 'LoginPanel',
  components: {
    LoginAccount,
    LoginPhone
  },
  setup() {
    const store = useStore()

    let isKeepPassword = ref(localCache.getCache('recordUserMass') ?? false)
    let userSelectTab = ref('account')
    const accountRef = ref<InstanceType<typeof LoginAccount>>()
    const phoneRef = ref<InstanceType<typeof LoginPhone>>()

    const userSubmit = () => {
      console.log('用户点击了提交')
      localCache.setCache('recordUserMass', isKeepPassword.value)
      if (userSelectTab.value == 'account') {
        accountRef.value?.loginAction(isKeepPassword.value)
      }
    }

    return {
      isKeepPassword,
      userSelectTab,
      accountRef,
      phoneRef,
      userSubmit
    }
  }
})
</script>

<style lang="less">
.login-title {
  width: 100%;
  text-align: center;
  line-height: 150px;
}

.el-tab-part {
  width: 100%;
  display: flex;
  justify-content: center;
}

.el-tab-body {
  width: 400px;
  height: 200px;
}

.account-control-body {
  width: 100%;
  display: flex;
  justify-content: center;
}

.account-control {
  width: 400px;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}

.submit-button-body {
  width: 100%;
  display: flex;
  justify-content: center;
}

.submit-button-body .submit-button {
  color: #f7f0f0;
  background-color: #7667a7;
  width: 120px;
  padding: 5px 2px;
}
</style>
