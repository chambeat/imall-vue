<template>
  <el-header>
    <!-- 左侧logo及文字 -->
    <a href="/">
      <img class="logo" src="@/assets/imall.png" width="32px" />
      <span class="logo-name">imall 微商城后台</span>
    </a>
    <!-- 右侧下拉菜单 -->
    <el-dropdown>
      <span class="el-dropdown-link">
        下拉菜单
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>
          <i class="el-icon-unlock"></i>
          修改密码
        </el-dropdown-item>
        <el-dropdown-item>
          <i class="el-icon-switch-button"></i>
          退出
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-header>
</template>

<style scoped>
a {
  color: white;
  text-decoration: none;
  /* vertical-align: middle; */
}

.logo {
  vertical-align: middle;
}

.logo-name {
  vertical-align: middle;
  padding-left: 10px;
}

.el-dropdown {
  /* 移到最右边 */
  float: right;
  /* padding-right: 15px; */
  color: white;
  cursor: pointer;
}
</style>