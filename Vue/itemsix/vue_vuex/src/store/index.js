import Vue from 'vue'   //引入Vue

import Vuex from 'vuex'     //引入Vuex
//添加Vue.use()
Vue.use(Vuex)

//创建Store对象，管理Vue中的数据状态
const store = new Vuex.Store({
  // 相当于组件中的data数据
  state: { count: 2, price: 16.5 },
  // getters相当于store中的计算属性computed
  getters: {
    totalPrice(state) {
      return state.count * state.price;
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
    changeCount(state, payload) {
      state.count += payload.num
      console.log(payload.str);
    }
  }
});

export default store;