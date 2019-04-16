import Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'
import axios from 'axios'
// 添加Vue.use()
Vue.use(Vuex)

const store = new Vuex.Store({
    state:{userName:'',password:''},

});

export default store