function $(id) {
    return document.getElementById(id);
}
var shoppingSort = $("shopping_commend_sort").style;  //购物车
//点击按钮购物车收起展开
$("shopping_commend_arrow").onclick = function () {
    var shoppingArrow = $("shopping_commend_arrow");  //显示隐藏按钮
    if (shoppingSort.display == "") {
        shoppingSort.display = "block";
    }
    if (shoppingSort.display == "block") {
        shoppingSort.display = "none";
        shoppingArrow.src = "images/shopping_arrow_down.gif";
    }
    else {
        shoppingSort.display = "block";
        shoppingArrow.src = "images/shopping_arrow_up.gif"
    }
}

//积分数组
var integral = document.getElementsByClassName("shopping_product_list_2")
//原价
var costPrice = document.getElementsByClassName("shopping_product_list_3");
//当当价
var ddPrice = document.getElementsByClassName("shopping_product_list_4");
//数量框td
var quantity = document.getElementsByClassName("shopping_product_list_5");
var cont;
var sum;
//计算积分
function integralSum() {
    cont = 0;
    for (var i = 0; i < integral.length; i++) {
        //商品数量
        var quanSum = Number(quantity[i].getElementsByTagName("input")[0].value);
        cont += Number(integral[i].innerText) * quanSum;
    }
    return cont;
}
$("product_integral").innerText = integralSum();

//计算总金额
function allPrice() {
    cont = 0;
    sum = 0;
    for (var l = 0; l < integral.length; l++) {
        var quanSum = Number(quantity[l].getElementsByTagName("input")[0].value);
        cont += parseFloat(costPrice[l].getElementsByTagName("label")[0].innerText) * quanSum;
    }
    return cont;
}
$("product_total").innerText = allPrice();
//计算节省金额
function cunDownSum() {
    var ddPr = 0
    sum = 0;
    for (var j = 0; j < integral.length; j++) {
        var quanSum = Number(quantity[j].getElementsByTagName("input")[0].value);
        ddPr += parseFloat(ddPrice[j].getElementsByTagName("label")[0].innerText) * quanSum;
    }
    sum = allPrice() - ddPr;
    sum.toFixed(2)
    return parseFloat(sum.toFixed(2));
}
$("product_save").innerText = cunDownSum();

//删除
function deletRow(delte) {
    // var deltRow = delte.parentNode.parentNode;  //删除按钮所在的行
    // var tBody = deltRow.parentNode;            //tbody

    var deleRowIndex = delte.parentNode.parentNode.rowIndex;  //删除按钮所在的行的索引
    $("myTableProduct").deleteRow(deleRowIndex);        //删除

    // tBody.removeChild(deltRow);
    //重新计算
    $("product_integral").innerText = integralSum();
    $("product_total").innerText = allPrice();
    $("product_save").innerText = cunDownSum();
}

//输入框改变时改变数值
for (var i = 0; i < quantity.length; i++) {
    quantity[i].getElementsByTagName("input")[0].onchange = function () {
            $("product_integral").innerText = integralSum();
            $("product_total").innerText = allPrice();
            $("product_save").innerText = cunDownSum();
    }
}