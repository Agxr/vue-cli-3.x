<template>
  <div class="box index-box">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <index-header :userInfo="$store.state.indexDetail.loginInfo" v-on:userCloseEvn="userCloseEvn"></index-header>
    <div class="nav">
      <div class="nav-box">
        <router-link to="/">用户管理</router-link>
        <router-link to="/">图书管理</router-link>
        <router-link to="/">问题管理</router-link>
        <router-link to="/">订单管理</router-link>
        <router-link to="/">统计</router-link>
        <router-link to="/">轮播图</router-link>
        <router-link to="/">系统设置</router-link>
      </div>
    </div>
    <div class="index-cont">
      <router-view></router-view>
    </div>
    <index-footer></index-footer>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "index",
  data () {
  	return {
      msg: "首页"
    }
  },
  created () {
    const self = this;
    let loginText = self.$cookieStore.getCookie("is_login_flag");
    let loginInfo = {};
    if (loginText == "admin") {
      loginInfo.loginName = "管理员";
    } else if (loginText == "sadmin") {
      loginInfo.loginName = "超级管理员";
    }
    loginInfo.loginText = loginText;
    self.$store.dispatch("save_loginInfo", loginInfo)
  },
  components: {
    // HelloWorld,
    IndexHeader: resolve => {require(['@/components/indexHeader.vue'], resolve)}, // 子组件懒加载
    IndexFooter: resolve => {require(['@/components/indexFooter.vue'], resolve)} // 子组件懒加载
  },
  methods: {
    userCloseEvn(data) {
      // console.log(data)
      window.localStorage.removeItem("is_login_flag");
      this.$cookieStore.delCookie("is_login_flag");
      this.$router.push({ path: "/" });
    }
  }
};
</script>

<style type="text/css" scoped lang="less">
.nav {
  background-color: #009a44;
  .nav-box {
    width: 1200px;
    height: 50px;
    margin: 0 auto;
    a {
      display: inline-block;
      min-width: 80px;
      font-size: 16px;
      color: #fff;
      line-height: 50px;
      text-align: center;
      white-space: nowrap;
      padding: 0 10px;
    }
    a:hover {
      background-color: #01893d;
      text-decoration: none;
    }
  }
}
/****** 首页主内容显示区域 ******/
.index-cont {
  width: 1190px;
  margin: 0 auto;
  min-height: 700px;
}
</style>
