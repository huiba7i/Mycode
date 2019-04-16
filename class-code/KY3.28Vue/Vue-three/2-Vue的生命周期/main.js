import Vue from 'vue'

Vue.config.productionTip = false

new Vue({
  // el: '#app',
  data:{
    msg:'Vue实例的生命周期'
  },
  watch: {
    msg: function(newVal, oldVal){
      console.log('msg更新之前值为:',newVal, ',更新之后值为:', oldVal);
    }
  },
  methods: {
    destroyVue: function(){
      this.$destroy(); // 手动销毁Vue实例
    }
  },
  /*
  每个 Vue 实例在被创建时都要经过一系列的初始化过程——例如，需要设置数据监听、编译模板、将实例挂载到 DOM 并在数据变化时更新 DOM 等。同时在这个过程中也会运行一些叫做生命周期钩子的函数
  */
  // 创建
  beforeCreate() {
    console.log('创建Vue实例对象,初始化之前=======');
    console.log('data选项属性: ', this.$data);
    console.log('挂载的el属性: ', this.$el)
    console.log('监听: ', this.$options.watch);
    console.log('methods事件处理器: ', this.$options.methods);
  },
  created() {
    console.log('创建Vue实例对象,初始化之后=======');
    console.log('data选项属性: ', this.$data);
    console.log('挂载的el属性: ', this.$el)
    console.log('监听: ', this.$options.watch);
    console.log('methods事件处理器: ', this.$options.methods);
  },
  // 渲染
  beforeMount() {
    console.log('将Vue实例对象,挂载到指定el的标签元素上,渲染DOM之前=======');
    console.log('data选项属性: ', this.$data);
    console.log('挂载的el属性: ', this.$el)
    console.log('监听: ', this.$options.watch);
    console.log('methods事件处理器: ', this.$options.methods);
  },
  mounted() {
    console.log('将Vue实例对象,挂载到指定el的标签元素上,渲染DOM之后=======');
    console.log('data选项属性: ', this.$data);
    console.log('挂载的el属性: ', this.$el)
    console.log('监听: ', this.$options.watch);
    console.log('methods事件处理器: ', this.$options.methods);
  },

  // 更新数据
  beforeUpdate() {
    console.log('Vue实例对象中的数据更新,渲染DOM之前=======');
    console.log('data选项属性: ', this.$data);
    console.log('挂载的el属性: ', this.$el)
    console.log('监听: ', this.$options.watch);
    console.log('methods事件处理器: ', this.$options.methods);
  },
  updated() {
    console.log('Vue实例对象中的数据更新,渲染DOM之后=======');
    console.log('data选项属性: ', this.$data);
    console.log('挂载的el属性: ', this.$el)
    console.log('监听: ', this.$options.watch);
    console.log('methods事件处理器: ', this.$options.methods);
  },

  // 销毁
  beforeDestroy() {
    console.log('销毁Vue实例对象之前=======');
    console.log('data选项属性: ', this.$data);
    console.log('挂载的el属性: ', this.$el)
    console.log('监听: ', this.$options.watch);
    console.log('methods事件处理器: ', this.$options.methods);
  },
  destroyed() {
    console.log('销毁Vue实例对象之后,不再控制DOM元素=======');
    console.log('data选项属性: ', this.$data);
    console.log('挂载的el属性: ', this.$el)
    console.log('监听: ', this.$options.watch);
    console.log('methods事件处理器: ', this.$options.methods);
  },

}).$mount('#app'); // 当创建Vue实例时没有添加el选项, 则手动挂载元素
