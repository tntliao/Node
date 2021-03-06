/* 
    在node中有一个全局对象 global 它的作用和网页中window类似
        在全局中创建的变量都会作为global的属性保存
        在全局中创建的函数都会作为global的方法保存
    
    当node在执行模块中的代码时，它会首先在代码的最顶部，添加如下代码
        function (exports, require, module, __filename, __dirname) {

    在代码的最底部，添加如下代码
        }

    实际上模块的代码都是包装在一个函数中执行的，并且在函数只是时，同时传递进了5个实参
        exports
            - 该对象用来将变量或函数暴露到外部
        
        require
            - 函数，用来引入外部的模块

        module
            - module代表的是当前模块本身
            - exports就是module的属性
            - 既可以使用 exports 导出，也可以使用midule.exports导出
        
        __filename
            - 当前模块的完整路径
        __dirname
            - 当前模块所在文件夹的完整路径
 */


//global 差不多相等于 windwo

var a = 10; //局部
// console.log(global.a); //undfined  

a = 20; //全局
// console.log(global.a); //20

/* 
        arguments.callee
            - 这个属性保存的是当前执行的函数对象
 */

// console.log(arguments.callee); //Function
// console.log(arguments.callee + ''); //可以看到整个函数体
// console.log(arguments.length); //5 第7行5个形参

// console.log(exports);
// console.log(module.exports === exports); //true

// console.log(__filename);
console.log(__dirname);