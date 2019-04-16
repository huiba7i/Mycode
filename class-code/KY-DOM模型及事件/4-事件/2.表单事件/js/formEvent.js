function login(){
    alert('提交登录');
}

function changeProvince(selectElement){
    console.log("选择的省份变化了",selectElement);
    console.log(selectElement.value);
}

function changeText(inputElement){
    console.log(inputElement,'输入的内容为:', inputElement.value);
}

function getFocus(input){
    console.log("元素获得焦点");
    input.style.backgroundColor = 'yellow';
}
function loseFocus(input){
    console.log("元素失去焦点");
    input.style.backgroundColor = '#fff';
}