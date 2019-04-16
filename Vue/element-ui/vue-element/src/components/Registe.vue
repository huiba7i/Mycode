<template>
  <div>
    <el-form label-position="right" label-width="200px" :model="user">
      <el-form-item label="账号">
        <el-input placeholder="账号或邮箱或手机号" v-model="user.account"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input placeholder="密码" type="password" v-model="user.password"></el-input>
      </el-form-item>
      <el-form-item label="确认密码">
        <el-input placeholder="与上面的密码一致" type="password" v-model="user.confirmPass"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-radio-group v-model="user.sex">
          <!-- label的值相当于表单控件的value -->
          <el-radio label="男">男</el-radio>
          <el-radio label="woman">女</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="爱好">
        <el-checkbox-group v-model="user.favor">
          <el-checkbox label="xiuxian">休闲</el-checkbox>
          <el-checkbox label="yule">娱乐</el-checkbox>
          <el-checkbox label="shopping">购物</el-checkbox>
          <el-checkbox label="food">美食</el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="居住地">
        <el-select v-model="user.home">
          <!-- label显示的文字, value选择的值 -->
          <el-option label="北京" value="北京"></el-option>
          <el-option label="上海" value="上海"></el-option>
          <el-option label="杭州" value="杭州"></el-option>
          <el-option label="苏州" value="苏州"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="城市">
        <el-radio-group v-model="city" @change="newCity" size="small" text-color="aqua">
            <!-- disabled -- 禁用 -->
          <el-radio-button disabled label="杭州"></el-radio-button>
          <el-radio-button label="上海"></el-radio-button>
          <el-radio-button label="江西"></el-radio-button>
          <el-radio-button label="广东"></el-radio-button>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="备注">
        <el-input type="textarea" rows="3" placeholder="请输入内容" v-model="user.text"></el-input>
      </el-form-item>
      <el-form-item label="出生年月">
        <!-- format:输入框显示的格式, value-format:绑定的值的格式 -->
        <el-date-picker type="month" v-model="user.birth" value-format="yyyy/MM" format="yyyy/MM"></el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="registe">注册</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        account: "",
        password: "",
        confirmPass: "",
        sex: "",
        favor: [],
        home: "",
        text: "",
        birth: ""
      },
      city: ""
    };
  },
  methods: {
    registe() {
      console.log("注册的基本信息: ", this.user);
    },
    newCity(){
        console.log(this.city)
    }
  }
};
</script>