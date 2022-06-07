import { createRouter, createWebHashHistory, RouteMeta, RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

export type RouteRecordRawMeta = RouteRecordRaw & { meta?: RouteMeta }

// 看作是异步获取路由
export const asyncRoutes: Array<RouteRecordRawMeta> = [
    {
        path: '/documentation',
        component: Layout, // 布局组件作为一级路由
        redirect: '/documentation/index',
        children: [
            {
                path: 'index',
                name: 'Documentation',
                component: () => import(/* webpackChunkName: "documentation" */ '@/views/documentation/index.vue'),
                meta: {
                    title: 'Documentation',
                    icon: 'documentation'
                }
            }
        ]
    },
    {
        path: '/guide',
        component: Layout,
        redirect: '/guide/index',
        children: [
            {
                path: 'index',
                name: 'Guide',
                component: () => import(/* webpackChunkName: "guide" */ '@/views/guide/index.vue'),
                meta: {
                    title: 'Guide',
                    icon: 'guide',
                    // 当guide路由激活时，高亮菜单时 documentation/index 菜单
                    activeMenu: '/documentation/index'
                }
            }
        ]
    },
    {
        path: '/system',
        component: Layout,
        redirect: '/system/user',
        meta: {
            title: 'System',
            icon: 'el-setting',
            alwaysShow: true // 根路由始终展示，哪怕只有一个子路由
        },
        children: [
            {
                path: 'menu',
                component: () => import(/* webpackChunkName: "menu" */ '@/views/system/menu.vue'),
                meta: {
                    title: 'Menu Management',
                    icon: 'list',
                    hidden: true,
                }
            },
            {
                path: 'role',
                component: () => import(/* webpackChunkName: "role" */ '@/views/system/role.vue'),
                meta: {
                    title: 'Role Management',
                    icon: 'list',
                    hidden: true, // 菜单栏不显示
                }
            },
            {
                path: 'user',
                component: () => import(/* webpackChunkName: "user" */ '@/views/system/user.vue'),
                meta: {
                    title: 'User Management',
                    icon: 'list',
                }
            }
        ]
    },
    { // 外链路由
        path: '/external-link',
        component: Layout,
        children: [
            {
                path: 'https://www.baidu.com/',
                redirect: '/',
                meta: {
                    title: 'External Link',
                    icon: 'link'
                }
            }
        ]
    }
]


export const constantRoutes: Array<RouteRecordRawMeta> = [
    {
        path: '/',
        component: Layout,
        redirect: '/dashboard',
        children: [
            {
                path: 'dashboard',
                name: 'Dashboard',
                component: () => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard/index.vue'),
                meta: {
                    title: 'Dashboard',
                    icon: 'el-opportunity',
                }
            }
        ]
    },
    {
        path: '/redirect',
        component: Layout,
        meta: {
          hidden: true
        },
        children: [
          {  // 带参数的动态路由正则匹配 文档说明 
            // https://next.router.vuejs.org/zh/guide/essentials/route-matching-syntax.html#%E5%8F%AF%E9%87%8D%E5%A4%8D%E7%9A%84%E5%8F%82%E6%95%B0
            path: '/redirect/:path(.*)', // 要匹配多级路由 应该加*号
            component: () => import('@/views/redirect/index.vue')
          }
        ]
      },
]

export const routes = [
    ...constantRoutes, // 解构路由
    ...asyncRoutes
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
