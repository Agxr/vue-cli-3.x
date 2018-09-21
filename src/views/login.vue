<template>
  <div class="box login-box" ref="loginBox">
    <div class="login-div">
      <p class="login-title">用户登录</p>
      <!-- <form class="form-horizontal" id="loginForm">
        <div class="input-wrapper">
          <input type="text" name="username" placeholder="账号" autocomplete="off" required="" class="form-input">
        </div>
        <div class="input-wrapper">
          <input type="password" name="password" placeholder="密码" autocomplete="off" required="" class="form-input">
        </div>
        <div class="form-group">
          <button type="submit" class="login-btn">登&nbsp;&nbsp;&nbsp;&nbsp;录</button>
        </div>
      </form> -->
      <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" class="demo-ruleForm">
        <el-form-item prop="passText">
          <el-input type="text" v-model="ruleForm2.passText" autocomplete="off" placeholder="账号"></el-input>
        </el-form-item>
        <el-form-item prop="passWord">
          <el-input type="password" v-model="ruleForm2.passWord" autocomplete="off" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="form-btn" type="submit" @click="submitForm('ruleForm2')">确定</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "login",
  data () {
    var validatePassText = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入帐号"));
      } else {
        callback();
      }
    };
    var validatePassWord = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    return {
      msg: "登录页面",
      ruleForm2: {
        passText: "",
        passWord: ""
      },
      rules2: {
        passText: [
          { validator: validatePassText, trigger: "blur" }
        ],
        passWord: [
          { validator: validatePassWord, trigger: "blur" }
        ]
      }
    };
  },
  created: function() {
    const self = this;
    let getParams = {
      type: 1,
      page: 1
    };
    self.$api.getData(self.$Apiurl + "/satinApi", getParams).then(function (res) {
      console.log(res)
    })
  },
  methods: {
    submitForm(formName) {
      const self = this;
      // console.log(self.ruleForm2)
      self.$refs[formName].validate((valid) => {
        if (valid) { // 满足输入账号密码的条件
          if ((self.ruleForm2.passText == "admin" || self.ruleForm2.passText == "sadmin") && self.ruleForm2.passWord == "122") {
            console.log("登陆成功");
            self.$cookieStore.setCookie("is_login_flag", self.ruleForm2.passText); // cookie存储登录态
            window.localStorage.setItem("is_login_flag", self.ruleForm2.passText); // 本地存储登录态
            self.$store.dispatch("save_login", self.ruleForm2.passText); // vuex存储登录态
            // 登陆成功跳转到首页
            self.$router.push({ path: "index/userInfo" });
          } else {
            self.$message({
              message: "帐号或者密码错误，请重新输入！",
              duration: 2000,
              type: "warning"
            });
          }
        } else {
          console.log("error submit!!");
          self.$message({
            message: "请正确的输入帐号或者密码！",
            duration: 2000,
            type: "warning"
          });
          return false;
        }
      });
    }
  },
  mounted: function() {
    const self = this;
    const winBody = document.documentElement || document.body;
    // console.log(winBody.clientHeight)
    self.$refs.loginBox.style.height = winBody.clientHeight + "px";
    // 判断登录态，若有登录则直接跳转到首页
    let isLoginLocal = self.$cookieStore.getCookie("is_login_flag") || window.localStorage.getItem("is_login_flag");
    // console.log(isLoginLocal)
    if (isLoginLocal == "admin" || isLoginLocal == "sadmin") {
      self.$store.dispatch("save_login", self.ruleForm2.passText); // vuex存储登录态
      // 登陆成功跳转到首页
      self.$router.push({ path: "index/userInfo" });
    }
  }
};
</script>

<style type="text/css" scoped lang="less">
.login-box {
  height: 100%;
  background: #f8f8f8 url("../assets/image/login-bg.png") no-repeat left top;
  background-size: cover;
}
.login-div {
  position: fixed;
  top: 160px;
  right: 200px;
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
  min-width: 200px;
  .login-title {
    padding-left: 15px;
    border-left: 4px solid #ddd;
    font-size: 18px;
    line-height: 28px;
    font-weight: 600;
    margin-bottom: 10px;
  }
}
/* elementUI组件样式 */
.el-form {
  min-width: 300px;
}
.el-form-item__content {
  // margin-left: 0!important;
}
.el-button {
  width: 100%;
}
.login-div .el-button--submit, .login-div .el-button--submit:hover, .login-div .el-button--submit:visited, .login-div .el-button:hover, .login-div .el-button:visited, .login-div .el-button--submit.is-plain{
  color: #fff;
  background-color: #f18d01;
}
</style>
