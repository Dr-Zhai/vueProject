<script setup>
import {Lock, User} from "@element-plus/icons-vue";
import {ref} from "vue";
import {ElMessage} from "element-plus";
import {useRouter} from "vue-router";

const router = useRouter()

const form = ref({
  username: '',
  password: ''
})

//声明登陆函数(箭头函数形式)
const login = () => {
  //1.获得用户名和密码
  if (form.value.username === "admin" && form.value.password === "123456") {
    //登陆成功
    ElMessage.success('登陆成功')
    //2.页面跳转
    router.push('/index')
  } else {
    ElMessage.error('用户名或密码错误')
  }
}
</script>

<template>
  <div class="login">
    <div class="ls">
      <el-form label-width="auto" style="max-width: 600px">
        <div class="title">
          欢迎使用学生信息管理系统
        </div>
        <div class="name">
          <el-input v-model="form.username" :prefix-icon="User" placeholder="请输入用户名" size="large"/>
        </div>
        <div class="pass">
          <el-input v-model="form.password" :prefix-icon="Lock" placeholder="请输入密码" show-password size="large"/>
        </div>
        <div class="btn">
          <el-button round type="primary" @click="login">登录</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
  overflow: hidden;
}

.login .el-button {
  width: 200px;
  height: 40px;
  margin-left: 90px;
  color: red;
}

.login .el-input {
  margin-left: 70px;
  width: 240px
}

.title {
  width: 400px;
  height: 50px;
  margin-top: 10px;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  line-height: 50px;
  color: white;
}

.name {
  width: 400px;
  height: 50px;
  margin-top: 10px;
  line-height: 50px;
}

.pass {
  width: 400px;
  height: 50px;
  margin-top: 10px;
  line-height: 50px;
}

.btn {
  width: 400px;
  height: 50px;
  margin-top: 10px;
  line-height: 50px;
}

.ls {
  width: 400px;
  height: 260px;
  position: relative;
  left: 800px;
  top: 250px;
  border-radius: 10px;
}

.login {
  width: 100%;
  height: 100vh;
  background-image: url("../assets/1.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.login .el-button {
  background-color: transparent !important;
}

.ls .el-input__wrapper {
  background-color: transparent !important;
  --el-input-placeholder-color: blue;
}

.ls .el-input__inner {
  font-weight: bold;
  color: green; /* 设置文字颜色 */
}

.ls .el-input__prefix .el-input__icon {
  color: red; /* 设置图标颜色 */
}
</style>
