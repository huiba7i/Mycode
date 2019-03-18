// 判断浏览器是否支持
// 如果不支持返回null
// console.log(window.sessionStorage);
/* if(window.sessionStorage){
  alert('当前浏览器支持web存储');
}else{
  alert('当前浏览器不支持web存储, 请更新浏览器');
} */

if(!window.sessionStorage){
  alert('当前浏览器不支持web存储, 请更新浏览器');
}

// 存储数据(当窗口或标签页被关闭时,数据将被删除)
// 单页面单窗口访问
function saveData(){
  // 推荐
  sessionStorage.setItem('username', 'admin');
  // sessionStorage.key = value
  sessionStorage.password = '123456'

  // sessionStorage['key'] = value
  sessionStorage['id'] = '1';
}

// 删除sessionStorage中的数据(根据key删除对应的数据)
function deleteData(){
  // 调用方法removeItem() - 推荐
  // sessionStorage.removeItem('password');
  
  // 使用操作符 delete
  // delete sessionStorage.id;

  // 删除所有的数据
  sessionStorage.clear();
}

// 获得sessionStorage中的数据(根据key获得value)
function getData(){
  // 调用方法getItem() - 推荐
  var value = sessionStorage.getItem('username')
  console.log(value);

  // 获得存储的所有数据
  console.log(sessionStorage.length); // 数据的个数

  for(var i=0; i< sessionStorage.length; i++){
    // 获得对应索引的key值
    var name = sessionStorage.key(i)
    console.log(name, sessionStorage.getItem(name));
  }

  /* for(var prop in sessionStorage){
    console.log(prop, sessionStorage.getItem(prop));
  } */
}