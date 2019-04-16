<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h2>{{message}}</h2>
    <!-- <p>{{msg}}</p> -->
    <!-- 在引用子组件时,
      props down: 通过v-bind绑定一个属性的形式将数据传递给子组件的props
      events up: 通过v-on添加一个自定义事件
    -->
    <Child v-bind:pMsg="message" :pCount="count" v-on:notice="noticeFromChild" ></Child>
  </div>
</template>

<script>
import Child from './components/Child'
export default {
  name: 'App',
  data(){
    return {
      message: 'message in App',
      count: 10
    }
  },
  methods: {
    noticeFromChild: function(num){
      console.log('接收到子组件的事件通知');
      this.count+= num||1;
    }
  },
  components: {
    Child
  },
  beforeCreate() {
    console.log('App初始化之前========');
    console.log('App data: ', this.$data);
  },
  created() {
    console.log('App初始化之后========');
    console.log('App data: ', this.$data);
  },
  beforeMount() {
    console.log('App挂载之前========');
    console.log("App vm:",this);
  },
  mounted() {
    console.log('App挂载之后========');
    console.log("App vm:",this);
  },
  beforeUpdate() {
    console.log('App更新数据之前========');
    console.log("App vm:",this);
  },
  updated() {
    console.log('App更新数据之后========');
    console.log("App vm:",this);
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
