<template>
  <div id="login">
    <div class="all">
      <h2>登陆</h2>
      <el-row>
        <el-col :span="8" :offset="8">
          <el-form label-position="right" :model="user">
            <el-form-item label="用户名:">
              <el-input
                type="text"
                placeholder="注册使用的用户名"
                size="small"
                v-model="user.username"
                @focus="emptyone"
              ></el-input>
            </el-form-item>
            <el-form-item label="密码:">
              <el-input
                type="password"
                placeholder="密码"
                size="small"
                v-model="user.userpwd"
                @focus="emptyone"
              ></el-input>
              <div class="point"></div>
            </el-form-item>
            <el-button type="primary" size="mini" @click="login">登陆</el-button>
            <br>
            <br>
            <router-link to="/reg">
              <el-button type="danger" size="small" plain>还没有账号？点击注册</el-button>
            </router-link>
          </el-form>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import qs from "querystring";
export default {
  data() {
    return {
      user: {
        username: "",
        userpwd: ""
      }
    };
  },
  methods: {
    login() {
      if (this.user.username == "" || this.user.userpwd == "") {
        $(".point")[0].innerText = "填写完整信息";
        return;
      }
      this.$axios
        .post(
          "http://127.0.0.1:8080/cgi-bin/login.py",
          qs.stringify({
            username: this.user.username,
            userpwd: this.user.userpwd
          })
        )
        .then(resp => {
          if (resp.data == "fail") {
            alert("登陆失败，用户名或密码错误");
          } else {
            this.$router.push("/userlist");
          }
        })
        .catch(error => {
          console.log(error);
        });
      //   $.post("http://127.0.0.1:8787/cgi-bin/login.py",{"username":this.user.username,"userpwd":this.user.userpwd},function(data){
      //       console.log(data)
      //   })
    },
    emptyone() {
      $(".point")[0].innerText = "";
    }
  }
};
</script>

<style scoped>
.point {
  height: 20px;
  text-align: left;
  line-height: 20px;
  color: red;
  font-size: 12px;
  opacity: 0.7;
}
.el-form-item {
  margin-bottom: 0;
}
#login {
  height: 400px;
  width: 60%;
  margin: 0 auto;
  background: url("../img/timg1.jpg");
  border-radius: 20px;
}
.all{
  padding: 30px;
}
</style>
