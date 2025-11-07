<!--template 用于存放html静态内容-->
<template>
  <!--  {{name}} vue中的插值语法-->
  <h1>{{ name }}</h1>
  <h2>{{ names }}</h2>
</template>

<!--script用于存放js ts 动态内容-->
<script>
export default {
  data() {
    return {
      name: "Hello VUE",    //键值对
      names: "Hello JACK"
    }
  }
}
</script>

<!--style css 存放样式美化页面-->
<style>

</style>
