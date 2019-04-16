<template>
  <div>
    <form action="" method="get">
      <input type="text" placeholder="账号" v-model="user.account">
      <input type="password" placeholder="密码" v-model="user.password">
      <input type="button" value="登录" @click="login">
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
  methods: {
    login(){
      // 伪造账号admin,123
      if(this.user.account=='admin' && this.user.password=='123'){
        // 登录成功时将账号保存在本地存储
        localStorage.setItem('user', this.user.account)
        // 路由重定向到/home, $router-路由器对象, $route - 当前路由
        this.$router.push('/home')
      }else{
        alert('账号或密码错误');
      }
    }
  }
}
</script>