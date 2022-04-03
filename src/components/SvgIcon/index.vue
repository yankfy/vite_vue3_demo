<template>
  <!-- 如果iconClass是带协议的图标链接 则通过style属性方式渲染-->
  <div
      class="svg-icon svg-external-icon"
      v-if="isExt"
      :style="styleExternalIcon"
      v-bind="$attrs"
  ></div>
  <!-- SVG icon 通过名称使用 -->
  <svg v-else aria-hidden="true" @click="handleSvg" v-bind="$attrs" :class="svgClass">
    <!--
       SVG中的use元素可以调用其他SVG文件的元素，<use xlink:href="#symbolId"></use>
    -->
    <use :href="symbolId" :fill="color"/>
  </svg>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import * as events from "events";
import { isExternal } from "@/utils/validate";

const props = withDefaults(defineProps<{ prefix?: string, name: string, color?: string, className?: string }>(), {
  prefix: "icon",
  color: "#333333"
})
const isExt = computed(() => isExternal(props.name || ''))
const symbolId = computed(() => `#${props.prefix}-${props.name}`)
const handleSvg = (event: events) => {
  // console.log("symbolId", symbolId);
  console.log("handleSvg", event);
}
// 添加类名 props.className外部传入自定义类名
const svgClass = computed(() =>
    props.name ? `svg-icon ${props.className}` : 'svg-icon'
)
// 如果name是带协议的图标链接 则通过style css属性方式渲染
const styleExternalIcon = computed(() => ({
  mask: `url(${props.name}) no-repeat 50% 50%`,
  '-webkit-mask': `url(${props.name}) no-repeat 50% 50%`
}))
</script>

<style>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.svg-external-icon {
  background-color: currentColor;
  mask-size: cover !important;
  display: inline-block;
}
</style>
