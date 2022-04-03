import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src')
        }
    },
    plugins: [
        vue(),
        createSvgIconsPlugin({
            // 中转路径在你的src里的svg存放文件 : https://github.com/vbenjs/vite-plugin-svg-icons/tree/main#readme
            iconDirs: [resolve(process.cwd(), 'src/icons')],
            symbolId: 'icon-[dir]-[name]',
            customDomId: '__svg__icons__dom__',
        }),
    ]
})
