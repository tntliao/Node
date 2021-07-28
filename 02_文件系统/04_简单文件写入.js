/* 
	简单文件写入
		fs.writeFile(file,data[,options],callbook)
		fs.writeFileSync(file,data[],options)
			- file 要操作的文件的路径
			- data 要写入的数据
			- options 选项，可以对写入进行一些设置
			- callbook 当写入完成以后执行的函数
			
			- flag
				r 只读
				w 可写
				a 追加
 */

//引入fs模块
var fs = require('fs');
/* fs.writeFile('./txt/03.txt', 'today is my book write frist file', {flag : 'w'}, function (err) {
	if (!err) {
		console.log('写入成功！')
	} else {
		console.log(err);
	}
})
console.log('这里先执行...'); */

fs.writeFileSync('./txt/04.txt', '这里写入你想写的东西', { flag: 'r'}, function (err) {
	if (!err) {
		console.log('写入成功！')
	} else {
		console.log(err);
	}
})