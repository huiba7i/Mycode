<template>
  <div>
    <el-form label-position="right" label-width="200px" :model="user">
      <el-form-item label="账号">
        <el-input placeholder="账号或邮箱或手机号" v-model="user.account"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input placeholder="密码" type="password" v-model="user.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data(){
    return {
      user: {account:'', password:''}
    }
  },
  methods: {
    login(){
      console.log("登录的账号信息: ",this.user);
    }
  }
}
</script>