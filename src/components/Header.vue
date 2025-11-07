<template>
  <div aria-label="页眉的完整示例">
    <el-page-header @back="onBack">
      <template #breadcrumb>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: './' }">
            主页
          </el-breadcrumb-item>
          <el-breadcrumb-item>
            <a href="./user">用户管理</a>
          </el-breadcrumb-item>
        </el-breadcrumb>
      </template>
      <template #content>
        <div class="flex items-center">
          <el-avatar
              :size="32"
              class="mr-3"
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          />
          <span class="text-large font-600 mr-3"> 欢迎使用学生信息管理系统 </span>
          <el-tag>主页</el-tag>
        </div>
      </template>
      <template #extra>
        <div class="flex items-center">
          <el-button class="ml-2" type="primary">退出</el-button>
        </div>
      </template>
    </el-page-header>
  </div>
</template>

<script setup>
import {ElNotification as notify} from 'element-plus'

const onBack = () => {
  notify('返回成功')
}
</script>

<style scoped>

</style>
