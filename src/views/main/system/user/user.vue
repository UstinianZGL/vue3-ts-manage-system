<template>
  <div class="system-user-body">
    <page-search :searchFormConfig="searchFormConfig"></page-search>

    <div class="user-content">
      <data-table
        :userList="userList"
        :formList="formList"
        :isTableNeedShowIndex="isTableNeedShowIndex"
        :isTableNeedSelect="isTableNeedSelect"
      >
        <template #headerHandler>
          <el-button type="primary">新建用户</el-button>
        </template>
        <template #status="scope">
          <el-button
            plain
            size="mini"
            :type="scope.row.enable ? 'success' : 'danger'"
          >
            {{ scope.row.enable ? '启用' : '禁用' }}
          </el-button>
        </template>
        <template #createAt="scope">
          <span>{{ $filters.formatTime(scope.row.createAt) }}</span>
        </template>
        <template #updateAt="scope">
          <span>{{ $filters.formatTime(scope.row.updateAt) }}</span>
        </template>
        <template #editBtn="scope">
          <div class="handle-buttons">
            <el-button type="primary" size="mini" plain>
              <el-icon><Paperclip /></el-icon>
              编辑
            </el-button>

            <el-button type="warning" size="mini" plain>
              <el-icon><Delete /></el-icon>
              删除
            </el-button>
          </div>
        </template>
      </data-table>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref } from 'vue'
import PageSearch from '@/components/page-search'
import { searchFormConfig } from './config/search-config'
import { useStore } from '@/store/index'
import DataTable from '@/base-ui/table/index'

export default defineComponent({
  name: 'role',
  components: {
    PageSearch,
    DataTable
  },
  setup() {
    const store = useStore()
    store.dispatch('system/getPageListUserAction', {
      requestUrl: '/users/list',
      queryData: {
        offset: 0,
        size: 10
      }
    })

    const userList = computed(() => {
      return store.state.system.userList
    })

    const userCount = computed(() => {
      return store.state.system.userCount
    })

    const formList = [
      {
        prop: 'name',
        label: '用户姓名',
        minWidth: '100'
      },
      {
        prop: 'realname',
        label: '真实姓名',
        minWidth: '100'
      },
      {
        prop: 'cellphone',
        label: '手机号码',
        minWidth: '150'
      },
      {
        prop: 'enable',
        label: '状态',
        minWidth: '100',
        slotName: 'status'
      },
      {
        prop: 'createAt',
        label: '创建时间',
        minWidth: '250',
        slotName: 'createAt'
      },
      {
        prop: 'updateAt',
        label: '更新时间',
        minWidth: '250',
        slotName: 'updateAt'
      },
      {
        prop: 'editBtn',
        label: '操作',
        minWidth: '250',
        slotName: 'editBtn'
      }
    ]

    let isTableNeedShowIndex = ref(false)
    let isTableNeedSelect = ref(true)

    return {
      searchFormConfig,
      userList,
      userCount,
      formList,
      isTableNeedShowIndex,
      isTableNeedSelect
    }
  }
})
</script>

<style scoped>
.user-content {
  width: 100%;
  /* display: flex; */
  /* justify-content: center; */
  border-top: 15px solid #f5efef;
}
</style>
