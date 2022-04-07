<template>
  <div v-if="!item.meta || item.meta?.hidden" class="sidebar-item-container">
    <!-- 一个路由下只有一个子路由 -->
    <template
        v-if="theOnlyOneChildRoute && (!theOnlyOneChildRoute?.children || theOnlyOneChildRoute?.noShowingChildren)">
      <sidebar-item-link
          v-if="theOnlyOneChildRoute?.meta"
          :to="resolvePath(theOnlyOneChildRoute?.path)">
        <el-menu-item
            :index="resolvePath(theOnlyOneChildRoute?.path)"
        >
          <svg-icon
              v-if="icon"
              :name="theOnlyOneChildRoute?.meta.icon"
              class-name="menu-icon"
          ></svg-icon>
          <template #title>
            <span class="submenu-title">{{ theOnlyOneChildRoute?.meta.title }}</span>
          </template>
        </el-menu-item>
      </sidebar-item-link>
    </template>
    <!--  多个子路由-->
    <el-sub-menu
        v-else
        :index="resolvePath(item.path)"
        popper-append-to-body>
      <template #title>
        <svg-icon
            v-if="item.meta.icon"
            :name="item.meta.icon"
            class="menu-icon"
        ></svg-icon>
        <span class="submenu-title">{{ item.meta.title }}</span>
      </template>
      <sidebar-item
          v-for="child in item.children"
          :key="child.path"
          :base-path="resolvePath(child.path)"
          :is-nest="true"
          :item="child"
      >
      </sidebar-item>
    </el-sub-menu>
  </div>
</template>

<script lang="ts" setup>
import { computed, PropType, reactive } from "vue";
import { RouteRecordRaw } from "vue-router";
import path from 'path-browserify'
import SidebarItemLink from "@/layout/components/Sidebar/SidebarItemLink.vue";
import { isExternal } from "@/utils/validate";

const props = defineProps({ item: Object as PropType<RouteRecordRaw>, basePath: String });
const { item } = reactive(props);

// 子路由数量
const showingChildNumber = computed(() => {
  // hidden路由排除掉 只算可渲染子路由
  const children = (props.item!.children || []).filter(child => {
    // hidden 属性控制路由是否渲染成菜单，像login/404 不需要渲染成菜单
    return !(child.meta && child.meta.hidden);
  })
  return children.length
})

// 要渲染的单个路由 如果该路由只有一个子路由 默认直接渲染这个子路由
// theOnlyOneChildRoute直接通过el-menu-item组件来渲染
const theOnlyOneChildRoute = computed(() => {
  // 多个children时 直接return null 多children需要用el-submenu来渲染并递归
  if (showingChildNumber.value > 1) {
    return null
  }

  // 只有一个子路由 还要筛选路由meta里有无hidden属性 hidden：true则过滤出去 不用管
  // 路由meta里我们会配置hidden属性表示不渲染成菜单，比如login 401 404页面是不渲染成菜单的
  if (item!.children) {  // 如果toRefs 包装的props, 需要使用item.value 去拿children
    for (const child of item!.children) {
      // hidden 属性控制路由是否渲染成菜单，像login/404 不需要渲染成菜单
      if (!child.meta || !child.meta.hidden) {
        return child
      }
    }
  }

  // showingChildNumber === 0 无可渲染的子路由 （可能有子路由 hidden属性为true）
  // 无可渲染children时 就渲染当前父路由item
  return {
    ...item!,
    path: '', // resolvePath避免resolve拼接时 拼接重复
    noShowingChildren: true // 无可渲染children
  }
})

// menu icon
const icon = computed(() => {
  // 子路由 如果没有icon就用父路由的 // 获取computed 后的值 也使用.value
  return theOnlyOneChildRoute.value?.meta?.icon || (item!.meta && item!.meta.icon)
})

// 利用path.resolve 根据父路径+子路径 解析成正确路径 子路径可能是相对的
// resolvePath在模板中使用
const resolvePath = (childPath: string) => {
  // 如果是协议的外链
  if (isExternal(childPath)) {
    return childPath
  }
  return path.resolve(props.basePath!, childPath)
}

</script>

<style lang="scss">
.sidebar-item-container {
  .menu-icon {
    //margin-right: 16px;
    //margin-left: 5px;
    vertical-align: middle;
  }
}
</style>
