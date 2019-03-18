//work1
$("#slt").attr({
    "style": "margin: 20px auto 0 ;width:200px"     //修改样式让其居中
});
//给省级添加选项
$.each(["江西省", "浙江省", "广东省", "福建省", "湖南省"], function (index, val) {
    $("#province").append("<option value = " + val + ">" + val + "</option>");
})

$("#province").change(function () {     //添加 change 事件
    $("#city>option:nth-child(n+2)").remove();
    var preArry = new Array;
    preArry["选择省份"] = [];
    preArry["江西省"] = ["南昌市", "吉安市", "九江市"];
    preArry["浙江省"] = ["杭州市", "温州市", "宁波市"];
    preArry["广东省"] = ["深圳市", "揭阳市", "东菀市"];
    preArry["福建省"] = ["厦门市", "福州市"];
    preArry["湖南省"] = ["长沙市"];
    var proValue = this.value;        //给市级添加选项
    $.each(preArry[proValue], function (index, val) {
        $("#city").append("<option value = " + val + ">" + val + "</option>");
    })
    console.log($("#city>option").length);
}
)

//work2
$("#nav>li:first").css("background", "url('img/menu1.gif') 48px 23px");
$("#workTwo>ol").eq(0).css("display", "block");
//给li添加点击事件
$("#nav>li").click(function () {
    //给li添加index属性等于它的索引值
    $.each($("#nav>li"), function (index) {
        this.index = index;
    })
    //让所有ol隐藏，li的背景图都是灰色
    $.each($("#workTwo>ol"), function () {
        $("#nav>li").css("background", "url('img/menu2.gif') 48px 23px");
        $("#workTwo>ol").css("display", "none");
    })
    //给对应的li加蓝色的背景图，显示相应的ol
    this.style.background = "url('img/menu1.gif') 48px 23px";
    $("#workTwo>ol").eq(this.index).css("display", "block");

})