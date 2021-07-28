/*
    1.同步文件读取
    2.异步文件读取
    3.简单文件读取
        fs.readFile(path[,options],callback)
        fs.readFile(path[,options])
            - path 要读取的的文件的路径
            - options 读取的选项
            - callback 回调函数，通过回调函数将读取到内容返回(err,data)
                err 错误对象
                data 读取到的数据，会返回一个Buffer
    4.流式文件读取
 */

//引入模块
var fs = require('fs');
var path = 'F:/照片/2.7.zip';

// #同步 会造成io堵塞
var data = fs.readFileSync(path);
fs.writeFileSync('./file/02.zip',data);

//简单文件读取 #异步
/* fs.readFile(path, function (err, data) {
    if (!err) {
        fs.writeFile('./file/01.zip', data, function (err) {
            if (!err) {
                console.log('写入成功');
            } else {
                console.log('写入失败');
            }
        })
    } else {
        console.log('读取失败');
    }
}) */

