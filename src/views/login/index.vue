<template>
  <div class="login-container">
    <!-- 注意：此处 ref="form" 相当于 id="form" -->
    <el-form class="login-form" ref="form" :model="form" :rules="rules">
      <div class="title-h3">
        <h3>系统登录</h3>
        <br />
      </div>
      <!-- 帐号 -->
      <!-- 注意：prop 定义在 el-form-item 上。 -->
      <el-form-item prop="username">
        <el-input v-model="form.username" prefix-icon="iconfont icon-user" placeholder="请输入帐号" />
      </el-form-item>
      <!-- 密码 -->
      <el-form-item prop="password">
        <el-input
          v-model="form.password"
          prefix-icon="iconfont icon-pswd"
          placeholder="请输入密码"
          show-password
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('form')">登录</el-button>
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
      },
      rules: {
        // 由于可以定义多个规则，因此是'数组'形式的。
        username: [{ required: true, message: "请输入帐号", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },

  components: {},

  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log("登录成功");
        } else {
          console.log("登录失败");
        }
      });
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
