import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'
import router from "@/router";
import store from '@/store'
// 初始化css，重置css默认样式
import "normalize.css/normalize.css"
import '@/styles/index.scss';

const app = createApp(App);
app.use(ElementPlus)
app.use(router)
app.use(store)
app.mount('#app')
