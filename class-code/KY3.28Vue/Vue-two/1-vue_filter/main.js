import Vue from 'vue'
// import './css/style.css'

Vue.config.productionTip = false

// 在创建Vue实例之前,注册全局过滤器
Vue.filter('lowercase', function(val){
  return val.toLowerCase();
})
let vm = new Vue({
  el: '#app',
  data: {
    title: 'Vue过滤器',
    msg: 'Hello world!',
    price:　16.4857
  },
  filters: {
    // 自定义本地过滤器
    uppercase: function(val){
      return val.toUpperCase();
    },
    number: function(val,size){
      return val.toFixed(size)
    }
  }
})

console.log(vm)
