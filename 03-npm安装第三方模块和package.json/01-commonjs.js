
//npm i silly-datetime ;

//引入模块

var sd = require('silly-datetime');
var d = sd.format(new Date(), 'YYYY-MM-DD HH:mm');
// 2015-07-06 15:10

console.log(d);
//安装模块的时候,要把 这个模块写入到package.json这个配置文件
//npm install md5-node --save