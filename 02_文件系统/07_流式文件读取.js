/*
    流式文件读取也适用一些较大的为背景，可以分多次将文件读取到内存中
 */
var fs = require('fs');

//创建一个可读流
var rs = fs.createReadStream('F:/文本/英语单词.txt');
//创建一个可写流
var ws = fs.createWriteStream('./txt/06.txt');

//监听流的开启和关闭
rs.once('open', function () {
    console.log('rs已打开');
})
rs.once('close',function(){
    console.log('rs已关闭');

    //读取数据完毕，关闭可写流
    ws.end();
})
ws.once('open',function(){
    console.log('ws已打开');
})
ws.once('close',function(){
    console.log('ws已关闭');
})

//如果要读取一个可写流中的数据，必须要为可写流绑定一个data事件，data事件绑定完毕，它会自动开启读取数据
rs.on('data', function (data) {
    console.log(data);
    //将要读取到的数据写入到可写流中
    ws.write(data); //写完可读流会自动关闭 可写流不会
})