// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// 导入外部vue文件中的组件
import HelloWorld from './components/HelloWorld.vue'
import Test from './components/Test.vue'

Vue.config.productionTip = false

// 1. 注册全局组件,创建Vue实例之前
// 使用模板字符串
/* Vue.component('my-component', {
  template: '<div><h2>标题</h2><p>正文</p></div>'
}); */

// 2.建议注册局部组件
// 创建一个组件
let MyComponent = {
  template: '<div><h2>标题1</h2><p>正文1<br> {{msg}} </p></div>',
  // 组件可以有自己的数据和操作,样式
  // data数据必须是函数
  data(){
    return {
      msg: 'Hello Component'
    }
  }
}
new Vue({
  el: '#app',
  data: {
    count: 10
  },
  components: { 'my-component': MyComponent, HelloWorld,Test }
})
