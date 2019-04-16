// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import axios from 'axios'
// nodejs中的原生模块querystring: 可以将json对象转成字符串
import qs from 'querystring'

Vue.config.productionTip = false
// 当多个js中需要用axios,可以将其添加在Vue的原型中,不需要重复导入这个模块
// Vue.prototype.$http = axios
/* eslint-disable no-new */

//Vue -- two
//在创建Vue实例之前注册全局过滤器
/* Vue.filter('lowercase', function (val) {   //小写转换
  return val.toLowerCase();
})

// 注册全局指令
Vue.directive("focus", {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    el.focus();   //获得焦点
  }
}) */

/* new Vue({
  el: "#apptwo",
  data: {
    title: "Vue过滤器",
    msg: "Hello World!",
    price: 3.14159,
    myBgColor:"aqua",
  },
  filters: {
    //自定义本地过滤器
    uppercase: function (val) {    //大写转换
      return val.toUpperCase();
    },
    num: function (val, size) {
      return val.toFixed(size)
    }
  },
  // 自定义指令
  directives: {
    // focus:{   //指令的定义
    //   inserted:function(el){
    //     el.focus()
    //   }
    // }
    changeBackgroundColor: {    //改变元素背景颜色
      bind: function (el, bindings) {
        console.log(bindings.value);
        el.style.backgroundColor = bindings.value;
      }
    }
  }
}) */

// vue与后端的交互
let vm = new Vue({
  el: "#appeach",
  data: {
    items: [],
    itemeTwo: [],
    stuid: 0,
    index: 0,
    namevalue:$('#username')[0].value,    //姓名
    agevalue:$('#age')[0].value,    //年龄
  },
  methods: {
    //响应本地文件中的值
    test: function () {            //回调结果
      axios.get('/static/1.txt').then(function (resp) {
        console.log(`响应结果：${resp}`);
        console.log(resp); //封装了整个响应对象的结果
        console.log(resp.data)
        vm.items = resp.data;
      }).catch((error) => {
        console.log(`请求失败：${error}`)
      });
    },

    //获得响应后端服务器的内容
    visit: function () {
      axios.get('/deal/data').then((resp) => {
        console.log(resp);
        console.log(resp.data);
        vm.itemeTwo = resp.data;  //获得内容
      }).catch((error) => {
        console.log(error);     //响应失败
      });
    },

    //从服务器删除指定学生信息
    deletStu: function (index, stuid) {
      vm.index = index;
      vm.stuid = stuid;
      let con = confirm("确定删除该信息吗？");
      if (con == true) {
        axios.get('/deal/delete?stuid=' + vm.stuid).then(() => {
          vm.itemeTwo.splice(vm.index, 1);    //删除指定学生信息
        }).catch((error) => {
          console.log(error);     //响应失败
        });
      };
    },
    // 重置
    reset(){
      this.namevalue="",
      this.agevalue=""
    },
    addUser:function(){
      
    }
  },
})