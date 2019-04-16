// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
// nodejs中的原生模块querystring: 可以将json对象转成字符串
import qs from 'querystring'

Vue.config.productionTip = false

//Vue -- one
new Vue({
  el: '#app',
  // components: { App },
  // template: '<App/>'
  data:{
    namevalue:$('#username')[0].value,    //姓名
    agevalue:$('#age')[0].value,    //年龄
    // dlt:'',    //删除按钮
    //用户列表
    userList:[
      {'name':'ding','age':'22'},
      {'name':'wang','age':'21'},
    ],
    // 添加的新行
    newRows: {'name':$('#username')[0].value,'age':$('#username')[0].value},
    filg:"",
    index:0,
  },
  methods:{
      //添加
      add(){
        if(this.namevalue!==""&&this.agevalue!==""){
          this.userList.push({'name':this.namevalue,'age':this.agevalue});   //点击添加新行
        }else{
          alert('缺少信息！！！')
        }
      },
      //重置
      reset(){
        this.namevalue="",
        this.agevalue=""
      },
      //全部删除
      empty(){
          this.filg = 'all'
      },
      //删除单行
      delet(index){
        console.log(index);
        this.index = index;
        return this.index;
      },
      //模态框删除
      affirm(filg){
        if(filg=='all'){
          this.userList=[];
        }else{
          this.userList.splice(this.index,1);
          console.log(this.index)
        } 
      } 
  }
})
//??如果在html中通过vue动态的添加了标签，在该标签中添加方法需要重新 new 一个Vue ，在新的Vue中写方法
