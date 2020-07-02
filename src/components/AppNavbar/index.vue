<template>
  <div class="navbar">
    <!-- 注意：el-aside 默认宽度为 299(300)px，过宽，会出现水平方向滚动条，因此最好别使用该标签。-->
    <!-- <el-aside> -->
    <!-- <div> -->
    <!-- 
        1. :default-active：用于指定‘首次加载时默认选中的条目’。
        2. :router：是否开启路由模式。开启后 index 的值代表路由地址（注意：勿忘‘:’，否则失效。）。
    -->
    <el-menu
      :router="true"
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#409EFF"
    >
      <el-submenu index="/goods/">
        <template slot="title">
          <i class="iconfont icon-goods"></i>
          <span>商品管理</span>
        </template>
        <el-menu-item index="/goods/">
          <i class="iconfont icon-list"></i>
          <span>商品列表</span>
        </el-menu-item>
        <el-menu-item index="1-2">
          <i class="iconfont icon-list"></i>
          <span>商品分类</span>
        </el-menu-item>
      </el-submenu>
      <el-menu-item index="/order/">
        <i class="iconfont icon-orders"></i>
        <span slot="title">订单管理</span>
      </el-menu-item>
      <el-menu-item index="/user/">
        <i class="iconfont icon-users"></i>
        <span slot="title">用户管理</span>
      </el-menu-item>
      <el-menu-item index="/authority/">
        <i class="iconfont icon-authority"></i>
        <span slot="title">权限管理</span>
      </el-menu-item>
      <el-menu-item index="/statistics/">
        <i class="iconfont icon-statistics"></i>
        <span slot="title">数据统计</span>
      </el-menu-item>
      <!-- <el-menu-item index="/monitor/">
        <i class="iconfont icon-monitor"></i>
        <span slot="title">访问监控</span>
      </el-menu-item>-->
      <el-menu-item index="/monitor/">
        <i class="iconfont icon-monitor"></i>
        <!-- target="blank" 和 target="_blank" 有区别：
            (1) 使用'blank'：在浏览器的新标签页中打开链接，当多次点击链接时，只会刷新已打开的页面，而不会打开其他新标签页。
            (2) 使用'_blank'：在浏览器的新标签页中打开链接，当多次点击超链接时，会再打开一个新的标签页。
        -->
        <a href="http://localhost/druid" target="blank">访问监控</a>
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

/* 自定义图标的样式 */
.iconfont {
  margin-right: 10px;
}

/* a 标签的样式 */
a {
  text-decoration: none;
  color: white;
}
</style>