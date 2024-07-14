<template>
  <div class="page-search-body">
    <ly-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h2>{{ searchHeader }}</h2>
      </template>
      <template #footer>
        <el-button type="primary">搜索</el-button>
        <el-button type="info">重置</el-button>
      </template>
    </ly-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import LyForm from '@/base-ui/form/src/FormInput.vue'

export default defineComponent({
  components: {
    LyForm
  },
  props: {
    searchFormConfig: {
      type: Object,
      required: true
    },
    searchHeader: {
      type: String,
      default: '搜索功能'
    }
  },
  setup() {
    const formData = ref({
      id: '',
      userName: '',
      userPassword: '',
      selectType: '',
      createTime: ''
    })
    return {
      formData
    }
  }
})
</script>

<style lang="less"></style>
