<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div class="text-center">
      <Mywork @getSex="getSex" ></Mywork>
      <Myworklike @getLike="getLick"></Myworklike>
      <p>性别为：{{fSex}}</p>
      兴趣为：<span v-for="like in fLike" :key="like">{{like}}</span>
    </div>
  </div>
</template>

<script>
import Mywork from "./components/work";
import Myworklike from "./components/worklike"
export default {
  name: "App",
  data() {
    return {
      fSex:'',
      fLike:'',
    };
  },
  components: {
    Mywork,Myworklike
  },
  methods:{
    //接收子元素传递的性别
    getSex:function(sexdata){
      this.fSex = sexdata;
      console.log(sexdata,this.fSex)
    },
    // 接收子元素传递的兴趣
    getLick:function(likedata){
      this.fLike = likedata;
      console.log(event,this);
    }
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
