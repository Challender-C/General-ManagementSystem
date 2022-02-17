<template>
  <div>
    <el-icon class="expand" v-if="isFold" @click="handleFoldClick"
      ><expand
    /></el-icon>
    <el-icon class="fold" v-else @click="handleFoldClick"><fold /></el-icon>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Expand, Fold } from '@element-plus/icons-vue'
export default defineComponent({
  emits: ['foldChange'],
  components: {
    Expand,
    Fold
  },
  setup(props, { emit }) {
    let isFold = ref(false)
    const handleFoldClick = () => {
      isFold.value = !isFold.value
      emit('foldChange', isFold.value)
    }
    return { isFold, handleFoldClick }
  }
})
</script>

<style scoped lang="less">
.expand,
.fold {
  transform: scale(2);
  &:hover {
    cursor: pointer;
  }
}
</style>
