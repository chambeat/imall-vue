<template>
  <div class="login-container">
    <!-- <el-form class="login-form" ref="form" :model="form" label-width="40px"> -->
    <el-form class="login-form" ref="form" :model="form">
      <div class="title-h3">
        <h3>系统登录</h3>
        <br />
      </div>
      <!-- 帐号 -->
      <!-- <el-form-item label="帐号"> -->
      <el-form-item>
        <el-input v-model="form.username" prefix-icon="iconfont icon-user" placeholder="请输入帐号" />
      </el-form-item>
      <!-- 密码 -->
      <!-- <el-form-item label="密码"> -->
      <el-form-item>
        <el-input
          v-model="form.password"
          type="password"
          prefix-icon="iconfont icon-pswd"
          placeholder="请输入密码"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 注意：‘form’必须要有，否则报错。
      form: {
        username: "",
        password: ""
      }
    };
  },

  components: {},

  methods: {
    onSubmit() {
      alert("登录");
    }
  }
};
</script>

<style scoped>
/* 注意：‘scoped’表示样式只在本组件内有效。 */
.login-form {
  width: 360px;
  /* 上下间距160px，左右自动居中 */
  margin: 160px auto;
  /* background-color: white; */
  background-color: rgba(255, 255, 255, 0.96);
  padding: 32px;
  border-radius: 5px;
}

.login-container {
  position: absolute;
  width: 100%;
  height: 100%;
  /* background-color: teal; */
  /* background: url("../../assets/login.jpg"); */
  background: url("../../assets/login.jpg") no-repeat center;
  /* 设置 background-size 为 cover，背景图片永远铺满屏幕 */
  background-size: cover;
}

/* h3 标题样式 */
.title-h3 {
  text-align: center;
}
</style>
