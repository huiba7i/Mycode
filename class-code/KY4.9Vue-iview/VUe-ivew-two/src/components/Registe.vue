<template>
  <div>
    <Form ref="user" :model="user" :label-width="200" :rules="regRule">
      <FormItem label="账号" prop="account">
        <Input v-model="user.account" placeholder="昵称/手机号/邮箱"></Input>
      </FormItem>
      <FormItem label="密码" prop="password">
        <Input type="password" v-model="user.password" placeholder="密码"></Input>
      </FormItem>
      <FormItem label="确认密码">
        <Input type="password" v-model="user.confirmPass" placeholder="密码"></Input>
      </FormItem>
      <FormItem label="性别">
        <RadioGroup v-model="user.sex">
          <Radio label="男"></Radio>
          <Radio label="女"></Radio>
        </RadioGroup>
      </FormItem>
      <FormItem label="爱好">
        <CheckboxGroup v-model="user.favor">
          <Checkbox label="休闲"></Checkbox>
          <Checkbox label="娱乐"></Checkbox>
          <Checkbox label="美食"></Checkbox>
          <Checkbox label="购物"></Checkbox>
        </CheckboxGroup>
      </FormItem>

      <FormItem>
        <Button type="primary" @click="registe('user')" :loading="isload">注册</Button>
        <Button>取消</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
export default {
  data(){
    const accountDup = (rule,value, callback)=>{
      console.log(rule, value);
      this.$axios.get(`/sys/user/select?id=${value}`).then(
        (resp)=>{
          if(resp.data){
            callback('账号已经被注册了')
          }else{
            callback()
          }
        }
      ).catch((error)=>{
        callback(error)
      });
    };
    return {
      isload:false,
      user: {account:'', password: '', confirmPass: '', sex: '', favor:[]},
      regRule: {
        account: [
          { required: true, message: '账号不能为空', trigger: 'blur'},
          { min: 3, message: '账号不能少于3个字符', trigger: 'blur'},
          { validator: accountDup, trigger: 'blur'}
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur'},
          { pattern: /^\w{6,}$/, message: '密码不合法', trigger: 'blur'}
        ]
        
      }
    }
  },
  methods: {
    registe(name){
      this.isload = true;
      // console.log('注册的信息如下: ',this.user);
	  //this.$refs[name] -- 获得ref为name的表单
	  //.validate()对整个表单进行校验
      this.$refs[name].validate(valid => {
        this.isload = false;
        if(valid){
          this.$Message.success('注册成功');
        }else{
          this.$Message.error('注册失败');
        }
      })
    }
  },
}
</script>