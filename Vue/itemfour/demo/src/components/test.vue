<template>
  <div>
    <p>{{msg}}</p>
    <p>接收父组件传递的第一个数据：{{onedata}}</p>
    <p>接收第二个数据：{{twodata}}</p>
    <button @click="sonClick">触发父组件传递过来的方法</button>
  </div>
</template>

<style>
p {
  margin: 5px 0;
}
</style>


<script>
export default {
  data() {
    return {
      msg: "HelloWorld Vue"
    };
  },
  props:["onedata","twodata"],
  methods:{
      sonClick:function(){
          //用 $emit 触发父组件传递过来方法，该方法可以传参数
          this.$emit("show");
      }
  }
};
</script>
