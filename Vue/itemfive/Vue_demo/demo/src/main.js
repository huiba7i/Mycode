// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'

// 引入VueRouter
import VueRouter from 'vue-router'
//添加Vue.use 说明Vue需要使用vue-router
Vue.use(VueRouter)

Vue.config.productionTip = false

import Login from './components/Login.vue'
import Registe from './components/Registe.vue'

//创建路由对象
const router = new VueRouter({
  //配置路由路径
  routes:[
    {path:'/log',component:Login},
    {path:'/reg',component:Registe},
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router  //引入路由
})
