var shop_food = document.getElementById("shop_food");   //已选的商品框
var food_menu = document.getElementById("food_menu");   //商品栏
var food_check = food_menu.getElementsByTagName("input");   //商品栏的勾选框
var food_name = document.getElementsByName("food_name");   //商品栏的商品name
var username = document.getElementById("username"); //用户名
window.onload = function () {
    //浏览器加载完毕时把 web 存储的值获取到商品总框中
    addShop()
    //判断商品总框中清空之后是否有内容，如果没有则添加对象的内容
    if (shop_food.innerHTML == "") {
        shop_food.innerHTML = "别看了，你买不起任何东西!";
    }
    var str = shop_food.innerHTML;      //商品框中的商品名称

    //循环判断商品总框中存在的商品名称，若存在，对应的复选框选中
    for (var j = 0; j < food_check.length; j++) {
        if (str.indexOf(food_name[j].innerHTML) != -1) {
            food_check[j].checked = true;
        }
    }
    //获取登录页储存的用户名并赋值给购物车的用户名
    var uname = localStorage.getItem("username");
    //判断本地存储是否有存储用户名，有则赋值，没有则返回登录页
    if (uname) {
        username.innerHTML = uname;

    } else {
        location = "work_login.html";
    }

}

//加入购物车
function addShop() {
    //换购物车框的提示语,当购物车框包含有水果名的时候不会清空原有的内容
    if(shop_food.innerHTML == "空空如也！！"){
        shop_food.innerHTML = "别看了，你买不起任何东西!";
        console.log(shop_food.innerHTML);
    }
    //循环判断选框是否选中，若时选中的状态则把对应的商品名称放到商品总框中
    for (var i = 0; i < food_check.length; i++) {
        if (food_check[i].checked) {
            var foodName = (shop_food.innerHTML += ('\n' + food_name[i].innerHTML));
            localStorage.setItem("starName", foodName);  //将得到的值存储到本地
        }
    }
    shop_food.innerHTML = localStorage.getItem("starName");  //获取存储的值
    if (shop_food.innerHTML == "") {
        shop_food.innerHTML = "别看了，你买不起任何东西!";
    }
}

//清空购物车事件    
function delShop() {
    var r = confirm("要乖乖清空购物车吗？");
    if (r == true) {
        for (var n = 0; n < food_check.length; n++) {
            food_check[n].checked = false;
        }
        localStorage.removeItem("starName");
        shop_food.innerHTML = "空空如也！！";
    }
}

//注销
function logOff() {
    var q = confirm("买不起要走了吗？");
    if (q == true) {
        localStorage.removeItem("username");
        location = "work_login.html";
    }
}

// 判断一串字符串中是否包含另一串字符串
var str = "abc";
if (str.indexOf("bc") != -1) {
    console.log(str.indexOf("bc") != -1);
}