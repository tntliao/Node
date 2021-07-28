//引入其他模块
/*
    在node中，通过require()函数来引入外部的模块
        require()可以通过一个文件的路径作为参数，node将会自动根据该路径来引入外部模块
        这里路径，如果相对路径，必须.或..开头

    使用require()引入以后，该函数会返回一个对象，这个对象代表的是引入的模块

    我们使用require()引入外部模块时，使用的就是模块标识，我们可以通过模块标识来找到指定的模块 
        - 模块分两大类
            核心模块
                - 由node引擎提供的模块
                - 核心模块的标识就是，模块的名字
            文件模块
                - 🈶️用户直接创建的模块

 */

/*
    let md = require('./02_module');
    console.log(md.x);
    console.log(md.y);
    md.fn();
*/

/*
    let math = require('./math');
    console.log(math.add(1,2));
    console.log(math.mul(2,3));
*/

let fs = require('fs');
console.log(fs);