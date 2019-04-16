import Vue from 'vue';
// 引入vuex
import Vuex from 'vuex'

import axios from 'axios'
// 添加Vue.use()
Vue.use(Vuex)

// 创建Store对象, 管理Vue中的数据状态
const store = new Vuex.Store({
  state: {
    user:localStorage.getItem('user'), // 存储登录的用户名
    isLogin:false // 是否已登录, false-未登录, true-已登录
  },
  mutations: {
    updateState(state, payload){
      state.user = payload
      state.isLogin = true;
      localStorage.setItem('user', payload);
      localStorage.setItem('isLogin', state.isLogin)
    }
  },
  actions: {
    asyncLogin({commit}, payload){
      axios.get('/static/1.txt',).then((resp)=>{
        let result = resp.data;
        if(result=='success'){
          // 调用mutations更改登录状态
          commit('updateState', payload.user.account)
        }else{
          
        }
      })
    }
  }
});

export default store;
