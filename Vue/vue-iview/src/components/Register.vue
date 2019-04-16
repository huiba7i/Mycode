<template>
  <Row>
    <Col span="18">
      <Form ref="users" :label-width="400" :model="users" :rules="regRule">
        <FormItem label="账号：" prop="account">
          <Input v-model="users.account" placeholder="输入账号"></Input>
        </FormItem>
        <FormItem label="密码：" prop="password">
          <Input type="password" v-model="users.password" placeholder="输入密码"></Input>
        </FormItem>
        <FormItem label="确认密码：" prop="conpassword">
          <Input type="password" v-model="users.conpassword" placeholder="再次输入密码"></Input>
        </FormItem>
        <FormItem label="性别：" prop="sex">
          <RadioGroup v-model="users.sex">
            <Radio label="男"></Radio>
            <Radio label="女"></Radio>
          </RadioGroup>
        </FormItem>
        <FormItem label="兴趣：" prop="likes">
          <CheckboxGroup v-model="users.likes">
            <Checkbox label="休闲"></Checkbox>
            <Checkbox label="娱乐"></Checkbox>
            <Checkbox label="学习"></Checkbox>
            <Checkbox label="游戏"></Checkbox>
          </CheckboxGroup>
        </FormItem>

        <FormItem>
          <Button type="primary" @click="regVali('users')">注册</Button>
          <Button type="warning" @click="resetting" ghost>重置</Button>
        </FormItem>
      </Form>
    </Col>
  </Row>
</template>

<script>
export default {
  data() {
    const accVali = (rule, value, message) => {
      this.$axios
        .get(`/sys/user/select?id=${value}`)
        .then(resp => {
          if (resp.data) {
            message("该账号已被注册");
          } else {
            message();
            console.log(resp.data);
          }
        })
        .catch(error => {
          console.log(error);
        });
    };
    const compore = (rule, value, message) => {
      if (this.users.password != value) {
        message("两次输入的密码不一致");
      } else if (value == "") {
        message("不能为空!");
      } else {
        message();
      }
    };
    const sexVali = (rule, value, message) => {
      if (value == "") {
        message("性别为必选项！");
      } else {
        message();
      }
    };
    const likesVali = (rule, value, message) => {
      if (value == "") {
        message("兴趣最少选一种！");
      } else {
        message();
      }
    };

    return {
      users: { account: "", password: "", conpassword: "", sex: "", likes: [] },
      regRule: {
        account: [
          { required: true, message: "账号不能为空", trigger: "blur" },
          {
            pattern: /^\d{3,}/,
            message: "账号只能为数字，并且长度不能少于3",
            trigger: "blur"
          },
          { validator: accVali, trigger: "blur" }
        ],
        password: [
          {
            required: true,
            pattern: /^\w{6,}/,
            message: "密码格式不正确,应为6位以上的数字/字母/下划线",
            trigger: "blur"
          },
          { required: true, message: "密码不能为空", trigger: "blur" }
        ],
        conpassword: {
          required: true,
          validator: compore,
          trigger: "blur"
        },
        sex: { required: true, validator: sexVali },
        likes: { required: true, validator: likesVali }
      }
    };
  },
  methods: {
    regVali(name) {
      //   this.isload = true;
      this.$refs[name].validate(valid => {
        // this.isload = false;
        if (valid) {
          this.$Message.success("注册成功");
        } else {
          this.$Message.error("注册失败");
        }
      });
    },
    resetting() {
      this.users.account = "";
      this.users.password = "";
      this.users.conpassword = "";
    }
  }
};
</script>