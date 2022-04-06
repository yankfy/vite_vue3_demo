<template>
  <div class="sidebar-item-container">
    <el-menu-item index="1">
      <svg-icon className="menu-icon" name="eye"></svg-icon>
      <template #title>
        <span style="margin: 8px">Dashoard</span>
      </template>
    </el-menu-item>
  </div>
</template>

<!--<script lang="ts">-->
<!--import { defineComponent } from 'vue'-->

<!--export default defineComponent({-->
<!--  name: 'SidebarItem'-->
<!--})-->
<!--</script>-->

<script lang="ts" setup>
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
