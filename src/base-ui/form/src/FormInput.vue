<template>
  <div class="form-body">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="Approved by">
        <el-input
          v-model="formInline.user"
          placeholder="Approved by"
          clearable
        />
      </el-form-item>
      <el-form-item label="Activity zone">
        <el-select
          v-model="formInline.region"
          placeholder="Activity zone"
          clearable
        >
          <el-option label="Zone one" value="shanghai" />
          <el-option label="Zone two" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="Activity time">
        <el-date-picker
          v-model="formInline.date"
          type="date"
          placeholder="Pick a date"
          clearable
        />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  setup() {
    const formInline = reactive({
      user: 'Ustinian',
      region: '',
      date: ''
    })
    return {
      formInline
    }
  }
})
</script>

<style lang="less"></style>
