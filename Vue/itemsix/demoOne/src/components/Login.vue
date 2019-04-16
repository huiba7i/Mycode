<template>
  <div>
    <form  method="get">
      <input type="text" placeholder="账号" v-model="user.account">
      <br>
      <input type="password" placeholder="密码" v-model="user.password">
      <br>
      <input type="button" value="登陆" @click="login">
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: { account: '', password: '' }
    };
  },
  methods: {
    login() {
      //伪造账号:
      if (this.user.account == "ding" && this.user.password == "250") {
          //登陆成功时将账号保存在本地存储
          localStorage.setItem('user',this.user.account)
          //路由重定向到/home，$router - 路由器对象,$route - 当前路由
          this.$router.push('/home')
      }else{
          alert('账号或密码错误！');
      }
    }
  }
};
</script>

<style scoped>
input{
    margin: 4px 0;
}
</style>
