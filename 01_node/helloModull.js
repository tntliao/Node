//第一种方法
// exports.name = '孙悟空';
// exports.age = 17;
// exports.sayName = function(){
//     console.log(this.name);
// }

//第二种方法
// module.exports.name = 'jiajia';
// module.exports.age = '17';
// module.exports.sayName = function(){
//     console.log(this.name); 
// }

//第三种方法
module.exports = {
    name : 'jiajia',
    age : 17,
    sayName : function(){
        console.log(this.name);
    }
}

var a = 10;


/* 
    exports 和 module.exports
        - 通过exports只能使用.的方法来向外暴露内部的变量
            exports.xxx = xxx

        - 而module.exports 既可以通过.的形式，也可以直接赋值
            module.exports.xxx = xxx
            module.exports = {}
 */