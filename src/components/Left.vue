<script setup>

</script>

<template>
  <el-row>
    <el-col>
      <div class="logo">
        <img alt="Logo" src="../assets/logo.png">
      </div>
    </el-col>
  </el-row>
  <el-row class="tac">
    <el-col :span="24">
      <el-menu
          active-text-color="#ffd04b"
          background-color="#409eff"
          class="el-menu-vertical-demo"
          default-active="2"
          router="true"
          text-color="#fff"
          @close="handleClose"
          @open="handleOpen"
      >
        <el-menu-item index="1" route="/index/welcome">
          <el-icon>
            <House/>
          </el-icon>
          <span>Welcome</span>
        </el-menu-item>
        <el-menu-item index="2" route="/index/user">
          <el-icon>
            <Avatar/>
          </el-icon>
          <span>用户管理</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<style scoped>
.logo {
  width: 200px;
  height: 120px;
  background-color: white;
}

.logo img {
  max-width: 100%;
  height: auto;
}
</style>
