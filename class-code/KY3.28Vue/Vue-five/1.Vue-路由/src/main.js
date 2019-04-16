// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 引入VueRouter
import VueRouter from 'vue-router'
// 添加Vue.use()
Vue.use(VueRouter);

Vue.config.productionTip = false
//  导入组件
import Login from './components/Login.vue'
import Registe from './components/Registe.vue'

// 创建路由对象
const router = new VueRouter({
  // 配置路由路径
  routes: [
    { path: '/log', component: Login },
    { path: '/reg', component: Registe}
  ]
});

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router: router
})
