<template>
    <div class="fullscreen-icon">
        <svg-icon :name="isFullscreen ? 'exit-fullscreen' : 'fullscreen'" color="blue" @click="handleClick"></svg-icon>
    </div>
</template>

<script lang="ts" setup>
import { defineComponent, getCurrentInstance, onMounted, ref } from "vue";
import screenfull from "screenfull";

const { proxy } = getCurrentInstance()!;
const isFullscreen = ref(false);
const handleClick = () => {
    if (screenfull.isEnabled) {
        // 浏览器是否允许全屏模式
        screenfull.toggle();
        return;
    }
    return proxy?.$message({
        message: "your browser is not work",
        type: "warning",
    });
};
const change = () =>{
    // 更新当前全屏状态，根据组昂泰切换对应图标
    isFullscreen.value = screenfull.isFullscreen
}

const init = () =>{
    // 浏览器是否允许全局模式
    if (screenfull.isEnabled) {
        // 舰艇全屏切换状态
        screenfull.on('change',change)
    }
}

onMounted(()=>{
    init()
})

</script>

<style lang="scss" scoped>
.fullscreen-icon{
      cursor: pointer;
  }
</style>