//JSON创建对象
/* var obj1 = {
    "stuid": 1,
    "name": "丁某",
    "sex": "男",
    "age": 29
}
console.log(obj1);

var arr = ["hello", "aowin", 100, "Ajax"]
//对象shuzu
var arr1 = [
    { "stuid": 2, "name": "丁某2", "sex": "男", "age": 28 },
    { "stuid": 3, "name": "丁某3", "sex": "男", "age": 30 },
    { "stuid": 4, "name": "丁某4", "sex": "男", "age": 31 }
]
console.log(arr1[0].name); */

//Ajax操作步骤：
function sendAjax() {
    //创建XMLHttpRequest对象
    var xhr;
    if (window.XMLHttpRequest) {  //ie7 + chrome firefox
        xhr = new XMLHttpRequest();
    } else {  //ie7 ie6 ie5
        xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }
    console.log(xhr);

    console.log(xhr.readyState);    //-0-未初始化，还调用 open() 方法
    //-2- 向服务器端发送异步请求
    //参数 1：请求方式get/post,参数 2：url ,参数3： boolean 数据  true-异步  false-同步
    xhr.open('get', 'data/file.txt', true);
    console.log(xhr.readyState);    //1正在加载中
    //  发送请求
    xhr.send();

    // 3.获得服务器端响应的数据
    //根据响应处理状态的变化执行处理任务，当状态发生变化时触发事件 onreadYstatechange 
    xhr.onreadystatechange = function () {
        console.log(xhr.readyState);    // 2  3  4
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log('响应完成');
            var text = xhr.responseText;    //获得响应的内容
            console.log('响应的内容', text);
            //通过DOM局部更新 html 中的内容
            var con = document.getElementById('content');
            con.value = text;
        }
    }
}
