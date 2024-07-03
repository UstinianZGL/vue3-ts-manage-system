<template>
  <div class="logincontent">
    <login-panel></login-panel>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LoginPanel from './cpns/LoginPanel.vue'

export default defineComponent({
  name: 'LoginPage',
  components: {
    LoginPanel
  },
  setup() {
    return {}
  }
})
</script>

<style lang="less"></style>
