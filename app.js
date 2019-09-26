var express = require('express');
var myapp = new express();
var bodyParser = require('body-parser');
var path = require('path');
var multer = require('multer');

const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');


let initCallback;


//this is the first middleware - application middleware , all routes hit this middleware first
myapp.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'content-type,X-Requested-With,authorization');
    next(); // next passes to another application middleware
});


// bodyParser
myapp.use(bodyParser.json());
myapp.use(bodyParser.urlencoded({ extended: true }));


// path
myapp.use(express.static(
    path.join(__dirname, '/resources')
));


// ejs
myapp.set('views', __dirname + '/views');
myapp.set('view engine', 'ejs');


// sequelize
var mysequelize = require('./configs/dbconfigs.js');
var mysequelize = require('./models/studentModel.js');
var mysequelize = require('./models/teacherModel.js');


// multer storage
var mystorage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'resources/images/profile')
    },
    filename: function(req, file, cb) {
        var name = 'asdasd' + (Math.floor(100000 + Math.random() * 900000)) + file.originalname;
        cb(null, name);
        req.testVall = name;
    }
});


var upload = multer({ storage: mystorage });


// controllers require
var authController = require('./controllers/authController');
var studentController = require('./controllers/studentController');
var teacherController = require('./controllers/teacherController');
var adminController = require('./controllers/adminController');
var courseController = require('./controllers/courseController');
var coursetypeController = require('./controllers/coursetypeController');
var ratingController = require('./controllers/ratingController');


// upload student profile Image
myapp.post('/student/register/studentImage', upload.single('studentImage'), function(req, res) {
       res.send({
        "status": 200,
        "message": "Student Profile Image Registered",
        "name": req.testVall
    })
});


//Student Register
myapp.post('/student/register', studentController.duplicateEmail, studentController.emailCheck, studentController.passwordHash, studentController.studentRegister,authController.jwtTokenGen, function(req, res) {
    res.send({
        "status": 200,
        "message": "New Student Registered",
        "token": req.genToken
    })
});


// student and teacher login route
myapp.post('/student/login', authController.StudentTeacherEmailCheck, authController.checkPasswordMatch, authController.jwtTokenGen, function(req, res) {
res.send({
        "status": 200,
        "message": "logged in",
        "usertype": req.usertype,
        "token": req.genToken,
        "info": req.userInfo
    })
});


// Student Update
myapp.put('/student/update/:id', studentController.studentUpdate, function(req, res) {

    res.send({
        "status": 200,
        "message": "student data updated",
        "info": req.userInfoo
    })
});


//Teacher Register
  myapp.post('/teacher/register', teacherController.duplicateEmail, teacherController.emailCheck, teacherController.passwordHash, teacherController.teacherRegister,authController.jwtTokenGen, function(req, res) {
    res.send({
        "status": 200,
        "message": "New Teacher Registered",
        "token": req.genToken
    })
});


//techer login
myapp.post('/teacher/login', authController.teachervalidator,authController.checkPasswordMatch,authController.jwtTokenGen, function(req, res) {
    res.send({
        "status": 200,
        "message": "Teacher logged in"
    })
});

// teacher Update
myapp.put('/teacher/update/:id', teacherController.teacherUpdate, function(req, res) {

    res.send({
        "status": 200,
        "message": "teacher data updated",
        "info": req.userInfoo,
        "token": req.genToken,
    })
});

// delete student data
myapp.get('/student/delete/:id', studentController.deleteStudent, function(req, res) {
    res.send({
        "status": 200,
        "message": "Student deleted"
    })
});

// delete teacher data
myapp.get('/teacher/delete/:id', teacherController.deleteTeacher, function(req, res) {
    res.send({
        "status": 200,
        "message": "Teacher deleted"
    })
});


// delete Courses data
myapp.get('/course/delete/:id', courseController.deleteCourse, function(req, res) {
    res.send({
        "status": 200,
        "message": "Courses deleted"
    })
});

// delete Course type data
myapp.get('/coursetype/delete/:id', coursetypeController.deleteCoursetype, function(req, res) {
    res.send({
        "status": 200,
        "message": "Course Type deleted"
    })
});

// fetch student data
myapp.get('/get/student/:id', studentController.getStudentData, function(req, res) {
    res.send({
        "status": 200,
        "message": "Student data fetched",
        "info": req.allUser
    })
});


// fetch teacher data
myapp.get('/get/teacher/:id', teacherController.getTeacherData, function(req, res) {
    res.send({
        "status": 200,
        "message": "Teacher data fetched",
        "info": req.allUser
    })
});

// fetch teacher data
myapp.get('/get/coursetype/:id', coursetypeController.getCoursetypeData, function(req, res) {
    res.send({
        "status": 200,
        "message": "Course Type data fetched",
        "info": req.allUser
    })
});

//adminRegister
myapp.post('/admin/register', adminController.emailCheck, adminController.passwordHash, adminController.adminRegister, authController.jwtTokenGen,function(req, res) {
    res.send({
     "status": 200,
     "message": "Admin data registered",
     "token": req.genToken
 })
});


// admin login route
myapp.post('/admin/login', authController.adminValidator,authController.checkPasswordMatch, authController.adminjwtTokenGen, function(req, res) {
    res.send({
        "status": 200,
        "message": "Admin logged in",
        "token": req.genToken,
        "info": req.userInfo
    })
});


//Course Register
myapp.post('/course/register', courseController.courseRegister, function(req, res) {
    res.send({
        "status": 200,
        "message": "New Course Data Registered",
        "token": req.genToken
    })
});


//Course Update
myapp.put('/course/update/:id', courseController.courseUpdate, function(req, res) {

    res.send({
        "status":200,
        "message":"course data updated",
        "info":req.userInfo
    })
});

//courseType Register
myapp.post('/coursetype/register', coursetypeController.coursetypeRegister, function(req, res) {
    res.send({
        "status":200,
        "message":"New course type registered",
        "token":req.genToken
    })
});

//CourseType Update
myapp.put('/coursetype/update/:id', coursetypeController.coursetypeUpdate, function(req, res){
    res.send({
        "status":200,
        "message":"coursetype data updated",
        "info":req.userInfo
    })
});

//Rating Table Register
myapp.post('/rating/register', ratingController.ratingRegister, function(req, res){
    res.send({
        "status":200,
        "message":"New Rating Data Registered",
        "token":req.genToken
    })
});

//Rating Table Update
myapp.put('/rating/update/:id', ratingController.ratingUpdate, function(req, res){
    res.send({
        "status":200,
        "message":"Rating Table Data Updated",
        "info":req.userInfo
    })
});


// get home page
myapp.get('/index', function(req, res) {
    res.render('pages/index');
})


// get admin login page
myapp.get('/admin', function(req, res) {
    res.render('admin/admin');
})


//get admin dashboard page
myapp.get('/admindashboard', function(req, res) {
    res.render('admin/admindashboard');
})



// get teacher signup
myapp.get('/teacher/register', function(req, res) {
    res.render('teacher/teacher');
})


//  student search
myapp.post('/Student/search', studentController.searchStudent, function(req, res) {
    res.send({
        "status": 200,
        "message": "Student searched",
        "info": req.User
    })
});

//  teacher search
myapp.post('/Teacher/search', teacherController.searchTeacher, function(req, res) {
    res.send({
        "status": 200,
        "message": "Teacher searched",
        "info": req.User
    })
});

//  courses search
myapp.post('/Course/search', courseController.searchCourse, function(req, res) {
    res.send({
        "status": 200,
        "message": "Courses searched",
        "info": req.User
    })
});


// get course add form
myapp.get('/teacher/courses', function(req, res) {
    res.render('teacher/teachercourses');
})

// get courseDescription page
myapp.get('/coursedescription', function(req, res) {
    res.render('course/coursedescription');
})



// get course view
myapp.get('/courses', function(req,res) {
    res.render('pages/courses/courses');
})


myapp.use(function(err, req, res, next) {
    console.log(err);
    res.status(err.status);
    res.send({
        "message": err.message
    })
})


// set port
myapp.listen(3000);


module.exports = myapp;
