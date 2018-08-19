var fs = require('fs');
//判断服务器上面有没有upload目录,没有则创建这个目录(图片上传)

//检测文件夹的状态信息:;;;;;
// fs.stat("upload",function (err,stats) {
//     if (err){
//         //如果没有这个目录,则创建这个upload目录
//         fs.mkdir("upload",function (error) {
//             if (error){
//                 console.log(error);
//                 return   false ;
//             }
//             console.log("创建成功")
//         });
//     }else{
//         console.log("目录已经存在");
//     }
//
// });

//2.找出html下面的所有目录
var filesArr=  [];
fs.readdir("html", function (err, files) {
    if (err) {
        console.log(err);
    } else {
        //判断是目录还是文件夹
        console.log(files);

        (function getFile(i) {

            if (i == files.length) { //循环结束
                console.log(filesArr);
                return false;
            }

            fs.stat("html/"+files[i], function (err, stats) {

               // console.log(files[i]);
                if (stats.isDirectory()) { //如果是一个目录,添加到数组当中
                    filesArr.push(files[i]);
                }

                //递归调用
                getFile(i + 1);
            });

        })(0)

    }
}); //错误的写法  异步操作的考虑
//正确的写法
//  fs.stat(datas[i],function (error,stats) {//异步操作,会有错误
// 
//  })   //这是一个异步操作

 


















