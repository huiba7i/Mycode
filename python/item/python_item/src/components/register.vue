<template>
  <div id="regiter">
    <h1>注 册</h1>
    <el-row>
      <el-col :span="10" :offset="7">
        <el-form id="mail" label-position="right" label-width="80px" :model="login">
          <el-form-item label="用户名:">
            <el-input
              type="text"
              placeholder="3-10个中文字符、英文字母、数字及下划线"
              size="small"
              v-model="login.username"
              @focus="clearpoint"
            ></el-input>
            <div class="point" v-text="point.namepoint"></div>
          </el-form-item>
          <el-form-item label="密码:">
            <el-input
              type="password"
              placeholder="不能含有非法字符，长度在6-10之间"
              size="small"
              v-model="login.userpwd"
              @focus="clearpoint"
            ></el-input>
            <div class="point" v-text="point.pwdpoint"></div>
          </el-form-item>
          <el-form-item label="手机号码:">
            <el-input
              type="text"
              placeholder="只能是数字11位,且首位必须为1"
              size="small"
              v-model="login.usertel"
              @focus="clearpoint"
            ></el-input>
            <div class="point" v-text="point.telpoint"></div>
          </el-form-item>
          <el-form-item label="性别:">
            <el-radio label="男" v-model="login.usersex"></el-radio>
            <el-radio label="女" v-model="login.usersex"></el-radio>
            <div class="point"></div>
          </el-form-item>
          <el-button type="primary" size="mini" @click="registe" plain>注册</el-button>
          <el-button size="mini" @click="resetting" plain>重置</el-button>
          <br>
          <br>
          <router-link to="/">
            <el-button type="success" plain>已有账号？点击登陆</el-button>
          </router-link>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import qs from "querystring";
export default {
  data() {
    return {
      login: {
        username: "",
        userpwd: "",
        usertel: "",
        usersex: ""
      },
      point: {
        namepoint: "",
        pwdpoint: "",
        telpoint: ""
      }
    };
  },
  methods: {
    registe() {
      let l = this.login;
      if (
        l.username == "" ||
        l.userpwd == "" ||
        l.usertel == "" ||
        l.usersex == ""
      ) {
        alert("请将信息填写完整");
      } else if (!/^[a-zA-Z\d_\u4e00-\u9fa5]{3,11}$/.test(l.username)) {
        this.point.namepoint = "用户名格式不正确";
      } else if (!/^[a-zA-Z_[0-9]{6,10}$/.test(l.userpwd)) {
        this.point.pwdpoint = "密码格式不正确";
      } else if (!/^[1]\d{10}$/.test(l.usertel)) {
        this.point.telpoint = "手机号码格式不正确";
      } else {
        this.$axios
          .post(
            "http://127.0.0.1:8080/cgi-bin/register.py",
            qs.stringify({
              username: this.login.username,
              userpwd: this.login.userpwd,
              usertel: this.login.usertel,
              usersex: this.login.usersex
            })
          )
          .then(resp => {
            if(resp.data == "success"){
              alert("注册成功")
              this.resetting()
            }else if(resp.data == "fail"){
              alert("注册失败，用户名重复")
            }
          })
          .catch(error => {
            console.log(error);
          });
      }
    },
    resetting() {
      this.login.username = "";
      this.login.userpwd = "";
      this.login.usertel = "";
      this.login.usersex = "";
    },
    clearpoint() {
      (this.point.namepoint = ""),
        (this.point.pwdpoint = ""),
        (this.point.telpoint = "");
    }
  }
};
</script>

<style scoped>
.point {
  height: 17px;
  text-align: left;
  line-height: 17px;
  color: red;
  font-size: 13px;
}
.el-form-item {
  margin-bottom: 0;
}
#regiter{
  height: 450px;
  margin: 0 auto;
  border: 1px solid;
  background: url("../img/timg.jpg");
}
</style>
  