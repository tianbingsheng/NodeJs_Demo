/*
*
* 1.fs.stat   检测是文件还是目录
* 2.fs.mkdir  创建目录
* 3.fs.writeFile  创建并且写入文件
* 4.fs.appendFile  追加文件
* 5.fs.readFile   读取文件
* 6.fs.readdir    读取目录         把目录下面的文件也会读取出来.........
* 7.fs.rename    重命名
* 8.fs.rmdir    删除目录
* 9.fs.unlink   删除文件
*
* */

var fs = require('fs') ;

// 1.fs.stat   检测是文件还是目录

// fs.stat("html",function (err,state) {
//     if(err){
//         console.log(err);
//         return false ;
//     }
//     console.log("文件:",state.isFile());
//     console.log("目录:",state.isDirectory());
//
// });
//
// //* 2.fs.mkdir  创建目录
//
// fs.mkdir("css",function (err) {
//     if (err) {
//         console.log(err);
//         return false ;
//     }else{
//         console.log("成功创建目录css");
//     }
// });
//
// //3.fs.writeFile  创建并且写入文件
// //写入的信息会进行覆盖---
// fs.writeFile("t.txt","你好nodejs",function (err) {
//     if (err) {
//         console.log(err);
//         return false ;
//     }
//     console.log("写入成功----");
// });
//
//
// //4.fs.appendFile  追加文件
// // fs.appendFile("t1.txt","------这是写入的内容",function (err) {
// //     if (err) {
// //         console.log(err);
// //         return false ;
// //     }
// //     console.log("写入成功----");
// // });
//
//
// //5.fs.readFile   读取文件
// fs.readFile("t1.txt",function (err,data) {
//     if (err){
//         console.log(err);
//         return false ;
//     }
//    // console.log("data===",data)
//     console.log(data.toString());
// });


//6.fs.readdir    读取目录
fs.readdir("html",function (err,data) {
    if (err){
        console.log(err);
        return false ;
    }
    //文件和目录都打印出来...
    console.log("dir:",data);
});

//拿到一个文件夹下面的所有目录


// 7.fs.rename    重命名
//可以改名   第二可以剪切文件
// fs.rename("html/a.txt","html/b.txt",function (err) {
//     if (err){
//         console.log(err);
//         return false ;
//     }
//     console.log("修改名字成功")
// })

// fs.rename("html/b.txt","a2.txt",function (err) {
//     if (err){
//         console.log(err);
//         return false ;
//     }
//     console.log("剪切成功")
// });

//8.fs.rmdir    删除目录

// fs.rmdir("html/js",function (err) {
//     if (err){
//         console.log(err);
//         return false ;
//     }
//     console.log("删除成功")
// })
//


// * 9.fs.unlink   删除文件
fs.unlink("t1.txt",function (err) {
    if (err){
        console.log(err);
        return false ;
    }
    console.log("删除文件成功")
});





















