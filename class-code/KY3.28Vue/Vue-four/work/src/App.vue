<template>
  <div id="app">
    <img src="./assets/logo.png">
    <MyRadio/>
    <MyCheckbox/>
    <p>选中的性别为: {{sex}}</p>
    <p>爱好为: {{likes}}</p>
  </div>
</template>

<script>
import MyRadio from './components/MyRadio'
import MyCheckbox from './components/MyCheckbox'
export default {
  name: 'App',
  components: {
    MyRadio,
    MyCheckbox
  }
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
