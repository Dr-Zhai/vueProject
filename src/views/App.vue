<script setup>
import Main from "@/views/Main.vue";
import Left from "@/components/Left.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div class="common-layout">
    <el-container>
      <!--左边导航-->
      <el-aside width="200px">
        <Left></Left>
      </el-aside>
      <el-container>
        <el-header>
          <Header></Header>
        </el-header>
        <el-main>
          <!--首页主窗口-->
          <Main></Main>
        </el-main>
        <el-footer>
          <Footer></Footer>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
.common-layout .el-header {
  background-color: transparent !important;
  margin-top: 30px;
  height: 70px;
}

.common-layout .el-aside {
  background-color: #409eff; /* #545c64 */
  height: 100vh;
}

.common-layout .el-footer {
  background-color: transparent !important;
}

.common-layout .el-main {
  padding: 0 20px;
  height: 60px;
}
</style>
