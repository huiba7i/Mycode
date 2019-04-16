vuex:
管理vue中的状态

(1)安装
cnpm install vuex --save

(2)vuex中提供了一个Store管理状态,创建Store
新建一个store目录,在目录中新建index.js,添加内容:
import Vue from 'vue';
// 引入vuex
import Vuex from 'vuex'
// 添加Vue.use()
Vue.use(Vuex)

// 创建Store对象, 管理Vue中的数据状态
const store = new Vuex.Store({
  // 相当于组件中的data数据
  state: { count: 2, price: 16.5},
  // getters相当于store中的计算属性computed
  getters: {
    totalPrice(state){
      return state.count*state.price;
    }
  },
  // mutations: 保存着更改state中的数据的回调函数,只能进行同步操作
  // 回调函数中有两个参数: 参数1 - state状态, 参数2 - 自定义参数
  mutations: {
    // 接收单个参数
    /* changeCount(state, payload){
      state.count+= payload
    } */

    // 多个参数
    changeCount(state, payload){
      state.count+= payload.num
      console.log(payload.str);
    }
  }
});

export default store;

(3)在入口文件main.js中,在创建的Vue实例中添加store选项
import store from './store'
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

(4)在所有的组件中都能使用store中的状态数据
{{$store.state.count}}
{{$store.getters.totalPrice}}

更改状态数据时,调用mutations(更改状态)中的回调函数
// 传递单个参数
      $store.commit('回调函数名称',自定义参数值)

// 传递多个参数
      this.$store.commit({
        type: 'changeCount',
        num: 2,
        str: 'change'
      });
