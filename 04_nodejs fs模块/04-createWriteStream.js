
const fs = require('fs');

var data = "我是从数据库当中获取的数据,我要保存起来";

//以文件流的方式写入数据

var writeStream = fs.createWriteStream("output.txt");

writeStream.write(data,"utf8");

//标记写入完成
writeStream.end();

writeStream.on("finish",function () {
    console.log("写入完成");
});

writeStream.on("error",function (err) {
    console.log(err.stack);
});

console.log("程序执行完毕");