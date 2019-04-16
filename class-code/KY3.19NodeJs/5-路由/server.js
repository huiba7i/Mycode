var http = require('http');

var server = http.createServer(function(req, resp){
  console.log("请求的url地址: ",req.url);

  resp.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});
  // 路由: 根据不同的url地址, 响应不同的内容
  if(req.url == "/job"){
    resp.write("<html><head></head><body><h1>就业信息</h1></body></html>");
  }else if(req.url == "/"){
    resp.write("<html><head></head><body><h1>hello http</h1></body></html>");
  }else if(req.url == "/contact"){
    resp.write("<html><head></head><body><h1>昆仑大厦3号楼</h1></body></html>");
  }else{
    resp.write("<html><head></head><body><h1>404: 您请求的页面不存在</h1></body></html>");
  }
  resp.end();
});

server.listen(8088);

