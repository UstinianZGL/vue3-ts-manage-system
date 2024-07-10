<template>
  <div class="role">
    <form-input></form-input>
  </div>
</template>

<script lang="ts">
import user from '@/router/main/system/user/user'
import { defineComponent, reactive } from 'vue'
import FormInput from '@/base-ui/form/src/FormInput.vue'

export default defineComponent({
  name: 'role',
  components: {
    FormInput
  },
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
