/**
 * 路由懒加载的方法
 * 方法一：官方文档提供的
 *    const Foo = () => import('./Foo.vue')
 *    routes: [
 *      { path: '/foo', component: Foo }
 *    ]
 * 方法二：vue异步组件技术
 *    {
 *       path: '/home',
 *       name: 'home',
 *       component: resolve => require(['@/components/home'], resolve)
 *    }
 *
 */
import Vue from "vue";
import Router from "vue-router";
const Login = () => import("./views/login.vue");
const Index = () => import("./views/index.vue");
const UserManegement = () => import("./views/userManagement.vue");

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "login",
      component: Login
    },
    {
      path: "/index",
      name: "index",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Index,
      children: [
        // {
        //   // 当 /index/profile 匹配成功，
        //   // UserProfile 会被渲染在 User 的 <router-view> 中
        //   path: 'profile',
        //   component: UserProfile
        // },
        // //*** index 的出口是不会渲染任何东西，这是因为没有匹配到合适的子路由。如果你想要渲染点什么，可以提供一个 空的 子路由
        { path: "", component: UserManegement },
        {
          path: "userInfo",
          name: "userInfo",
          component: UserManegement
        }
      ]
    }
  ]
});
