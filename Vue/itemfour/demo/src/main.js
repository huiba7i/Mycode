// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import HelloWorld from './components/HelloWorld.vue'
import HelloText from './components/test.vue'

Vue.config.productionTip = false
// 当多个js中需要用axios,可以将其添加在Vue的原型中,不需要重复导入这个模块
// Vue.prototype.$http = axios

//Vue-four
//1.注册全局组建，创建Vue实例之前
// Vue.component(`my-component`,{
//     template:`<div><h2>标题</h2><p>正文</p></div>`
// });

//2.创建注册局部组建
//创建一个组建
let MyComponent = {
    //不能用Vue实例里的数据
    template:
    `<div>
     <h2>标题</h2><hr>
     <p>正文:{{msg}}</p>
     <p>{{numOne*numTwo}}</p>
     <p>{{sumNum}}</p>
     <button @click="test" class="btn btn-info btn-sm text-center">按钮</button>
     </div>`,
    // 组建可以有自己的数据，操作，样式
    data() {    //  (data数据必须要是函数)
        return {
            msg: `Hello`,
            numOne: 77,
            numTwo: 7
        }
    },
    methods: {
        test: function () {
            console.log(777);
        },
    },
    computed: {
        sumNum: function () {
            return this.numOne * this.numTwo;
        }
    }
}
new Vue({
    el: '#app',
    components: {    //只在父模板中可用
        'my-component': MyComponent,HelloWorld,HelloText
    },
    data: {

    },
})

