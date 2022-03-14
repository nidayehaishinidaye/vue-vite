/*
 * @Author: zjw
 * @Date: 2022-02-09 14:45:30
 * @FilePath: \vite-project\src\store\index.js
 * @LastEditTime: 2022-02-09 14:50:22
 */
// import { createApp } from 'vue'
import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      count: 0
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})
export default store;