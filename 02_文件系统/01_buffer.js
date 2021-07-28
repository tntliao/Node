/* 
    Buffer(缓冲区)
        - Buffer的结构和数组很像，操作的方法也和数组类似
        - 数组中不能储存二进制的文件，而buffer就是专门用来储存二进制数据
        - 使用buffer不需要引入模块，直接使用即可
            buffer中每一个元素的范围是从
            00 - ff
            0 -255
        
            计算机 一个0 或一个1 我们称为1位(bit)

            8bit = 1byte(字节)
            1024byte = 1kb
            1024kb = 1mb
            1024mb = 1gb
            1024gb = 1tb

            buffer中的一个元素，占用内存的一个字节
        - Buffer的大小一旦确定，则不能修改，Buffer实际是对底层内存的直接操作
 */

// console.log(Buffer);

var str = 'Hello JiaJia';
//将一个字符串保存到buffer中
var buf = Buffer.from(str);

// console.log(buf.length); //占用内存的大小 13
// console.log(str.length); //字符串长度 13
// console.log(buf); //10进制
// console.log(buf.toString()); //转换为一个字符串 Hello JiaJia

//创建一个10字节的buffer
var buf2 = Buffer.alloc(10);
//通过索引，来操作buf中的元素
buf2[0] = 88;
buf2[1] = 255;
buf2[2] = 0xaa;
buf2[3] = 255;
// console.log(buf2);

//只要数字在控制台或页面中输出一定是10进制
console.log(buf2[2].toString(16)); //以16进制输出

//Buffer.allocUnsafe(size) 创建一个指定大小的buffer，但是buffer中可能含有敏感数据
var buf3 = Buffer.allocUnsafe(10); //Unsafe 不安全
console.log(buf3);

/*
    Buffer.fron(str) 将一个字符串转换为buffer
    Buffer.alloc(size) 创建一个指定大小的Buffer
    Buffer.allocUnsafe(size) 创建一个指定大小的Buffer，但是可能含有敏感数据
    buf.toString() //将缓冲区的数据转换为字符串
 */

var btf4 = Buffer.from('woshiyiduanwenben');
console.log(btf4.toString());