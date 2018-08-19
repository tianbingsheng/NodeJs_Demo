
//定义一个tools.js模块

var tools = {
    sayHello : function () {
        return 'hello NodeJs';
    },
    add : function (x,y) {
        return   x+y ;
    }
};

//模块接口的暴露
//第一种方式;
//exports.tools = tools;
//第二种暴露接口的方式
module.exports = tools ;