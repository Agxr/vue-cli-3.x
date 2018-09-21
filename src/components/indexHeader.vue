<template>
  <div class="box index-header clearfix">
    <img class="logo" src="../assets/image/logo.png" alt="">
    <div class="user-info">
      <img class="user-img" src="../assets/image/touxiang.jpg" alt="">
      <p class="user-name">{{userInfo.loginText}}&nbsp;{{userInfo.loginName}}<span class="wel">欢迎您</span>&nbsp;<span class="user-close" v-on:click="userClose">退出>></span></p>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "indexHeader",
  props: {
    userInfo: Object
  },
  methods: {
    userClose() {
      // console.log("close")
      this.$emit("userCloseEvn", true)
    }
  }
};
</script>

<style type="text/css" scoped lang="less">
.index-header {
  width: 1190px;
  height: 120px;
  margin: 0 auto;
  overflow: hidden;
  line-height: 120px;
  .logo {
    width: 280px;
    display: inline-block;
    vertical-align: middle;
    cursor: pointer;
  }
  .user-info {
    display: inline-block;
    vertical-align: middle;
    float: right;
    .user-img {
      display: inline-block;
      vertical-align: middle;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 10px;
    }
    .user-name {
      display: inline-block;
      .wel {
        color: #ffa500;
      }
      .user-close {
        color: #337ab7;
        cursor: pointer;
      }
    }
  }
}
</style>
