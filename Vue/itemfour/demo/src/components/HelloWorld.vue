<template>
  <div class="hello">
    <Vuetext :onedata="messgae" :twodata="count" @show="showFather"></Vuetext>
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <!-- <ul>
      <li>
        <a href="https://vuejs.org" target="_blank">Core Docs</a>
      </li>
      <li>
        <a href="https://forum.vuejs.org" target="_blank">Forum</a>
      </li>
      <li>
        <a href="https://chat.vuejs.org" target="_blank">Community Chat</a>
      </li>
      <li>
        <a href="https://twitter.com/vuejs" target="_blank">Twitter</a>
      </li>
      <br>
      <li>
        <a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a>
      </li>
    </ul>-->
  </div>
</template>

<script>
import Vuetext from "./test.vue";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      messgae: "this is text",
      count: 77
    };
  },
  components: {
    Vuetext
  },
  methods:{
    showFather:function(){
      console.log(`触发了父组件的方法！`);
      this.count++;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
