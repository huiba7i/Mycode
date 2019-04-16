<template>
  <div>
    <form action>
      <label for="account">账号：</label>
      <input type="text" id="account">
      <br>
      <label for="pwd">密码：</label>
      <input type="password" id="pwd">
      <br>
      <input type="button" value="登陆">
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
label {
  display: inline-block;
  width: 80px;
  text-align: right;
}
input {
  margin: 3px 0;
}
</style>
