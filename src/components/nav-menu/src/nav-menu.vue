<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="~@/assets/img/logo.svg" alt="logo" />
      <span class="title" v-if="!isCollapse">通用型管理系统</span>
    </div>
    <el-menu
      default-active="2"
      class="el-menu-vertical"
      background-color="#0c2135"
      text-color="#fff"
      active-text-color="#40a9ff"
      :collapse="isCollapse"
    >
      <template v-for="(item, index) in userMenus" :key="item.id">
        <template v-if="item.type === 1">
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <!-- <i v-if="item.icon" :class="item.icon"></i> -->
              <el-icon v-if="index === 0"><monitor /></el-icon>
              <el-icon v-else-if="index === 1"><setting /></el-icon>
              <el-icon v-else-if="index === 2"><shopping-bag /></el-icon>
              <el-icon v-else><chat-line-round /></el-icon>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="subitem in item.children" :key="subitem.id">
              <el-menu-item :index="subitem.id + ''">
                <i v-if="subitem.icon" :class="subitem.icon"></i>
                <span>{{ subitem.name }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <template v-else-if="item.type === 2">
          <el-menu-item :index="item.id + ''">
            <i v-if="item.icon" :class="item.icon"></i>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import {
  Monitor,
  Setting,
  ShoppingBag,
  ChatLineRound
} from '@element-plus/icons-vue'
import { userStore } from '@/store'

export default defineComponent({
  props: {
    isCollapse: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Monitor,
    Setting,
    ShoppingBag,
    ChatLineRound
  },
  setup() {
    const store = userStore()
    const userMenus = computed(() => store.state.login.userMenus)
    return { userMenus }
  }
})
</script>

<style scoped lang="less">
.nav-menu {
  height: 100%;
  background-color: #001529;
  font-family: pingfangBold;

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

  // 目录
  .el-submenu {
    background-color: #001529 !important;
    // 二级菜单 ( 默认背景 )
    .el-menu-item {
      padding-left: 50px !important;
      background-color: #0c2135 !important;
    }
  }

  ::v-deep .el-submenu__title {
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
