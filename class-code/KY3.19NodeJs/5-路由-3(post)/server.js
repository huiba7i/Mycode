var http = require('http');
var url = require('url');
var qs = require('querystring')

var server = http.createServer(function(req, resp){
  console.log("请求的url地址: ",req.url);
  
  resp.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});
  console.log(req.method);
  if(req.method=="POST" && req.url=='/log'){
    var data="";
    // 当接收到一个请求参数时触发 data事件
    req.on('data', function(chunk){
      data += chunk;
    })
    // 当所在的请求参数接收完成时触发 end事件
    req.on('end', function(){
      data= qs.parse(data)
      console.log(data);
      resp.write("<html><head></head><body><h1>欢迎,"+data.username+"</h1></body></html>");
      resp.end();
    })
  }else{
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
  }
  
});


server.listen(8088);
