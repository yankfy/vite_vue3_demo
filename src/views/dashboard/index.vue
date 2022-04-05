<template>
  <div>
    <h1>Dashboard page</h1>
    <svg-icon name="eye" color="blue"></svg-icon>
    <svg-icon name="eye-open" color="gray" className="custom-class" @click="sayHi"></svg-icon>
  </div>
</template>

<script lang="ts" setup>
import { getCurrentInstance } from "vue";

const { proxy } = getCurrentInstance()!  // !:变量后使用 ！：表示类型推断排除null、undefined

const sayHi = () => {
  proxy?.$message.success("hi svg")
  console.log('hi svg')
}
</script>
<style lang="scss">
.custom-class { // 自定义样式404
  font-size: 200px;
  color: green;
}
</style>
