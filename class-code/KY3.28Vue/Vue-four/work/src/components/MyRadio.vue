<template>
  <div>
    <label>性别</label>
    <input type="radio" value="男" v-model="sex">男
    <input type="radio" value="女" v-model="sex">女
  </div>
</template>

<script>
  export default{
    data(){
      return {sex: ''}
    }
  }
</script>