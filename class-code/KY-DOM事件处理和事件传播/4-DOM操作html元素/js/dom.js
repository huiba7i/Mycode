// dom: document object model(文档对象模型)  把整个html文档看成一棵文档树document对象, html中的每个标签对应树中的一个节点

function add(){
  var ul = document.getElementById('list');
  console.log(ul);
  // 创建一个标签 li
  var li = document.createElement('li');
  // 设置标签的内容
  li.innerHTML = 'four';
  // 向父标签ul中添加子标签li ,调用appendChild()方法
  ul.appendChild(li);
}

function getElement(){
  /* // (1)通过标签的id属性(唯一)
  // (2)通过标签的name属性 , 得到的是多个节点元素的集合
  var elementList = document.getElementsByName('ullist');
  console.log(elementList);
  // (3)通过标签名称 , 得到的是多个节点元素的集合
  var divList = document.getElementsByTagName('div');
  console.log(divList);
  // (4)通过标签的class属性 , 得到的是多个节点元素的集合 ie9及以上
  var classList = document.getElementsByClassName('item');
  console.log(classList, classList[0], classList.length); */
  // (5)通过css选择器 ie8及以上
  var ul = document.querySelector('#list');
  console.log('css选择器获取',ul);
}

function testContent(){
  // (1)获得标签的内容(双标签)
  var parent = document.getElementById('parent');
  var content = parent.innerHTML; // 起始标签和结束标签之间的内容(包括标签)
  console.log('html内容:',content);
  console.log('text内容:',parent.innerText); // 起始标签和结束标签之间的内容(不包括标签)

  // (2)修改标签的内容
  // parent.innerHTML = '<i>hello world</i>'; // 会解析内容中的标签
  parent.innerText = '<i>hello world</i>'; // 不会解析内容中的标签
}

function testAttribute(){
  // 先获得要操作属性的那个标签
  var parent = document.getElementById('parent');
  var usernameInput = document.getElementById('username');
  // (1)操作该标签的属性 , 用.属性名称
 /*  // name属性只读
  console.log('name属性为',parent.name);
  parent.align = 'center';
  parent.id = 'pp';
  // 修改输入的值
  usernameInput.value = 'guest'
  // usernameInput.readOnly = false; // 取消只读
  usernameInput.className = 'text';// 修改标签的class属性 */

  // (2)setAttribute(属性名称,修改后的值): 修改属性,getAttribute(属性名称): 获得属性
  usernameInput.setAttribute('value', 'guest');
  console.log(usernameInput.getAttribute('value'));

  // (3)删除标签的属性removeAttribute()
  usernameInput.removeAttribute('readonly');

}

function testCss(){
  // 先获得标签
  var ulList = document.getElementsByName('ullist');// 多个元素的集合
  console.log(ulList);
  var div = ulList[1];

  // 修改样式
  // 规则(去掉-,后面的单词首字母大写), 比如:background-color 变为backgroundColor 
  /* div.style.backgroundColor = 'green';
  div.style.fontSize = '20px';
  div.style.color = '#fff'; */

  // 如果同时要修改多个样式, 建议修改元素的class属性
  div.className = 'bg';
}

function testRelation(){
  var parent = document.getElementById('parent');
  // 1.获得子标签
  // (1.1)获得所有的子元素
  console.log('children:',parent.children)
  console.log('childNodes:',parent.childNodes) // 空白(回车换行等)也是一个节点

  // 指定索引获得子元素
  var childs = parent.children;
  console.log('第1个子标签:', childs[0]);

  // (1.2)获得指定标签名称的子标签
  var pList = parent.getElementsByTagName('p'); // 获得div中所有的p子标签
  console.log(pList, pList[0], pList[0].innerHTML);

  // 2.获得父标签(唯一)
  console.log('父元素:',parent.parentNode);

  // 3.获得兄弟标签
  console.log('兄长元素:', parent.previousElementSibling);
  console.log('弟弟元素:', parent.nextElementSibling);
}

function testDelete(){
  // 先获得要删除的标签的父标签
  var parent = document.getElementById('parent');
  var childs = parent.children;
  /* // 通过父标签删除指定的子标签 parent.removeChild(child)
  var p = childs[0];
  parent.removeChild(p); */
  // parent.removeChild(childs[1]);

  // 循环删除所有的子标签
  // 倒着删除或顺着删除第1个
  for(var i=childs.length-1; i>=0;i--){
    parent.removeChild(childs[i]);
  }
}