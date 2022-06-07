<template>
  <div>
    <h1>Dashboard page</h1>
    缓存测试 <input type="text">
    <svg-icon name="eye" color="blue"></svg-icon>
    <svg-icon class-name="custom-class" color="gray" name="eye-open" @click="sayHi"></svg-icon>
    <el-button type="primary">Size改变{{size}}</el-button>
    <!-- <el-button type="primary" :size="size">Size改变{{size}}</el-button> -->
  </div>
</template>

<script lang="ts" setup>
import {useStore} from "@/store";
import { computed, getCurrentInstance } from "vue";

const { proxy } = getCurrentInstance()!  // !:变量后使用 ！：表示类型推断排除null、undefined

const store = useStore()
const size = computed(() => store.getters.size)
const sayHi = () => {
  // router.push('/guide') 测试路由跳转
  proxy?.$message.success("hi svg")
  console.log('hi svg')
}
</script>
<style lang="scss">
.custom-class { // 自定义样式404
  font-size: 200px;
  color: #cccccc;
}
</style>
