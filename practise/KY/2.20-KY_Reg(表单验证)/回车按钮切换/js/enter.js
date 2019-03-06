function dealEnter(ev, input){
  // console.log(input);
  console.log(ev,ev.keyCode); // 获得按下的键
  if(ev.keyCode==13){
    ev.preventDefault(); // 阻止默认操作(阻止提交表单), ie9下无效
    input.focus();
  }
}