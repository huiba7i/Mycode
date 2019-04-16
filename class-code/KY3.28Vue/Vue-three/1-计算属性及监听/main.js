// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

Vue.config.productionTip = false

/* eslint-disable no-new */
let vm = new Vue({
  el: '#app',
  data: {
    food: {
      name: '牛肉面',
      price: 12,
      count: 3,
      discount: 0.8
    },
    cartList: [
      {name: '黄焖鸡',price: 16.5, num: 1},
      {name: '米饭', price: 2, num: 2}
    ],
    msg: 'Hello'
  },
  computed: { // 计算属性, 处理一些复杂的逻辑
    totalPrice: function(){
      return this.food.price*this.food.count*this.food.discount;
    }
  },
  watch: { // 更适合处理一些异步操作或开销比较大的操作
    // 当msg的值发生改变时,触发该函数(参数1-改变后的新值, 参数2-改变前的旧值)
    // msg: function(newVal, oldVal){
    //   console.log(`改变前值为:${oldVal},改变后值为: ${newVal}`);
    // }

    // 当数据第一次绑定也触发监听,添加immediate选项
    msg: {
      handler: function(newVal, oldVal){
        console.log(`改变前值为:${oldVal},改变后值为: ${newVal}`);
        // 执行异步操作
      },
      immediate: true
    },

    /* 'food.count': {
      handler: function(newVal, oldVal){
        console.log(`count改变前值为:${oldVal},改变后值为: ${newVal}`);
      },
      deep: true // 深度监听,可对象的属性的变化
    }, */

    food: {
      handler: function(newVal){
        console.log(newVal.count);
        console.log('food改变后值为:' ,newVal);
      },
      deep: true // 深度监听,对象的属性的变化时监听到对象的变化
    }
  }
})

// vm.food.price = 17;
