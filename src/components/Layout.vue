<template>
  <el-container>
    <!-- 头部 -->
    <app-header></app-header>
    <!-- 左侧导航 -->
    <app-navbar></app-navbar>
    <!-- 主体区域 -->
    <app-main></app-main>
  </el-container>
</template>

<script>
import AppHeader from "./AppHeader";
import AppNavbar from "./AppNavbar";
import AppMain from "./AppMain";

export default {
  components: {
    AppHeader,
    AppNavbar,
    AppMain
  }
};
</script>

<style scoped>
.el-header {
  position: absolute;
  line-height: 55px;
  /* top: 0px; */
  left: 0px;
  right: 0px;
  background-color: #373d41;
  color: white;
}

.navbar {
  position: absolute;
  top: 60px;
  left: 0px;
  width: 220px;
  bottom: 0px;
  background-color: #545c64;
  /* background-color: #333744; */
  color: white;
  overflow-y: auto;
  /* padding: 20px; */
  font-size: small;
}

.el-main {
  position: absolute;
  top: 60px;
  left: 220px;
  right: 0px;
  bottom: 0px;
  background-color: #eaedf1;
  overflow-y: auto;
}
</style>
