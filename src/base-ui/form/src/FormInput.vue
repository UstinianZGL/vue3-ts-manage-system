<template>
  <div class="form-body">
    <div class="form-body-header">
      <slot name="header"></slot>
    </div>
    <el-form :inline="true" :model="formInline" :label-width="labelWidth">
      <template v-for="(item, index) in IFromItem" :key="index">
        <el-col v-bind="colLayout">
          <el-form-item
            :label="item.label"
            :rules="item.rules"
            :style="itemStyle"
          >
            <template v-if="item.type === 'input' || item.type === 'password'">
              <el-input
                :placeholder="item.placeholder"
                v-bind="item.otherOptions"
                :show-password="item.type === 'password'"
                style="width: 200px"
                v-model="formData[item.filed]"
              />
            </template>
            <template v-else-if="item.type === 'select'">
              <el-select
                :placeholder="item.placeholder"
                v-bind="item.otherOptions"
                style="width: 200px"
                v-model="formData[item.filed]"
              >
                <el-option
                  v-for="option in item.options"
                  :key="option.key"
                  :value="option.value"
                  :label="option.title"
                />
              </el-select>
            </template>
            <template v-else-if="item.type === 'datapicker'">
              <el-date-picker
                type="date"
                :placeholder="item.placeholder"
                v-bind="item.otherOptions"
                style="width: 200px"
                v-model="formData[item.filed]"
              />
            </template>
          </el-form-item>
        </el-col>
      </template>
    </el-form>
    <div class="form-body-control">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive, ref, watch } from 'vue'
import { IFormItem } from '../types/index'

export default defineComponent({
  props: {
    IFromItem: {
      type: Array as PropType<IFormItem[]>,
      default: () => []
    },
    labelWidth: {
      type: String,
      default: '100px'
    },
    colLayout: {
      type: Object,
      default: () => ({
        xl: 6, // >1920px 4个
        lg: 8,
        md: 12,
        sm: 24,
        xs: 24
      })
    },
    itemStyle: {
      type: Object,
      default: () => ({ padding: '5px 8px' })
    },
    modelValue: {
      type: Object,
      required: true
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const formData = ref({ ...props.modelValue })

    watch(formData, (newValue) => {
      emit('update:modelValue', newValue)
    })

    return {
      formData
    }
  }
})
</script>

<style lang="less"></style>
