import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
// import Axios from "axios";
// import qs from "qs";
/* eslint-disable */
import {
 Message,
 Icon,
 Button,
 Input,
 Form,
 FormItem
} from "element-ui";
/* eslint-disable */
import "element-ui/lib/theme-chalk/index.css";
import { setCookie, getCookie, delCookie } from "./util/util";
import { getData, postData, deleteData } from "./util/http";

Vue.component(Message.name, Message);
Vue.component(Icon.name, Icon);
Vue.component(Button.name, Button);
Vue.component(Input.name, Input);
Vue.component(Form.name, Form);
Vue.component(FormItem.name, FormItem);

Vue.config.productionTip = false;

Vue.prototype.$Apiurl = "/api";
// Vue.prototype.$http = Axios;
Vue.prototype.$message = Message;
Vue.prototype.$cookieStore = {
  setCookie,
  getCookie,
  delCookie
};
Vue.prototype.$api = {
  getData,
  postData,
  deleteData
}

new Vue({
  router,
  store, // 使用 vuex store
  render: h => h(App)
}).$mount("#app");
