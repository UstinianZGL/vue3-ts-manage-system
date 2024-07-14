<template>
  <div class="system-user-body">
    <page-search :searchFormConfig="searchFormConfig"></page-search>

    <div class="user-content">
      <el-table :data="userList" border style="width: 100%">
        <el-table-column type="selection" width="60" align="center" />
        <el-table-column type="index" width="60" align="center" />
        <template
          v-for="(cloumnItem, itemIndex) in formList"
          :key="cloumnItem.prop + itemIndex"
        >
          <el-table-column v-bind="cloumnItem" align="center" />
        </template>
      </el-table>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from 'vue'
import PageSearch from '@/components/page-search'
import { searchFormConfig } from './config/search-config'
import { useStore } from '@/store/index'

export default defineComponent({
  name: 'role',
  components: {
    PageSearch
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
        minWidth: '100'
      },
      {
        prop: 'enable',
        label: '状态',
        minWidth: '50'
      },
      {
        prop: 'createAt',
        label: '创建时间',
        minWidth: '250'
      },
      {
        prop: 'updateAt',
        label: '更新时间',
        minWidth: '250'
      }
    ]

    return {
      searchFormConfig,
      userList,
      userCount,
      formList
    }
  }
})
</script>

<style scoped></style>
