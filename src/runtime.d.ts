// 挂载到vue实例上
import { ElMessage, ElMessageBox, ElNotification } from "element-plus";
import { Size } from './plugins/element'

// vue实例上挂载属性类型声明
declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $message: typeof ElMessage;
        $notification: typeof ElNotification;
        $confirm: typeof ElMessageBox.confirm;
        $alert: typeof ElMessageBox.alert;
        $prompt: typeof ElMessageBox.prompt;
        $ELEMENT: {
            size: Size;
        }
    }
}

// *** 自定义类型声明不能放在env.d.ts里，会导致.vue文件不能识别。***
