var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/mongoose_test', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', function () {
    console.log('数据库连接成功');
})
var Schema = mongoose.Schema;
var stuSchema = new Schema({
    name: String,
    age: Number,
    gender: {
        type: String,
        default: 'female'
    },
    address: String
})

var StuModel = mongoose.model('student', stuSchema);

/* 
    - 有了Model,我们就可以对数据库进行增上改查的操作了

    Model.create(doc(s),[callback])
        - 用来创建一个或多个文档并添加到数据中
        - callback 当操作完成以后调用的回调函数

    查询的：
        Model.find(conditions,[projection],[options],[callback])
            - 查询所有符合条件的文档
        Model.findById(id,[projection],[options],[callback])
            - 根据文档的id属性查询文档
        Model.findOne([conditions],[projection],[options],[callback])
            - 查询符合条件的第一个文档

            conditions 查询的条件
            projection 投影 需要获取到的字段
                - 两种方法
                    {name:1,_id:0}
                    'name  -_id'
            options 查询选项
            callback 回调函数，查询结果会通过回调函数返回
                回调函数必须传，如果不传回调函数，不会查询
 */

/* StuModel.create([
    {
        name: 'qwe',
        age: 123,
        gender: 'male',
        address: 'unknown'
    },
    {
        name: 'rty',
        age: 567,
        address:'unknown'
    }
], function (err) {
    if (!err) {
        console.log('插入成功');
    }
}) */

/* StuModel.find({ name: 'jiajia' }, { name: 1, _id: 0 }, function (err, docs) {
    if (!err) {
        // console.log(docs[0].name);
        console.log(docs);
    }
}) */

/* StuModel.find({}, 'name -_id', function (err, docs) {
    if (!err) {
        console.log(docs);
    }
}) */

/* StuModel.find({}, 'name -_id', { skip: 1, limit: 1 }, function (err, docs) {
    if (!err) {
        console.log(docs);
    }
}) */

/* StuModel.findById('6077a9625f51732a684eb2fd', function (err, docs) {
    if (!err) {
        console.log(docs);
        //通过find()查询结果，返回的对象，就是Document，文档对象
        //Document对象是Model的实例

        console.log(docs instanceof StuModel);
    }
}) */

/* 
        修改
    Model.update(conditions,doc,[options],[callback])
    Model.updateMany(conditions,doc,[options],[callback])
    Model.updateOne(conditions,doc,[options],[callback])
        - 用来修改一个或多个文档
        - 参数：
            conditions 查询条件
            doc 修改后的对象
            options 配置参数
 */

/* StuModel.updateOne({ name: 'jiajia' }, { $set: { age: 20 } }, function (err) {
    if (!err) {
        console.log('修改成功');
    }
}) */

/* StuModel.replaceOne({ _id: "6077a9625f51732a684eb2fd" }, { name: 'jiajia', age: '17', address: 'zj' }, function (err) {
    if (!err) {
        console.log('替换成功');
    }
}) */

/* StuModel.find({ _id: "6077a9625f51732a684eb2fd" }, function (err, docs) {
    if (!err) {
        console.log(docs);
    }
}) */


/* 
        删除
    Model.remove(conditions,[callback]) //弃用
    Model.deteleOne(conditions,[callback])
    Model.deteleMany(conditions,[callback])
 */

// StuModel.deleteOne({name:'qwe'},function(){})

//统计数量
StuModel.countDocuments({ __v: 0 }, function (err, count) {
    if (!err) {
        console.log(count);
    }
})