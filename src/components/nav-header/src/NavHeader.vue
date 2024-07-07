<template>
  <div class="nav-header">
    <el-icon class="fold-menu" @click="handleFoldClick">
      <template v-if="isFold">
        <DArrowRight />
      </template>
      <template v-else>
        <DArrowLeft />
      </template>
    </el-icon>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  emits: ['foldChange'],
  setup(props, { emit }) {
    const isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }

    return {
      isFold,
      handleFoldClick
    }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  text-align: left;
  .fold-menu {
    font-size: 30px;
    cursor: pointer;
    margin-top: 13px;
  }
}
</style>
