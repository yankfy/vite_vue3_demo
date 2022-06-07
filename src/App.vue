<template>
  <!--<img alt="Vue logo" src="./assets/logo.png"/>-->
  <!--<HelloWorld msg="Hello Vue 3 + Vite"/>-->
  <div id="app">
    <el-config-provider :size="size">
      <router-view></router-view>
    </el-config-provider>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useStore } from './store';

const store = useStore()
const size = computed(() => store.getters.size)
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
