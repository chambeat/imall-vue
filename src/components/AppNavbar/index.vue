<template>
  <div class="navbar">
    <!-- 注意：el-aside 默认宽度为 299(300)px，过宽，会出现水平方向滚动条，因此最好别使用该标签。-->
    <!-- <el-aside> -->
    <!-- <div> -->
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item index="1-1">子导航一</el-menu-item>
        <el-menu-item index="1-2">子导航二</el-menu-item>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
    <!-- </div> -->
    <!-- </el-aside> -->
  </div>
</template>

<style scoped>
.el-menu {
  /* 消除菜单右侧白色边框 */
  border-right: none;
}
</style>