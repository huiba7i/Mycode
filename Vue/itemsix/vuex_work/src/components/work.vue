<template>
  <div>
    <form action method="post">
      <label for="username">账号：</label>
      <input type="text" id="username">
      <br>
      <label for="pwd">密码：</label>
      <input type="password" id="pwd">
      <br>
      <input type="button" @click="login" value="登陆">
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      console.log(777);
    }
  }
};
</script>

<style scoped>
input {
  margin: 4px 0;
}
</style>
