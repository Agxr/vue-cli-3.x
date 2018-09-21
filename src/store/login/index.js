/**
 * mutations方法中的执行必须为同步
 * 执行多个 mutations 就需要用 action 了，actions中为异步操作
 * use： 通过$store.dispatch('save_indexList')，即this.$store.dispatch('save_indexList', res.data)调用方法
 *   通过$store.state.login.isLoginFlag【即this.$store.state.login.isLoginFlag】，调用相应的变量值
 */
export default {
  state: {
    msg: '登录界面',
    isLoginFlag: false
  },
  mutations: {
    saveLoginFlag (state, bool) { // 这里的state对应着上面这个state
      // console.log(bool)
      state.isLoginFlag = bool // 变更状态
    }
  },
  actions: {
    save_login (context, bool) { // 这里的context和我们使用的$store拥有相同的对象和方法
      // console.log(bool)
      context.commit('saveLoginFlag', bool)
      // 你还可以在这里触发其他的mutations方法
    }
  }
}
