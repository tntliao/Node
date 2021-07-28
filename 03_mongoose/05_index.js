require('./tools/conn_mongo');
var Student = require('./models/student').model;

// console.log(Student);

Student.findOne({}, function (err, doc) {
    console.log(doc);
})