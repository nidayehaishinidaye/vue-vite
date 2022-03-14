<!--
 * @Author: zjw
 * @Date: 2022-02-09 14:26:58
 * @FilePath: \vite-project\src\components\HelloWorld.vue
 * @LastEditTime: 2022-02-16 10:10:52
-->
<script setup>
import { ref } from 'vue'
import classes from '../assets/css/example.module.css'

// document.getElementById('foo').className = classes.red
defineProps({
  msg: String
})

console.log("hello")
const msg = "helloworld"
const count = ref(0)
</script>


<template>
  <h1>{{ msg }}</h1>

  <p id="foo" class="">
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
  <h1>使用文本插值: {{rawHtml}}</h1>
  <h1>使用 v-html:<span v-html="rawHtml"></span></h1>
</template>
<script>
export default {
  data(){
    return{
      rawHtml:"<span style='color: red'></span>"
    }
  }
}
</script>
<style scoped>
a {
  color: #42b983;
}
</style>
