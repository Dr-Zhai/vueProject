<script>
//选项式写法
export default {
  data() {
    return {
      name: "Hello ROSE",
      str: "<p>Hello 小明</p>"
    }
  }
}
</script>

<template>
  <!--插值语法-->
  <h1>{{ name }}</h1>
  <!--  v-text指令使用-->
  <h1 v-text="name"></h1>
  <h1 v-text="str"></h1>
  <!--  v-html指令使用-->
  <h1 v-html="name"></h1>
  <h1 class="aa" v-html="str"></h1>
</template>

<style scoped>
.aa {
  color: green;
  font-family: "华文楷体", sans-serif;
}
</style>
