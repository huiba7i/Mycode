<template>
  <div>
    <form action="">
      <input type="text" v-model="user.account">
      <input type="password" v-model="user.password">
      <input type="button"  value="登录" @click="login">
    </form>
  </div>
</template>

<script>
export default {
  data(){
    return {
      user: {account: '', password: ''}
    }
  },
  methods:{
    login(){
      // 调用action中的函数进行异步登录处理
      let pro = this.$store.dispatch({
        type: 'asyncLogin',
        user: this.user
      })
      // console.log(pro);
      pro.then((resp)=>{
        console.log(resp);
        this.$router.push({path: '/'});
      }).catch((error)=>{
        console.log(error)
      });
    }
  }
}
</script>