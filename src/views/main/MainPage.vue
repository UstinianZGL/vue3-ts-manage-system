<template>
  <div class="main-page">
    <el-container>
      <el-aside :width="isCollapse ? '60px' : '210px'">
        <nav-menu :collapse="isCollapse"></nav-menu>
      </el-aside>
      <el-container>
        <el-header>
          <nav-header @foldChange="dealFoldChange"></nav-header>
        </el-header>
        <el-main class="page-content">
          <div class="page-info">
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import NavMenu from '@/components/nav-menu/index'
import NavHeader from '@/components/nav-header/src/NavHeader.vue'
export default defineComponent({
  components: {
    NavMenu,
    NavHeader
  },
  setup() {
    let isCollapse = ref(false)
    const dealFoldChange = (isFold: boolean) => {
      isCollapse.value = isFold
    }
    return {
      isCollapse,
      dealFoldChange
    }
  }
})
</script>

<style lang="less">
.el-container {
  height: 100vh;
  width: 100vw;
}

.page-content {
  height: calc(100% - 48px);

  .page-info {
    background-color: #fff;
    border-radius: 5px;
  }
}

.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  height: 100%;
  background-color: #d3dce6;
  color: #333;
  overflow-x: hidden;
  overflow-y: auto;
  line-height: 200px;
  text-align: left;
  cursor: pointer;
  background-color: #001529;
  transition: width 0.3s linear;
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */

  &::-webkit-scrollbar {
    display: none;
  }
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
