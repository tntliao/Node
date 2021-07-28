var fs = require('fs');

/*
    fs.existsSync(path)
        - 检查一个文件是否存在
 */
// var isExists = fs.existsSync('./txt/01.txt');
// console.log(isExists); //true

/*
    fs.stat(path,callback)
    fs.statSycn(path)
        - 获取文件的状态
        - 他会给我们返回一个对象，这个对象中保存了当前对象的相关信息
 */
/* fs.stat('./txt/07.txt', function (err, stat) {
    if (!err) {
        // console.log(stat);
    }
}) */
// var stat = fs.statSync('./txt/07.txt');
// console.log(stat);

/*
    fs.unlink(path,callback)
    fs.unlinkSync(path,callback)
        - 删除文件
 */
/* fs.unlink('./txt/01.txt',function(){
    console.log('删除成功');
}); */
// fs.unlinkSync('./txt/02.txt');

/*
    fs.readdir(path[,options],callback)
    fs.readdirSync(path[,options])
        - 读取一个目录的结构
            files是一个字符串数组，每一个元素文件夹或文件的名字
 */
/* fs.readdir('.', function (err, files) {
    if (!err) {
        console.log(files);
    }else{
        console.log(err);
    }
}) */
// var dir = fs.readdirSync('.');
// console.log(dir);

/*
    fs.truncate(path,len,callback)
    fs.truncateSync(path,len)
        - 截断文件，将文件修改为指定的大小
 */
/* fs.truncate('./txt/03.txt', 10, function (err) {
    if (!err) {
        // console.log('截断成功');
    }
}) */

/*
    fs.mkdir(path[,mode],callback)
    fs.mkdirSync(path[,mode])
        - 创建一个目录

    fs.rmdir(path,callback)
    fs.rmdirSync(path)
        - 删除一个目录
 */
/* fs.mkdir('hello', function (err) {
    if (!err) {
        // console.log('新建成功');
    }
}) */
/* fs.rmdir('hello', function (err) {
    if (!err) {
        console.log('delete success');
    }
}) */

/* 
    fs.rename(oldPath,newPath,callback)
    fs.renameSync(oldPath,newPath)
        - 对文件进行重命名 也可以修改路径
        - 参数：
            oldPath 旧的路径
            newPath 新的路径
            callback 回调函数
 */
/* fs.rename('hello', 'nihao', function (err) {
    if(!err){
        console.log('修改成功');
    }
}) */

/*
    fs.watchFile(filename[,options],listener)
        - 监视文件
        - 参数
            filename 要监视的文件
            options 配置选项
            listener 回调函数，当文件方式变化时，回调函数会执行
                在回调函数中会有两个参数
                    curr 当前文件的状态
                    prev 修改前的状态
                        - 这两个对象都是stats对象
 */
fs.watchFile('./txt/05.txt', { options: 1000 }, function (curr, prev) {
    console.log('curr file size' + curr.size);
    console.log('prev file size' + prev.size);
})