<template>
    <el-dropdown>
        <div class="avatar-warpper">
            <el-avatar size="small"
                slot="reference"
                :src="avatarSrc">
                <span slot="text">{{ name }}</span>
            </el-avatar>
        </div>
        <template #dropdown>
            <el-dropdown-menu>
                <router-link to="/">
                    <el-dropdown-item>首页</el-dropdown-item>
                </router-link>
                <router-link to="/system/user">
                    <el-dropdown-item>个人设置</el-dropdown-item>
                </router-link>
                <el-dropdown-item divided
                    @click="logout">
                    <span style="display: block;">退出登录</span>
                </el-dropdown-item>
            </el-dropdown-menu>
        </template>
        <!-- <el-dropdown-menu slot="dropdown">
            <router-link to="/">
                <el-dropdown-item>首页</el-dropdown-item>
            </router-link>
            <router-link to="/profile/index">
                <el-dropdown-item>个人设置</el-dropdown-item>
            </router-link>
            <el-dropdown-item divided
                @click="logout">
                <span style="display: block;">退出登录</span>
            </el-dropdown-item>
        </el-dropdown-menu> -->
    </el-dropdown>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router'
import avatarSrc from '@/assets/logo.png'
import { ref } from 'vue';
const name = ref('name');
const logout = () => {
    console.log('logout');
}
</script>

<style lang="scss" scoped>
</style>