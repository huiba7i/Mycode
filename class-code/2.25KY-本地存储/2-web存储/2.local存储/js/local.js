function testBrowser(){
  if(window.localStorage){
    alert('浏览器支持web存储')
  }else{
    alert('该浏览器不支持web存储')
  }
}

function saveData(){
  // 调用方法来存储setItem() - 推荐
  localStorage.setItem('name', 'aowin');

  // 通过.key或['key']
  localStorage.pwd = '123123';
  localStorage['id'] = '10';
}

// 删除数据(通过key来删除)
function deleteData(){
  // (1)删除单个数据
  // 调用方法 removeItem() - 推荐
  // localStorage.removeItem('id');

  // 使用操作符delete
  // delete localStorage.pwd;
  // delete localStorage['pwd'];

  // (2)删除所有的数据
  localStorage.clear();
}

// 获得数据(通过key获得值)
function getData(){
  // (1) 单个获取
  // 通过调用方法getItem() - 推荐
  var value = localStorage.getItem('name');
  console.log(value);
  // 通过.key或['key']
  console.log(localStorage.name, localStorage['name']);

  // (2) 获得所有的数据
  console.log('共有',localStorage.length,'个数据');
  for(var i=0;i<localStorage.length;i++){
    // 获得指定索引(从0开始)位置上的key
    var key = localStorage.key(i);
    var value = localStorage.getItem(key);
    console.log(key, value, typeof value);
  }
}