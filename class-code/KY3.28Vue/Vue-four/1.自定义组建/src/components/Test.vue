<template>
  <div>
    <p>{{testMsg}}</p>
  </div>
</template>

<!-- scoped:只在当前组件中有效 -->
<style scoped>
p{
  background-color: green;
  color: #fff;
}
</style>

<script>
  export default{
    data(){
      return {
        testMsg: 'Hello Test in Vue'
      }
    }
  }
</script>