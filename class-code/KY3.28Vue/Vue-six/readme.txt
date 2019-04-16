vuex:
����vue�е�״̬

(1)��װ
cnpm install vuex --save

(2)vuex���ṩ��һ��Store����״̬,����Store
�½�һ��storeĿ¼,��Ŀ¼���½�index.js,�������:
import Vue from 'vue';
// ����vuex
import Vuex from 'vuex'
// ���Vue.use()
Vue.use(Vuex)

// ����Store����, ����Vue�е�����״̬
const store = new Vuex.Store({
  // �൱������е�data����
  state: { count: 2, price: 16.5},
  // getters�൱��store�еļ�������computed
  getters: {
    totalPrice(state){
      return state.count*state.price;
    }
  },
  // mutations: �����Ÿ���state�е����ݵĻص�����,ֻ�ܽ���ͬ������
  // �ص�����������������: ����1 - state״̬, ����2 - �Զ������
  mutations: {
    // ���յ�������
    /* changeCount(state, payload){
      state.count+= payload
    } */

    // �������
    changeCount(state, payload){
      state.count+= payload.num
      console.log(payload.str);
    }
  }
});

export default store;

(3)������ļ�main.js��,�ڴ�����Vueʵ�������storeѡ��
import store from './store'
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

(4)�����е�����ж���ʹ��store�е�״̬����
{{$store.state.count}}
{{$store.getters.totalPrice}}

����״̬����ʱ,����mutations(����״̬)�еĻص�����
// ���ݵ�������
      $store.commit('�ص���������',�Զ������ֵ)

// ���ݶ������
      this.$store.commit({
        type: 'changeCount',
        num: 2,
        str: 'change'
      });
