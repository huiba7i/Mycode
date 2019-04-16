
import Vue from 'vue'
import axios from 'axios'
// nodejs中的原生模块querystring: 可以将json对象转成字符串
import qs from 'querystring'

Vue.config.productionTip = false
// 当多个js中需要用axios,可以将其添加在Vue的原型中,不需要重复导入这个模块
Vue.prototype.$http = axios

let vm = new Vue({
  el: '#app',
  data: {
    items: []
  },
  methods: {
    test: function(){
      $http.get('/static/1.txt').then(function(resp){
        console.log(`响应的结果:${resp}`);
        console.log(resp); // 封装了整个响应对象的结果
        console.log(resp.data);
        console.log(this);
        vm.items = resp.data;
      }).catch((error)=>{
        console.log(`请求失败: ${error}`);
      });
    },
    visit: function(){
      // get方式的请求, 数据可直接拼接到url的后面
      /* axios.get('/deal/data?id=10').then((resp)=>{
        console.log(resp);
      }).catch((error)=>{
        console.log(error);
      }) */

      /* // 添加配置参数
      axios.get('/deal/data', {
        params: { // params: 请求参数
          id: 15
        }
      }).then((resp)=>{
        console.log(resp);
      }).catch((error)=>{
        console.log(error);
      }) */
      // post 方式请求
      /* axios.post('/deal/data', 'id=18&name="zhs"').then((resp)=>{
        console.log(resp);
      }).catch((error)=>{
        console.log(error);
      }) */
      let params = {id:20, name: 'zhs'}
      axios.post('/deal/data', qs.stringify(params)).then((resp)=>{
        console.log(resp);
      }).catch((error)=>{
        console.log(error);
      })
    }
  }
})
