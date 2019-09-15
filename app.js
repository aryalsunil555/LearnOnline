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
<<<<<<< HEAD
var mysequelize = require('./models/teacherModel.js');
=======


>>>>>>> 74fea9c671185b35d47205a8b2ab626ded6f7973


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


<<<<<<< HEAD
=======
// routes
// var adminRoutes = require('./routes/adminRoutes')(myapp);
//var userRoutes = require('./routes/userRoutes')(myapp);

//upload register profile photo
>>>>>>> 74fea9c671185b35d47205a8b2ab626ded6f7973
myapp.post('/user/register/userPhoto', upload.single('UserPhoto'), function(req, res) {
    res.send({
        "status": 200,
        "message": "Profile Image Registered",
        "name": req.testVall
    })
});


<<<<<<< HEAD

//Student Register
myapp.post('/student/register', studentController.emailCheck, studentController.passwordHash, studentController.studentRegister,authController.jwtTokenGen, function(req, res) {
    res.send({
        "status": 200,
        "message": "New Student Registered",
=======
// register student form data
// myapp.post('/student/register', userController.emailCheck, userController.passwordHash, userController.userRegister, authController.jwtTokenGen, function(req, res) {
// myapp.post('/user/register/userPhoto', upload.single('UserPhoto'), function(req, res) {
//     // console.log(req.testVall);
//     // res.status(200);
//     res.send({
//         "status": 200,
//         "message": "Profile Image Registered",
//         "name": req.testVall
//     })
// });


// register student data
myapp.post('/student/register', studentController.emailCheck, studentController.passwordHash, studentController.userRegister, authController.jwtTokenGen,function(req, res) {
    // console.log('user register data route');
    // res.status(200);
    res.send({
        "status": 200,
        "message": "Student registered",
        "message": "Student data registered",
>>>>>>> 74fea9c671185b35d47205a8b2ab626ded6f7973
        "token": req.genToken
    })
});

// student login route
<<<<<<< HEAD
myapp.post('/student/login', authController.studentvalidator, authController.checkPasswordMatch, authController.jwtTokenGen, function(req, res) {
=======
myapp.post('/student/login', authController.validator,authController.checkPasswordMatch,authController.jwtTokenGen, function(req, res) {
    // res.status(200);
>>>>>>> 74fea9c671185b35d47205a8b2ab626ded6f7973
    res.send({
        "status": 200,
        "message": "student logged in",
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
  myapp.post('/teacher/register', teacherController.emailCheck, teacherController.passwordHash, teacherController.teacherRegister,authController.jwtTokenGen, function(req, res) {
    res.send({
        "status": 200,
        "message": "New Teacher Registered",
        "token": req.genToken
    })
});

<<<<<<< HEAD
//techer login
myapp.post('/teacher/login', authController.teachervalidator,authController.checkPasswordMatch,authController.jwtTokenGen, function(req, res) {
    res.send({
        "status": 200,
        "message": "Teacher logged in",
=======
// admin login route
myapp.post('/admin/login', authController.adminValidator, authController.checkPasswordMatch, authController.adminjwtTokenGen, function(req, res) {
    // res.status(200);
    res.send({
        "status": 200,
        "message": "Admin logged in",
>>>>>>> 74fea9c671185b35d47205a8b2ab626ded6f7973
        "token": req.genToken,
        "info": req.userInfo
    })
});

// teacher Update 
myapp.put('/teacher/update/:id', teacherController.teacherUpdate, function(req, res) {

    res.send({
        "status": 200,
        "message": "teacher data updated",
        "info": req.userInfoo
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


// get home page
myapp.get('/index', function(req, res) {
    res.render('pages/index');
})

// get courses
myapp.get('/courses', function(req, res) {
    res.render('pages/courses/courses');
})


// get admin
myapp.get('/admin', function(req, res) {
    res.render('admin/admin');
})

// get admindashboard
myapp.get('/admindashboard', function(req, res) {
    res.render('admin/admindashboard');
})


// get teachersignup
myapp.get('/teacher', function(req, res) {
    res.render('teacher/teacher');
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
<<<<<<< HEAD

=======
>>>>>>> 74fea9c671185b35d47205a8b2ab626ded6f7973
