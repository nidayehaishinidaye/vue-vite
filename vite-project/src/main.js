/*
 * @Author: zjw
 * @Date: 2022-02-09 14:26:58
 * @FilePath: \vite-project\src\main.js
 * @LastEditTime: 2022-02-10 14:24:39
 */
import { createApp } from 'vue'
import App from './App.vue'
// import { createStore } from 'vuex'

// const store = createStore({
//   state () {
//     return {
//       count: 0
//     }
//   },
//   mutations: {
//     increment (state) {
//       state.count++
//     }
//   }
// })

// store.commit('increment')

// console.log(store.state.count) // -> 1
// app.config.errorHandler = (err) => {
//   /* 处理错误 */
//   console.log("出现错误",err)
// }
createApp(App).mount('#app')


