/*
 * @Author: zjw
 * @Date: 2022-02-09 14:26:58
 * @FilePath: \vite-project\vite.config.js
 * @LastEditTime: 2022-02-09 16:52:03
 */
import { defineConfig } from 'vite'
//vite插件， 添加到vite.config.js 配置文件中的 plugins 数组中
// import legacy from '@vitejs/plugin-legacy'
//
// import typescript2 from 'rollup-plugin-typescript2'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue()
    //
    // legacy({
    //   targets: ['defaults', 'not IE 11']
    // }),
    // {
    //   //默认情况下插件在开发 (serve) 和生产 (build) 模式中都会调用。
    //   //如果插件在服务或构建期间按需使用，请使用 apply 属性指明它们仅在 'build' 或 'serve' 模式时调用：
    //   ...typescript2(),
    //   apply: 'build'
    // }
  ]
})
