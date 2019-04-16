// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// 引入bootstrap
// require('bootstrap/dist/css/bootstrap.min.css')
import 'bootstrap/dist/css/bootstrap.min.css'
import $ from 'jquery'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    stuList: [
      {name: '张三', age:10, sex: '男'},
      {name: '李四', age:12, sex: '女'},
    ]
  },
  methods: {
    addStudent(){
      console.log('添加学生信息');
      $('.para').html('<i>jquery</i>');
    }
  }
})
