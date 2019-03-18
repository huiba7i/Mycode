function test(){
  console.log(window.location);
  console.log('当前页面的完整的ulr地址字符串:', location.href);
  console.log('当前页面的主机名称和端口号:', location.host);
  console.log('当前页面的主机名:', location.hostname);
  console.log('当前页面的url端口号:', location.port);
  console.log('当前页面的url协议:', location.protocol);
  console.log('当前页面的url文件地址:', location.pathname);
}

function newpage(){
  // location = 'newpage.html';
  location.assign('newpage.html');  // 载入并显示新的页面
}

function refresh(){
  location.reload(); // 刷新当前页面
}