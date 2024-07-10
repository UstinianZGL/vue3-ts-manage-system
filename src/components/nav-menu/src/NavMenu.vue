<template>
  <div class="nav-menu-body">
    <div class="nav-menu-head">
      <img class="logo-image" src="~@/assets/img/logo.svg" alt="logo图片" />
      <template v-if="!collapse">
        <span>Vue3+TS</span>
      </template>
    </div>
    <el-menu
      default-active="2"
      class="el-menu-vertical nav-menu-part"
      :collapse="collapse"
      background-color="#0c2135"
      text-color="#b7bdc3"
      active-text-color="#0a60bd"
    >
      <template v-for="(item, index) in userMenu" :key="item.id">
        <!-- 表示当前是一级目录 存在二级目录 -->
        <template v-if="item.type == 1">
          <el-sub-menu :index="item.id + ''">
            <template v-slot:title>
              <el-icon><Postcard /></el-icon>
              <span slot="title">{{ item.name }}</span>
            </template>
            <template
              v-for="(childItem, childIndex) in item.children"
              :key="childItem.id"
            >
              <el-menu-item
                :index="childItem.id + ''"
                @click="selectPartRoute(childItem)"
                >{{ childItem.name }}</el-menu-item
              >
            </template>
          </el-sub-menu>
        </template>
        <!-- 表示只存在二级目录 -->
        <template v-else-if="item.type == 2">
          <el-menu-item
            :index="item.id + ''"
            @click="selectPartRoute(childItem)"
          >
            <i :class="item.icon"></i>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store/index'
import router from '@/router'

export default defineComponent({
  props: {
    collapse: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const store = useStore()
    const userMenu = computed(() => store.state.login.userMenu.data)
    const selectPartRoute = (selectItem: any) => {
      router.push(selectItem.url)
    }

    return {
      userMenu,
      selectPartRoute
    }
  }
})
</script>

<style lang="less">
.nav-menu-head {
  display: flex;
  height: 28px;
  padding: 12px 10px 8px 10px;
  align-items: center;
  .logo-image {
    width: 30px;
    height: 30px;
  }
}

.nav-menu-body {
  height: 100%;

  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .img {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
    }
  }

  .el-menu {
    border-right: none;
  }

  .nav-menu-part {
    // width: 100px;
  }

  // 目录
  .el-sub-menu {
    // width: 200px;
    background-color: #1c5992 !important;
    // 二级菜单 ( 默认背景 )
    .el-menu-item {
      padding-left: 50px !important;
      background-color: #0c2135 !important;
    }
  }

  ::v-deep .el-sub-menu__title {
    background-color: #001529 !important;
  }

  // hover 高亮
  .el-menu-item:hover {
    color: #fff !important; // 菜单
  }

  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #0a60bd !important;
  }
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 48px);
}
</style>
