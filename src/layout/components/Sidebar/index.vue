<template>
  <div>
    <!-- 测试展开收起 -->
    <div class="is-collapse" @click="isCollapse = !isCollapse">
      <svg-icon v-if="isCollapse" color="#fdfdff" name="eye-open"></svg-icon>
      <svg-icon v-if="!isCollapse" color="#fdfdff" name="eye"></svg-icon>
    </div>

    <el-menu
        :active-text-color="scssVariables.menuActiveText"
        :background-color="scssVariables.menuBg"
        :collapse="isCollapse"
        :collapse-transition="true"
        :default-active="activeMenu"
        :text-color="scssVariables.menuText"
        class="sidebar-container-menu"
        mode="vertical"
        @select="handleSelectMenu"
    >
      <sidebar-item v-for="routers in menuRoutes" :key="routers.path" :base-path="routers.path" :item="routers">
      </sidebar-item>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import { routes } from "@/router";
// 导入scss变量在组件中使用
import variables from "@/styles/variables.scss";
// el-menu-item封装
import SidebarItem from "./SidebarItem.vue";

const route = useRoute();
// 根据路由路径 对应 当前激活的菜单 页面刷新后 激活当前路由匹配的菜单
const activeMenu = computed(() => {
  const { path, meta } = route;
  // 可根据meta.activeMenu 指定，当路由激活时，让哪个菜单高亮
  if (meta.activeMenu) {
    return meta.activeMenu
  }
  return path;
});
// scss变量 不用toRefs原因 缺点在这里 variables里面变量属性感觉来源不明确
const scssVariables = computed(() => variables);
// 菜单展开收起状态 后面会放store里
const isCollapse = ref(true);
// 渲染路由
const menuRoutes = computed(() => routes);
// 推荐ref 和 toRefs 区别 https://dujian.blog.csdn.net/article/details/115840840

// 菜单选中后的回调
const handleSelectMenu = (index: string, indexPath: string[]) => {
  console.log(index, indexPath)
}
</script>

<style lang="scss">
.is-collapse {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  background: #023b77;
  cursor: pointer;

  .svg-icon {
    color: #fdfdff;
    width: 1.5em;
    height: 1.5em;
  }
}
</style>
