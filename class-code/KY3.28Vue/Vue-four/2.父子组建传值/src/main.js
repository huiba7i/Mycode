// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false


new Vue({
  // el: '#app',
  /* data: {
      msg: 'Hello App'
  }, */
  components: { App },
  template: '<App/>', // 会替换原来挂载的那个元素, App是应用程序的根组件
}).$mount('#app')
