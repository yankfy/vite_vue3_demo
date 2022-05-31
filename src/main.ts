import { createApp } from 'vue'
// 在插件中导入use了
// import ElementPlus from 'element-plus'
import App from './App.vue'
import router from "@/router";
import store, { key } from '@/store'
// 初始化css，重置css默认样式
import "normalize.css/normalize.css"
import 'element-plus/theme-chalk/index.css';
import '@/styles/index.scss';
// element-plus
import installElementPlus from './plugins/element'
import GlobalComponents from '@/components/GlobalComponents'

import 'virtual:svg-icons-register'

const app = createApp(App);
// app.use(ElementPlus)
app.use(installElementPlus)
app.use(router)
app.use(store, key)
app.use(GlobalComponents)
app.mount('#app')