
var http = require('http');
var fs = require('fs');
http.createServer(function (req,res) {


    var pathname = req.url ;
    if (pathname == '/'){
        pathname = 'index.html';  //默认加载的主页
    }
    console.log(pathname);

    if (pathname != '/favicon.ico'){ //主要进行过滤请求
        console.log(pathname);

        //文件操作获取static下面的index.html文件
        fs.readFile('static/'+pathname,function (err ,result) {
            if (err) { //就是没有这个文件
                console.log('404');
                return ;
            }else{//读取到文件,返回这个文件
                //设置响应头信息
                res.writeHead(200,{"Content-Type":"text/html;charset = 'utf-8' "});
                res.write(result);
                res.end();
            }

        })
    }

}).listen(8888);