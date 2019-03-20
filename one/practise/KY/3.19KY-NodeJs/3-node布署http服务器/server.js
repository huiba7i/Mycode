// 引入http模块
var http = require('http');

// 创建一个Http服务器
/**
 * 参数req:　来自客户端的请求对象
 * 参数resp: 响应对象
 */
var server = http.createServer(function(req, resp){
  // 处理请求
  // console.log("来自客户端的请求: ", req);

  // 响应
  // 设置响应的头信息 : 200 - 状态码, Content-Type 响应的内容的格式(text/html, text/plain, text/xml等)
  resp.writeHeader(200, {"Content-Type":"text/html;charset=utf-8"});
  // 响应的内容
  resp.write("<html><head></head><body><h1>hello node server!修改</h1></body></html>")
  resp.end(); // 响应结束
});

// 启动服务器, 绑定端口号 建议1024以上 (0~65535)
server.listen(80); // http协议默认的端口号80, 访问时可以不写端口号

