//1获取标签-id,className,name,TagName……(除了ID其他获取的都是属于数组,需要用索引值获取标签)
var p_One = document.getElementById("p1");
console.log(p_One, p_One.toString());
var p_Two = document.getElementsByName("p2");
console.log(p_Two);
var p_Three = document.getElementsByTagName("p");
console.log(p_Three, p_Three.length);
var a = document.getElementsByClassName("a1");
console.log(a, a[0]);

//2
// 标签对象.innerHtml--获取标签对象的内容，会解析对象的标签
// 标签对象.innerText--获取标签对象的内容，不会解析对象的标签
console.log(p_One.innerHTML, p_One.innerText);
//标签对象.innerHtml = "newHTMl"--改变标签原有内容(双标签)
p_One.innerHTML = "<i>newHTMl<i>";
var text_i = document.getElementsByTagName('input');
// 标签对象.标签属性--获取标签
console.log(text_i[0].placeholder);
//标签对象.标签属性 = '改变之后的值'--修改标签属性
text_i[0].placeholder = "文本2";
//设置只读，修改readOnlt属性(readOnly--只读，不可修改文本框内容)
// text_i[0].readOnly = "readOnly";

//3 标签对象.style.样式名称 = "需要修改的属性"
text_i[0].style.border = "2px solid";
text_i[0].style.borderRadius = "5px";
text_i[0].style.borderColor = "aqua";
//标签对象.style.样式名称 --获取样式
console.log(text_i[0].style.border)

//4
// blur --失去焦点时触发的事件      focus--获得焦点时触发的事件
function onblurEvent(changeColor_one) {
    text_i[0].style.borderColor = "red";
    console.log("失去焦点时颜色为：", changeColor_one.style.borderColor)
}
//！！！<input type="text" onblur="onblurEvent(this)" onfocus="focusEvert(this)">
//！！！onblurEvent(this)--  (this)--当前的标签对象
//！！！function onblurEvent(参数)-- 该参数所对应的为当前的标签对象
function focusEvert(changeColor_two) {
    text_i[0].style.borderColor = "yellow";
    console.log("获得焦点时颜色为：", changeColor_two.style.borderColor)
}
// submit--单击表单的提交按钮触发(只能在from表单中使用)
function submitEvent() {
    alert("提交完成");
}