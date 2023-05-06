/*
 * @Author: zjw
 * @Date: 2022-12-01 12:04:58
 * @FilePath: \vite_cesium\cesium-app\vite.config.js
 * @LastEditTime: 2022-12-01 12:37:19
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import cesium from 'vite-plugin-cesium';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),cesium()]
})
