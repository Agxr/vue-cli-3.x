/**
 * mutations方法中的执行必须为同步
 * 执行多个 mutations 就需要用 action 了，actions中为异步操作
 * use： 通过$store.dispatch('save_indexList')，即this.$store.dispatch('save_indexList', res.data)调用方法
 *   通过$store.state.indexDetail.indexObj【即this.$store.state.indexDetail.indexObj】，调用相应的变量值
 */
export default {
  state: {
    msg: '这是vuex-store里面静态值',
    loginInfo: {},
    indexObj: {}
  },
  mutations: {
    saveIndexList (state, obj) { // 这里的state对应着上面这个state
      // console.log(obj)
      state.indexObj = obj // 变更状态
    },
    saveLoginInfo (state, obj) { // 保存登录状态
      state.loginInfo = obj
    }
  },
  actions: {
    save_indexList (context, obj) { // 这里的context和我们使用的$store拥有相同的对象和方法
      // console.log(obj)
      context.commit('saveIndexList', obj)
      // 你还可以在这里触发其他的mutations方法
    },
    save_loginInfo (context, obj) { // 这里的context和我们使用的$store拥有相同的对象和方法
      // console.log(obj)
      context.commit('saveLoginInfo', obj)
      // 你还可以在这里触发其他的mutations方法
    }
  }
}
