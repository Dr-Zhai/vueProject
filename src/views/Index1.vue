<!--组合式写法-->
<script setup>
import {ref} from "vue";

const name = "Hello VUE3"
const str = ref("Hello VUE3.0")
const num = ref(56)
const url = ref("https://www.baidu.com")
const aa = ref("one")
const name4 = "你好,jack"
const arr = {two: 'two', three: 'three'}

//声明函数
const dian = () => {
  alert("你点到我了");
}
const m1 = () => {
  alert("鼠标移入");
}
const dian1 = (i) => {
  alert(i);
}
</script>

<template>
  <h1>{{ name }}</h1>
  <h1 v-text="str"></h1>
  <h1 v-html="num"></h1>
  <!--v-bind指令绑定对象-->
  <a v-bind:href="url">百度一下</a>
  <!--简写方式-->
  <a :href="url">baidu</a>
  <div :class="aa" @mouseover="m1"></div>
  <div :class="arr">{{ name4 }}</div>
  <!-- v-on事件绑定指令 -->
  <button v-on:click="dian">点我</button>
  <!--简写方式-->
  <button @click="dian">点我</button>
  <button @click="dian1(1)">带参函数</button>
</template>

<style scoped>
.one {
  width: 100px;
  height: 100px;
  background-color: green;
  border: 1px solid red;
}

.two {
  color: blue;
}

.three {
  width: 100px;
  height: 100px;
  border: 1px solid red;
}
</style>
