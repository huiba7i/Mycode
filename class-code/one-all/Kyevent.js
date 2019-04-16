function test(){
	alert("手慢了,红包已经被领完了");
}

function light(img){
//	alert(img); // 产生事件的那个标签对象
	img.src = "img/bulbon.jpg"; // 修改标记的属性
}

function lightOff(img){
	img.src = "img/bulboff.jpg";
}

function up(compan){
//	alert("输入框中的内容:"+compan.value);
	compan.value = compan.value.toUpperCase();
}

function textChanged(input){
	alert("内容有变化:"+input.value);
}

function init(){
	alert("页面加载完毕");
}
