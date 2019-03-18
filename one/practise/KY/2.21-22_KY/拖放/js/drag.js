// 源元素事件
function dragStart(ev){
  console.log('start drag')
  // dataTransfer是事件对象(event)的一个属性, 可以向目标元素拖放时传递数据(字符串)
  var dt = ev.dataTransfer;
  // 向 dataTransfer中保存数据
  dt.setData('Text', ev.target.id); // 数据类型: Text - 文本数据, Url - url数据
}

function drag(){
  console.log('draging.....');
}

function dragEnd(){
  console.log('drag end')
}

// 目标元素事件
// 当源元素(被拖动的元素)第一次进入目标元素区域时触发
function dragEnter(){
  console.log('drag enter target element');
}

// 当源元素(被拖动的元素)在目标元素区域内移动时持续触发
function dragover(ev){
  ev.preventDefault()
  console.log('drag over the element...')
}

// 在目标元素上完成一次有效投放时触发
function drop(ev){
  // 默认不能将元素投放在目标元素(所有元素都可以成为目标元素)上, 要想投放, 必须阻止默认操作
  ev.preventDefault();
  console.log('将源元素投放在目标元素上');

  // 获得源元素传递过来的数据
  var id = ev.dataTransfer.getData('Text'); // 获得由源元素setData()保存的数据
  console.log('源元素的id属性:',id);

  // 通过id获得元素
  var sourceObj = document.getElementById(id);
  // 将获得的元素放入目标元素中
  ev.target.appendChild(sourceObj);
}

// 不是有效投放并离开目标元素时触发
function dragLeave(){
  console.log('drag leave the element');
}