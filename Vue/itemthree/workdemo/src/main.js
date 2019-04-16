// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import axios from 'axios'
// nodejs中的原生模块querystring: 可以将json对象转成字符串
import qs from 'querystring'
import { error } from 'util';

Vue.config.productionTip = false
// 当多个js中需要用axios,可以将其添加在Vue的原型中,不需要重复导入这个模块
// Vue.prototype.$http = axios
/* eslint-disable no-new */


//响应json数据
axios.get('/static/food.json').then(function (resp) {
    console.log(`${resp}`, resp.data);
    vm.shops = resp.data;
}).catch((error) => {
    console.log(`响应失败：${error}`)
})

let vm = new Vue({
    el: "#app",
    data: {
        shops: [],
        // index:0,
    },
    methods: {
        //按钮减1
        subQuantity: function (index) {
            if (vm.shops[index].quantity > 1) {
                vm.shops[index].quantity--;
            } else {
                alert(`商品数量不能少于1！`)
            }
        },
        //按钮加1
        addQuantity: function (index) {
            vm.shops[index].quantity++;
        },
        //删除指定行
        delt: function (index) {
            let con = confirm("确定要删除吗？");
            if (con == true) {
                vm.shops.splice(index, 1);
            }
        }
    },
    computed: {
        //总数量
        allQuantity: function () {
            let q = 0;
            for (let i = 0; i < this.shops.length; i++) {
                q += this.shops[i].quantity;
            }
            return q;
        },
        //总价
        allPrice: function () {
            let sum = 0;
            for (let l = 0; l < this.shops.length; l++) {
                sum += this.shops[l].quantity * this.shops[l].price;
            }
            return sum;
        }
    }
})
