import Vue from 'vue'
import vuex from 'vuex'
import login from './login/' // 引入某个store对象
import indexDetail from './indexDetail' // 引入某个store对象
import indexChild from './indexChild'

Vue.use(vuex)

export default new vuex.Store({
  modules: {
  	login: login,
    indexDetail: indexDetail,
    indexChild: indexChild
  }
})
