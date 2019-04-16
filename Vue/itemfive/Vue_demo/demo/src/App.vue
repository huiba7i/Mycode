<template>
  <div id="app">
    <img src="./assets/logo.png">

    <!-- 第一路由导航 -->
    <div>
      <router-link to="log">登陆</router-link>
      <router-link to="reg">注册</router-link>
    </div>
    <!-- 当路由匹配到组件时，将组件渲染到该标记中 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
