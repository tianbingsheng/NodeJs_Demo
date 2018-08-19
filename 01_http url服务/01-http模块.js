
//1.引入http模块

var http = require('http');

//2.用http模块进行创建服务
/*
* req:获取url服务
* res:浏览器返回响应信息
* */

http.createServer(function (req,res) {
    //发送http头部信息
    //设置状态值,文件编码类型,文件类型
    console.log(req.url);
    res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"} );
    //发送响应数据到浏览器
    res.write("你好,nodeJS    ");
    res.write("hello world");
    //结束响应
    res.end();
}).listen(8888);

//终端打印如下信息
console.log("Server running at http:127.0.0.1:8888");