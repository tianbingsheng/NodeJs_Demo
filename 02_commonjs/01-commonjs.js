//自定义模块

//系统的内置核心模块
var http = require('http');


var app = http.createServer(function (req,res) {

   res.writeHead(200,{"Content-Type":"text/html;charset:utf-8"});

   res.write("你好,Nodejs");
   res.end();
});
app.listen(8888,'127.0.0.1');

//自定义模块的创建使用