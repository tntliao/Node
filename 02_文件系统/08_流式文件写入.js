var fs = require('fs');
//创建可读流
var rs = fs.createReadStream('./txt/06.txt');
//创建可写流
var ws = fs.createWriteStream('./txt/07.txt');

rs.pipe(ws);