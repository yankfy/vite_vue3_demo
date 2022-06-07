<template>
  <div class="navbar-header">
    <Hamburger @toggleClick="toggleSidebar"
      :is-active="sidebar.opened" />
    <Breadcrumb />
    <div class="right-menu">
      <!-- 全屏组件 -->
      <Screenfull id="screenfull"
        class="right-menu-item hover-effect" />
      <!-- <el-tooltip content="Global Size"
        effect="dark"
        placement="bottom"> -->
        <SizeSelect class="right-menu-item hover-effect"></SizeSelect>
      <!-- </el-tooltip> -->
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import Breadcrumb from '@/components/Breadcrumb/index.vue'
import Hamburger from '@/components/Hamburger/index.vue'
import { useStore } from "@/store";
import Screenfull from "@/components/Screenfull/index.vue";

const store = useStore();
const toggleSidebar = () => {
  store.dispatch('app/toggleSidebar')
}

// 从getters 中获取sidebar
const sidebar = computed(() => store.getters.sidebar)

</script>

<style lang="scss" scoped>
.navbar-header {
  display: flex;
  width: 100%;

  .right-menu {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 15px;
    &-item{
      padding: 0 8px;
        font-size: 18px;
        color: #5a5e66;
        vertical-align: text-bottom;
        &.hover-effect {
          cursor: pointer;
          transition: background .3s;

          &:hover {
            background: rgba(0, 0, 0, .025);
          }
        }
    }
  }
}
</style>
