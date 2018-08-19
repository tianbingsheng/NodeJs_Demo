const fs = require('fs');

//流的方式读取文件
//文件流的方式进行读取数据
var readStream = fs.createReadStream("input.txt");

var str = "";//用来保存数据
var count = 0

//广播数据
readStream.on("data",function (chunk) {
    str += chunk ;
    count++
});


//读取数据完成
readStream.on("end",function (chunk) {
    console.log(str);
    console.log(count);
});

//
readStream.on("error",function (err) {
    console.log(err);
})