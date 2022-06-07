import { App } from "vue";
import SvgIcon from "@/components/SvgIcon/index.vue";
import { defineComponent } from 'vue'

// 单个注册组件
// export default {
//     install(app: App) {
//         // 全局注册svg-icon组件
//         app.component('SvgIcon', SvgIcon)
//     }
// }

/*
 **全局异步按需注册组件
 */
import { defineAsyncComponent } from "vue";
const components = import.meta.glob("./**/*.vue"); // 异步方式

export default (app: App) => {
    for (const [key, value] of Object.entries(components)) {
        // console.log(key, value);
        const name = key.split("/")[1];
        app.component(name, defineAsyncComponent(value as ReturnType<typeof defineComponent>));
    }
}
