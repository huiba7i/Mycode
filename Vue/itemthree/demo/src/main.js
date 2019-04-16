// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import $ from 'jquery'
// import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import axios from 'axios'
// nodejs中的原生模块querystring: 可以将json对象转成字符串
import qs from 'querystring'

Vue.config.productionTip = false
// 当多个js中需要用axios,可以将其添加在Vue的原型中,不需要重复导入这个模块
// Vue.prototype.$http = axios
/* eslint-disable no-new */

//Vue-three
let vm = new Vue({
    el: '#app',
    data: {
        food: {
            name: '糖醋里脊', price: 20, quantity: 5, disc: 0.8
        },
        foods: [
            { name: '鸡丁', price: 19, quantity: 1 },
            { name: '酸菜鱼', price: 24, quantity: 2 },
            { name: '茄子', price: 16, quantity: 3 }
        ],
        monitor: `Holle`,
        txtVal:''
    },
    //计算属性  --  逻辑相对复杂的操作用计算属性
    computed: {
        sumPrice: function () {
            console.log(typeof this.food.price)
            return this.food.price * this.food.quantity * this.food.disc
        },
        allPrice: function () {
            let p = 0;
            for (let l = 0; l < this.foods.length; l++) {
                p += this.foods[l].price * this.foods[l].quantity;
                console.log(p);
            }
            return p;
        }
    },
    //侦听属性  --  开销比较大的操作或者异步操作用监听器
    //侦听器  监听异步操作--当数据发生改变时会触发监听
    watch: {
        // 当monitor的值发生改变时触发该
        monitor: {
            handler: function (newVal, oldVal) {
                console.log(`改变前的属性为:${oldVal},改变后的属性为：${newVal}`);
                //执行异步操作
            },
            // 当数据第一次绑定也触发监听,添加immediate选项
            immediate: true
        },
        txtVal:{
            handler:function(newVal){
                console.log(newVal.count);
                console.log('txtVla改变后的值为：',newVal);
            },
            deep:true,  //深度监听,可监听   对象的属性的变化
        }
    },
})

//Vue实例的生命周期
new Vue({
    el: "#appTwo",
    data: {
        msg: `Vue实例的生命周期`,
    },
    watch: {
        msg: function (newVal, oldVal) {
            console.log('msg更新之前值为:', newVal, ',更新之后值为:', oldVal);
        }
    },
    methods: {
        destroyVue: function () {
            this.$destroy(); // 手动销毁Vue实例
        }
    },
    // 创建
    beforeCreate() {
        console.log('创建Vue实例对象,初始化之前=======');
        console.log('data选项属性: ', this.$data);
        console.log('挂载的el属性: ', this.$el)
        console.log('监听: ', this.$options.watch);
        console.log('methods事件处理器: ', this.$options.methods);
    },
    created() {
        console.log('创建Vue实例对象,初始化之后=======');
        console.log('data选项属性: ', this.$data);
        console.log('挂载的el属性: ', this.$el)
        console.log('监听: ', this.$options.watch);
        console.log('methods事件处理器: ', this.$options.methods);
    },
    // 渲染
    beforeMount() {
        console.log('将Vue实例对象,挂载到指定el的标签元素上,渲染DOM之前=======');
        console.log('data选项属性: ', this.$data);
        console.log('挂载的el属性: ', this.$el)
        console.log('监听: ', this.$options.watch);
        console.log('methods事件处理器: ', this.$options.methods);
    },
    mounted() {
        console.log('将Vue实例对象,挂载到指定el的标签元素上,渲染DOM之后=======');
        console.log('data选项属性: ', this.$data);
        console.log('挂载的el属性: ', this.$el)
        console.log('监听: ', this.$options.watch);
        console.log('methods事件处理器: ', this.$options.methods);
    },

    // 更新数据
    beforeUpdate() {
        console.log('Vue实例对象中的数据更新,渲染DOM之前=======');
        console.log('data选项属性: ', this.$data);
        console.log('挂载的el属性: ', this.$el)
        console.log('监听: ', this.$options.watch);
        console.log('methods事件处理器: ', this.$options.methods);
    },
    updated() {
        console.log('Vue实例对象中的数据更新,渲染DOM之后=======');
        console.log('data选项属性: ', this.$data);
        console.log('挂载的el属性: ', this.$el)
        console.log('监听: ', this.$options.watch);
        console.log('methods事件处理器: ', this.$options.methods);
    },

    // 销毁
    beforeDestroy() {
        console.log('销毁Vue实例对象之前=======');
        console.log('data选项属性: ', this.$data);
        console.log('挂载的el属性: ', this.$el)
        console.log('监听: ', this.$options.watch);
        console.log('methods事件处理器: ', this.$options.methods);
    },
    destroyed() {
        console.log('销毁Vue实例对象之后,不再控制DOM元素=======');
        console.log('data选项属性: ', this.$data);
        console.log('挂载的el属性: ', this.$el)
        console.log('监听: ', this.$options.watch);
        console.log('methods事件处理器: ', this.$options.methods);
    },
})/*.$mount('#appTwo')   -- 如果创建Vue实例时没有添加el选项可以在此处手动挂载*/