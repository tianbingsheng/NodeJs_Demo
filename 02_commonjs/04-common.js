
//foo默认在目录下面查找,如果没有会在node_modules里面去找这个模块
//如果该目录下还有目录,就找不到了,所以要在该目录里配置一个package.json文件,然后就可以找到该模块
//npm 安装的模块其实就是这样引入的

//查找模块的途径  package.json  main : 入口文件;
var foo = require('foo');
console.log(foo);