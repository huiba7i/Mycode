//封装ID
var $ = function (id) {
    return document.getElementById(id);
}

//当浏览器加载完成时给省份下拉框添加省份
window.onload = function () {
    var province = $("province");
    var praName = Array("江西省", "浙江省", "福建省", "广东省", "云南省");
    //添加下拉框
    for (var i = 0; i < praName.length; i++) {
        var op = document.createElement("option");
        op.innerHTML = praName[i];
        province.appendChild(op);
    }
}

//当省份发生改变选中城市时给市级下拉框添加值
function selProvince(proSelect) {
    var city = $("city");
    //当省份发生改变时清空市级下拉框
    city.options.length = 1;

    var cityArray = new Array;

    //用字符串标识匹配比直接用索引值匹配更不容易出错
    cityArray["江西省"] = ["南昌市", "吉安市", "九江市", "上饶市", "抚州市"];
    cityArray["浙江省"] = ["杭州市", "宁波市", "温州市", "金华市"];
    cityArray["福建省"] = ["厦门市", "泉州市", "福州市", "三明市"];
    cityArray["广东省"] = ["广州市", "深圳市", "汕头市", "东菀市"];
    cityArray["云南省"] = ["昆明市", "曲靖市", "玉溪市", "丽江市"];
    var cityname = proSelect.value;     //获取省份value值
    var citys = cityArray[cityname];    //获取省份对应的数组

    //添加市级下拉框并赋value值
    for (var i = 0; i < citys.length; i++) {
        var op = document.createElement('option');  //下拉框
        op.innerHTML = citys[i];       //给市级下拉框赋值
        city.appendChild(op);       //添加option到市级下拉框的末尾
    }
}