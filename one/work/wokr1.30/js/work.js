var btn = document.getElementsByTagName("button");  //所有按钮的数组
var quantity = document.getElementById("quantity"); //购物车数量
var foodname = document.getElementsByName("food_name"); //所有商品名称的数组
var price = document.getElementsByName("price");   //商品页面所有商品价格的数组
var tTbody = document.getElementById('tbody');      //tbody标签
var tb = document.getElementById("tb");     //购物车的表格
// var td2 = document.createElement("td");     //购物车菜品列
// var td3 = document.createElement("td");     //购物车菜品价格列
var tFoodName = document.getElementsByClassName('tFoodName');   // 购物车商品名称
var myTr = tTbody.getElementsByTagName("tr");       //购物车页面的tr标签数组
var myTb = document.getElementById("tb");      //购物车页面的tb标签
var wareCheck = tTbody.getElementsByTagName("input");     //td内的input标签(除去全选)
var allCheck = document.getElementById("allcheck");     //全选input框
var tPrice = document.getElementsByClassName("tprice");   //购物车页面价格数组
var tQuantity = document.getElementsByClassName('squantity');  //购物车页面商品数量的数组
var sum_all = document.getElementById("sum_all");   //购物车页面总计对象
var a = Number(sum_all.innerHTML);        //购物车页面总计数字
var count = 0;
var shopCarVold = function () {  //购物车为空的提示函数
    if (tTbody.innerHTML == '') {
        alert("您还没有选购商品！")
    }
}

//获得按钮的下标
for (var i = 0; i < btn.length; i++) {
    btn[i].index = i;
    btn[i].onclick = function () {

        //判断购物车是否非空
        if (tTbody.innerHTML == '') {
            addQuantity(this.index);
        }
        else        //不为空的时候判断是否有相同的商品
        {
            var fname = document.getElementsByName("food_name")[this.index]; //商品页面 商品名称的数组

            for (var j = 0; j < tFoodName.length; j++) {       //当有相同名称的商品时不添加另外的行，只加数量
                if (tFoodName[j].innerHTML == fname.innerHTML) {
                    var tNumber = document.getElementsByClassName('tNumber')[j];
                    var tN = tNumber.getElementsByClassName('squantity')[0];
                    var n = parseInt(tN.innerHTML);
                    tN.innerHTML = ++n;
                    alert("加入购物车成功");
                    return;
                }
            }
            addQuantity(this.index);
        }
    }
}
function addQuantity(index) {
    var tFood = document.getElementsByClassName('food')[index];     // 获得指定索引按钮上商品的所有信息
    var tFoodName = tFood.getElementsByTagName('span')[0];          // 商品名称标签
    var tPrice = tFood.getElementsByTagName('span')[2];             //商品价格标签

    // 创建行
    var newRow = document.createElement("tr");
    newRow.setAttribute('name', 'tr2');
    // 第一列
    var td1 = document.createElement("td");
    td1.innerHTML = "<input type='checkbox' onclick ='checkSon()'>";
    // 第二列
    var td2 = document.createElement("td");
    td2.setAttribute('class', 'tFoodName');
    td2.innerHTML = tFoodName.innerHTML;
    // 第三列
    var td3 = document.createElement("td");
    td3.setAttribute("class", "tprice");
    td3.innerHTML = tPrice.innerHTML;
    // 第四列
    var td4 = document.createElement("td");
    td4.setAttribute("class", "tNumber");
    td4.innerHTML = "<img class='sub' src='imgs/sub.jpg'><span name='squantity' class='squantity'>1</span><img class='add' src='imgs/add.jpg'>";
    //第五列
    var td5 = document.createElement("td");
    td5.innerHTML = "<button class='del' onclick='delRow()'>删除</button>";

    newRow.appendChild(td1);
    newRow.appendChild(td2);
    newRow.appendChild(td3);
    newRow.appendChild(td4);
    newRow.appendChild(td5);
    tb.appendChild(newRow);
    tTbody.appendChild(newRow);

    // //点击删除按钮删除该行订单，购物车数量减一
    td5.getElementsByClassName('del')[0].onclick = function () {
        console.log(sum_all.innerHTML);
        var nowPrice = Number(sum_all.innerHTML);    //重新获取总价
        var r = confirm("确定要删除该商品吗？");
        if (r == true) {
            var parTr = this.parentNode.parentNode  //当前行
            var all = parTr.getElementsByTagName("input");  //当前行内的复选框
            var b = Number(parTr.getElementsByClassName("tprice")[0].innerHTML)  //当前行的价格
            var c = Number(parTr.getElementsByClassName("squantity")[0].innerHTML)  //当前行的数量
            for (var l = 0; l < myTr.length; l++) {
                if (all[0].checked == true) {                   //判断当前行是否非选中
                    count = nowPrice - b * c;                          //为选中时总计减去当前行的总价
                    sum_all.innerHTML = count;               //结果赋给总计
                }
                else if (wareCheck[l].checked == true) {
                    document.getElementById("allcheck").checked = true;
                }
            }
            tb.tBodies[0].removeChild(this.parentNode.parentNode);      //删除本行
            quantity.innerHTML = myTr.length;
            alert("删除成功");
        }
        if (myTr.length == 0) {
            document.getElementById("allcheck").checked = false;    //如果购物车页面没有行，全选不选
            shopCarVold();
        }
    }

    //商品数量添加按键
    var add = document.getElementsByClassName("add");
    //商品数量减号按键
    var sub = document.getElementsByClassName("sub");
    for (var i = 0; i < add.length; i++) {
        add[i].index = i;
        add[i].onclick = function () {
            //商品数量值
            var squantity = document.getElementsByName("squantity")[this.index];
            var s = parseInt(squantity.innerHTML);
            squantity.innerHTML = ++s;      //购物车商品数量加一
            var nowTr = this.parentNode.parentNode      //当前行
            var nowcheckbox = nowTr.getElementsByTagName('input')[0];   //行内复选框
            var nowPrice = Number(document.getElementById("sum_all").innerHTML); //当前总计
            var trPrice = nowTr.getElementsByClassName("tprice")[0].innerHTML;  //行内商品价格
            if (nowcheckbox.checked == true) {              //选框选中时点击加号总计加上一个单价
                sum_all.innerHTML = nowPrice + Number(trPrice);
            }
        }

    }
    for (var j = 0; j < sub.length; j++) {
        sub[j].index = j;
        sub[j].onclick = function () {
            var squantity = document.getElementsByName("squantity")[this.index];
            var s = parseInt(squantity.innerHTML);

            var nowTr = this.parentNode.parentNode      //当前行
            var nowcheckbox = nowTr.getElementsByTagName('input')[0];   //行内复选框
            var nowPrice = Number(document.getElementById("sum_all").innerHTML); //当前总计
            var trPrice = nowTr.getElementsByClassName("tprice")[0].innerHTML;  //行内商品价格
            if (nowcheckbox.checked == true) {              //选框选中时点击减号总计减一个单价
                //判断购物车商品数量是否为1，为1时不能再减
                if (s == 1) {
                    alert("商品数量最少为1");
                } else {
                    sum_all.innerHTML = nowPrice - Number(trPrice);
                }
            }
            if(nowcheckbox.checked == false){
                if (s == 1) {
                    alert("商品数量最少为1");
                }
            }
            if (s != 1) {
                squantity.innerHTML = --s;  //购物车商品数量减一
            }
        }
    }

    //更新购物车物品样数
    quantity.innerHTML = myTr.length;
    alert("加入购物车成功！")

}

//购物车全选与全不选
function checkAll(all) {
    sum_all.innerHTML = 0;
    a = 0;
    if (all.checked == true) {  //判断全选按钮是否选中
        for (var j = 0; j < tPrice.length; j++) {   //如果选中将每行的价格与数量相乘
            count = tPrice[j].innerHTML * tQuantity[j].innerHTML;   //赋给变量
            a += count;         //将所有的结果相加
        }
        sum_all.innerHTML = a;      //再将相加得到的结果赋给总计
    }
    for (var i = 0; i < wareCheck.length; i++) {
        wareCheck[i].checked = all.checked;
    }
}

function checkSon() {
    a = 0;     //触发事件时总计清零
    for (var j = 0; j < wareCheck.length; j++) {
        if (wareCheck[j].checked == true) {     //判断选框是否选中
            count = tPrice[j].innerHTML * tQuantity[j].innerHTML;   //选中框索引值的价格和数量相乘得到的结果赋给变量
            a += count;     //将价格和数量的乘积相加
        }
    }
    sum_all.innerHTML = a;  //结果赋给总计价格
    for (var i = 0; i < wareCheck.length; i++) {
        if (!wareCheck[i].checked) {     //有一个复选框未选中时全选不选
            allCheck.checked = false;
            break;
        }
        allCheck.checked = true;
    }
}

//删除所选
function deleteWare() {
    //全部删除
    if (allCheck.checked == true) {
        var L = myTr.length;
        var r = confirm('确认全部删除吗？');
        if (r == true) {
            for (var i = 0; i < L; i++) {
                myTr[0].parentNode.removeChild(myTr[0]);
                allCheck.checked = false;   //全选删除时全选框为false
                quantity.innerHTML = 0;     //全选删除时购物车数量为0
                sum_all.innerHTML = 0;     //全删后总计为0
            }
            shopCarVold();
        }

    }
    //选中删除
    else {
        for (var j = wareCheck.length - 1; j >= 0; j--) {
            if (wareCheck[j].checked == true) {
                tTbody.removeChild(wareCheck[j].parentNode.parentNode);
                //删除选中时购物车数量为剩余的选框数量
                quantity.innerHTML = wareCheck.length;
                sum_all.innerHTML = 0;
            }
        }
    }
}

//点击我的购物车隐藏商品div
var myshopcar = document.getElementById('menu_a');
var shopcar = document.getElementById('shopcar_my');
function shopCar() {
    myshopcar.style.display = 'none';
    shopcar.style.display = 'block';
    shopCarVold();

}

//点击隐藏购物车页面显示商品页面
function go_on_order() {
    myshopcar.style.display = 'flex';
    shopcar.style.display = 'none';
}

function deleteWareTwo() {
    var L = myTr.length;
    for (var i = 0; i < L; i++) {
        myTr[0].parentNode.removeChild(myTr[0]);
        allCheck.checked = false;
        quantity.innerHTML = 0;
        sum_all.innerHTML = 0;
    }
}
var allPrice = document.getElementById("settle");
allPrice.onclick = function () {
    var sumPrice = document.getElementById("sum_all").innerHTML;
    if (sumPrice == 0) {
        alert("请您选择需要购买的商品再进行结算！")
    } else {
        alert("您的商品需付款：" + sumPrice + "元");
        go_on_order();
        deleteWareTwo();
    }
}