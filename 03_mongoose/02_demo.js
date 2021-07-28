//引入mogoose
var mongoose = require('mongoose');

//连接mongoose
mongoose.connect('mongodb://127.0.0.1/mongoose_test', { useNewUrlParser: true, useUnifiedTopology: true });

//监听是否连接成功
mongoose.connection.once('open', function () {
    console.log('数据库连接成功');
})

//将mongoose.Schema 贡献给一个变量
var Schema = mongoose.Schema;

//创建Schema(模式)对象 --> 规范
var stuSchema = new Schema({
    name: String,
    age: Number,
    gender: {
        type: String,
        default: 'female',
    },
    address: String
})

//通过Schema来创建Model
//Model代表的是数据库中的集合，通过Model才能对数据进行操作
//mongoose.model(modeNmae,schema)
//modeNmae 就是要映射集合名

var StuModel = mongoose.model('student', stuSchema);

//向数据库插入一个文档
// StuModel.create(doc,function(err){})

StuModel.create({
    name: 'jiajia',
    age: 17,
    gender: 'male',
    address: 'lj'
}, function (err) {
    if (!err) {
        console.log('插入成功');
    }
})