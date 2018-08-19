
var url = require('url');
var http = require('http');

//创建一个服务器,回调函数表示接收到请求之后做的事情
var server = http.createServer(function (req,res) {

    //http://localhost:8888/news?aid=123&cid=111; 拿到里面的get传值
    // console.log(req.url);
    //解析url地址
    //填写true可以拿到query对象;
    //第一个参数是地址,第二个参数是把get传值转换为对象

    res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"} );

    if (req.url != '/favicon.ico'){
        console.log(req.url);
        var result = url.parse(req.url,true);//get传值转换为对象信息;
        //获取url的get 传值
        console.log(result.query.aid);

    }

    //发送响应数据到浏览器
    res.write("你好,nodeJS");
    res.end();

});
server.listen(8888);