//键盘事件
function searchF(ev) {
    if (ev.keyCode == 70) {  //当键盘按下 f 时触发
        var xhr;    // 创建XMLHttpRequest对象
        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }
        //向服务器发送异步请求
        xhr.open("get", "data/text.json", true);

        xhr.send();

        // 获得响应内容
        // 回调函数
        function callback() {
            var div = document.getElementById("show");
            div.innerHTML = "";
            if (xhr.readyState == 4 && xhr.status == 200) {
                var serach = document.getElementById("show");
                var jsonText = xhr.responseText;    //响应的是json格式的文本
        // obj1 == obj2 获得的内容相同
                // var obj1 = eval('('+jsonText+')');
                var textJson = JSON.parse(jsonText);
                // console.log(typeof textJson,textJson);
                serach.style.display = "block";
            //把获得的内容放入搜索框下方的DIV，显示该DIV
                for (var i = 0; i < textJson.length; i++) {
                    var p = document.createElement("p");
                    p.innerHTML = textJson[i].f;
                    console.log(textJson[i].f);
                    serach.appendChild(p);
                }
            }
        }
        xhr.onreadystatechange = callback;
    }

}
//搜索框失去焦点是下方的DIV隐藏
function hide(){
    var div = document.getElementById("show");
    div.style.display = "none";
}

