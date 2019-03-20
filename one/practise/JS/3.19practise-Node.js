
var http = require("http");

var server = http.createServer(function(req,res){

    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"});
    
    res.write("<html><body><h1>hello worle</h1></body></html>");
    
    res.end();

})
server.listen(1777);