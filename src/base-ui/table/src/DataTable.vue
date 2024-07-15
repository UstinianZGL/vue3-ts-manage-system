<template>
  <div class="data-table-body">
    <div class="header-part">
      <div class="header-title">{{ tableTitle }}</div>
      <div class="header-handler">
        <slot name="headerHandler"></slot>
      </div>
    </div>
    <el-table :data="userList" border style="width: 100%">
      <el-table-column
        v-if="isTableNeedSelect"
        type="selection"
        width="60"
        align="center"
      />
      <el-table-column
        v-if="isTableNeedShowIndex"
        type="index"
        width="60"
        align="center"
      />
      <template
        v-for="(cloumnItem, itemIndex) in formList"
        :key="cloumnItem.prop + itemIndex"
      >
        <el-table-column v-bind="cloumnItem" align="center">
          <template #default="scope">
            <slot :name="cloumnItem.slotName" :row="scope.row">
              {{ scope.row[cloumnItem.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="footer-part">
      <div class="footer-content">
        <slot name="tableFooter">
          <el-pagination
            :size="size"
            :disabled="disabled"
            :background="background"
            layout="prev, pager, next, jumper"
            :total="1000"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          />
        </slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import type { ComponentSize } from 'element-plus'

export default defineComponent({
  props: {
    userList: {
      type: Object,
      required: true
    },
    formList: {
      type: Array,
      required: true
    },
    isTableNeedShowIndex: {
      type: Boolean,
      default: false
    },
    isTableNeedSelect: {
      type: Boolean,
      default: false
    },
    tableTitle: {
      type: String,
      default: '用户列表'
    }
  },
  setup(props) {
    const currentPage3 = ref(5)
    const pageSize3 = ref(100)
    const size = ref<ComponentSize>('default')
    const background = ref(false)
    const disabled = ref(false)

    const handleSizeChange = (val: number) => {
      console.log(`${val} items per page`)
    }
    const handleCurrentChange = (val: number) => {
      console.log(`current page: ${val}`)
    }
    return {
      currentPage3,
      pageSize3,
      size,
      background,
      disabled,
      handleSizeChange,
      handleCurrentChange
    }
  }
})
</script>

<style lang="less">
.header-part {
  width: 100%;
  display: flex;
  justify-content: space-between;

  .header-title {
    font-size: 18px;
    font-weight: bold;
    color: rgb(79, 142, 124);
    margin-left: 10px;
  }

  .header-handler {
    margin-right: 10px;
  }
}

.footer-part {
  width: 100%;
  display: flex;
  justify-content: end;

  .footer-content {
    padding-right: 15px;
  }
}
</style>
