var fs = require('fs');
//打开文件
fs.open('./txt/02.txt', 'w', function (err, fd) {
    //判断是否出错
    if (!err) {
        // console.log('open success');
        fs.write(fd, '这里是异步想要写入的内容', 10, function (err) {
            if (!err) {
                console.log('写入成功！');
            }
            //关闭文件
            fs.close(fd, function (err) {
                if (!err) {
                    console.log('文件已关闭');
                }
            })
        })
    } else {
        console.log('open failure');
        console.log(err);
    }
})