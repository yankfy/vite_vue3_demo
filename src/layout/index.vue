<template>
  <div class="app-wrapper">
    <div class="sidebar-container">
      <Sidebar></Sidebar>
    </div>
    <div class="main-container">
      <div class="header">
        <div class="navbar">
          <Navbar/>
        </div>
        <div class="tags-view">tagsview</div>
      </div>
      <!--<div class="app-main">-->
      <!--  <h2>app main</h2>-->
      <!--  <router-view></router-view>-->
      <!--</div>-->
      <!-- AppMain router-view 缓存路由-->
      <app-main/>
    </div>
  </div>
</template>

<script setup lang="ts">
import Sidebar from './components/Sidebar/index.vue'
import AppMain from './components/appMain.vue'
import Navbar from './components/Navbar/index.vue'</script>

<style lang="scss" scoped>
.app-wrapper {
  display: flex;
  width: 100%;
  height: 100%;

  .main-container {
    flex: 1;
    display: flex;
    flex-direction: column;

    .header {
      //background: cyan;

      .navbar {
        display: flex;
        height: 50px;
        //background: #1890ff;
      }

      .tags-view {
        height: 34px;
        background: #12efff;
      }
    }

    .app-main {
      /* 50= navbar  50  如果有tagsview + 34  */
      min-height: calc(100vh - 84px);
      background: #fafafa;
    }
  }
}
</style>
