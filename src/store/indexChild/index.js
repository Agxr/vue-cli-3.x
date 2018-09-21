export default {
  state: {
    indexChildObj: {}
  },
  mutations: {
    saveindexChildList (state, obj) { // 这里的state对应着上面这个state
      // console.log(obj)
      state.indexChildObj = obj // 变更状态
    }
  },
  actions: {
    save_saveindexChildList (context, obj) { // 这里的state对应着上面这个state
      // console.log(obj)
      context.commit('saveindexChildList', obj)
    }
  }
}
