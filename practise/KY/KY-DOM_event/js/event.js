function test(){
    console.log('点击了按钮');
}

/*
var btn = document.getElementById('btn');
// (2.1)DOM给标签元素注册事件: 标签对象.on事件名称 = 处理函数;
btn.onclick = test;
*/

// 浏览器为每个加载html页面的窗口生成一个window对象
// load事件:可以加在<body>标签上或window对象上
/*
document.body.onload = function(){
    console.log('页面加载完成,给标签元素注册事件');
    var btn = document.getElementById('btn');
    // 给标签元素注册事件
    btn.onclick = test;

};


window.onload = function(){
    console.log('页面加载完成,给标签元素注册事件');
    var btn = document.getElementById('btn');
    // 给标签元素注册事件
    btn.onclick = test;

    // 取消事件
    // btn.onclick = null;
};
*/

// (2.2)调用方法: 标签对象.addEventListener('事件名称', 事件处理函数);  注册事件
// ie8及以下不支持
var btn = document.getElementById('btn');
btn.addEventListener('click', test);

// 删除事件(如果要删除事件,事件处理函数不能是匿名函数): 调用removeEventListener('事件名称', 事件处理函数);
// btn.removeEventListener('click', test);