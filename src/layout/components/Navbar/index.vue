<template>
  <div class="navbar">
    <Hamburger @toggleClick="toggleSidebar" :is-active="sidebar.opened"/>
    <Breadcrumb/>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import Breadcrumb from '@/components/Breadcrumb/index.vue'
import Hamburger from '@/components/Hamburger/index.vue'
import { useStore } from "@/store";

const store = useStore();
const toggleSidebar = () => {
  store.dispatch('app/toggleSidebar')
}

// 从getters 中获取sidebar
const sidebar = computed(() => store.getters.sidebar)

</script>
