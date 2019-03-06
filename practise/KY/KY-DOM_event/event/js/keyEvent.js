function press(){
    console.log("单击了键盘上字母或数字或符号");
}

function down(e){
    console.log('按下了键盘');
    console.log('发生事件的元素:',e.target);
    console.log('按下的键:',e.keyCode);
    console.log('事件名称:',e.type);
} 