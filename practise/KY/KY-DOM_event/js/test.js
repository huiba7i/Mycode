// 事件冒泡阶段(从内向外传播事件): 从发生事件的目标元素开始, 一层一层向父元素传播
// 事件捕获阶段(从外向内传播事件): 从最顶级的父元素一层一层向内传递
// 事件传播过程:先经历捕获阶段,然后目标元素事件执行,再经历冒泡阶段
function testChild(e){
    console.log('click child');
    // e.stopPropagation(); // 阻止事件传播 ie8及以下不支持
}
function testParent(){
    console.log('click parent');
}

function testBody(e){
    console.log('click body,',e.target);
}

window.onload = function(){
    var parent = document.getElementById('catch');
    var child = document.getElementById('btn1');
    var child2 = document.getElementById('btn2');

    child2.onclick = function(){
        console.log('child2 click');
    };
    /*
    // true: catch捕获, FALSE:bubble冒泡
    parent.addEventListener("click", function(){
        console.log('parent click');
    }, true);
    child.addEventListener("click", function(){
        console.log('child click');
    }, true);
    */

    // 事件冒泡的使用:
    var ulList = document.getElementsByTagName('ul');
    // ulList[0].addEventListener('click', function(event){
    //    console.log('click:',event.target); 
    // });
    ulList[0].onclick = function(event){ // ie中必须加event参数
        // console.log('click ');
        console.log('ul click:', event.target);
    };
};

function subForm(e){
    e.preventDefault(); // 阻止事件的默认行为(比如提交按钮的默认提交行为) ie8及以下不支持
}

// ie8及以下注册或删除事件使用的方法
// 注册事件 attachEvent(), 删除事件 detachEvent()