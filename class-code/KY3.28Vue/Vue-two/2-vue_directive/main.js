// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'


Vue.config.productionTip = false

// 注册全局指令, 在创建Vue实例之前
Vue.directive('focus', {
  inserted: function(el){
    el.focus();
  }
});

new Vue({
  el: '#app',
  // 注册本地指令
  /* directives:　{
    focus:　{
      // 当绑定的元素插入到DOM中时调用
      inserted:　function(el){
        el.focus();
      }
    }
  } */
})
