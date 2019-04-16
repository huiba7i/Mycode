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
      user
    }
  },
  method:{
    login(){
      // 调用action中的函数进行异步登录处理
      $store.dispatch({
        type: 'asyncLogin',
        user: user
      })
    }
  }
}
</script>