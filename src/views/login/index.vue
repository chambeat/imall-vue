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
        <el-input v-model="form.username" prefix-icon="iconfont icon-user" placeholder="帐号" />
      </el-form-item>
      <!-- 密码 -->
      <el-form-item prop="password">
        <el-input
          v-model="form.password"
          prefix-icon="iconfont icon-pswd"
          placeholder="密码"
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
// 按需导入
import { login, getUserInfo } from "@/api/login";

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
          login(this.form.username, this.form.password).then(response => {
            const resp = response.data;
            console.log(resp);
            // resp.data 为 login 方法返回值中的 data 内容（大致理解即可）
            console.log(resp.data, resp.data.token);

            if (resp.flag) {
              // 验证成功，通过 token 获取用户信息
              getUserInfo(resp.data.token).then(response => {
                const respUser = response.data;
                console.log(respUser);
                // respUser.data 为 getUserInfo 方法返回值的 data 内容（大致理解即可）
                console.log(respUser.data);
                // 1. 保存 token 和 用户信息
                localStorage.setItem(
                  "imall-user",
                  JSON.stringify(respUser.data)
                );
                localStorage.setItem("imall-token", resp.data.token);
                // 2. 前往首页
                this.$router.push("/");
                /* 提示信息：登录成功 */
                this.$message({
                  showClose: false,
                  message: "登录成功",
                  type: "success",
                  duration: 1000 // 显示1秒
                });
              });
            } else {
              /* 提示信息：验证失败 */
              this.$message({
                showClose: false,
                message: "验证失败",
                type: "warning",
                duration: 1000 // 显示1秒
              });
            }
          });
          // console.log("登录成功");
        } else {
          // this.$message.error("登录失败");
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
  background-color: rgba(255, 255, 255, 0.9);
  padding: 32px;
  border-radius: 5px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.login-container {
  position: absolute;
  width: 100%;
  height: 100%;
  /* background-color: rgb(248, 248, 248); */
  background-color: rgb(245, 245, 245);
  /* background-color: white; */
  /* background: url("../../assets/login.jpg"); */
  /* background: url("../../assets/login.jpg") no-repeat center; */
  /* 设置 background-size 为 cover，背景图片永远铺满屏幕 */
  background-size: cover;
}

/* h3 标题样式 */
.title-h3 {
  text-align: center;
}
</style>
