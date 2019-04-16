console.log(document.forms[0], document.forms['login']);
console.log(document.getElementById('login'));

var form = document.forms['login'];
console.log("action:",form.action);
form.action = "test.html";
console.log("表单中表单元素的个数:", form.length);


function test(btn){
    // form.submit(); // 手动触发表单提交
    // form.reset(); // 触发表单重置
    // console.log(btn.name);
    // btn.name = "btn2"; // name属性只读
    btn.value = "普通按钮"
    var userInput = document.getElementById('username');
    // console.log(userInput.value);
    userInput.value = 'aowin';
    userInput.focus();
}

function selectAll(all){
    var chs = document.getElementsByName('se');
    // console.log(chs);
    for(var i=0;i<chs.length;i++){
        chs[i].checked = all.checked;
    }
}

window.onload = function(){
    var chs = document.getElementsByName('se');
    for(var i=0;i<chs.length;i++){
        chs[i].onchange = function(){
            console.log(this, this.checked);
            isChecked();
        }
    }
}

function isChecked(){
    var chs = document.getElementsByName('se');
    var all = document.getElementById('sall');
    for(var j=0;j<chs.length;j++){
        if(!chs[j].checked){ // 只要有一个没有选中,全选就不选中
            all.checked = false;
            return; // 提前结束函数
        }
    }

    all.checked = true;    
}