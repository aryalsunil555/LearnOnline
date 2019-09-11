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
<<<<<<< HEAD

var mysequelize = require('./models/teacherModel.js');


=======
var mysequelize = require('./models/teacherModel.js');
>>>>>>> 0a778657dcdddbe580d102eca1bc883c67719066



// multer storage
var mystorage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'resources/images/profile')
    },
    filename: function(req, file, cb) {
        var name = 'asdasd' + (Math.floor(100000 + Math.random() * 900000)) + file.originalname;
        cb(null, name);
        // console.log(name);
        req.testVall = name;
    }
});
var upload = multer({ storage: mystorage });


// controllers require
var authController = require('./controllers/authController');
var studentController = require('./controllers/studentController');
var teacherController = require('./controllers/teacherController');
var adminController = require('./controllers/adminController');


// routes
//var adminRoutes = require('./routes/adminRoutes')(myapp);
//var userRoutes = require('./routes/userRoutes')(myapp);

//upload register profile photo
<<<<<<< HEAD

=======
>>>>>>> 0a778657dcdddbe580d102eca1bc883c67719066
myapp.post('/user/register/userPhoto', upload.single('UserPhoto'), function(req, res) {
    // console.log(req.testVall);
    // res.status(200);
    res.send({
        "status": 200,
        "message": "Profile Image Registered",
        "name": req.testVall
    })
});


<<<<<<< HEAD
// register student form data
//myapp.post('/student/register', userController.emailCheck, userController.passwordHash, userController.userRegister, authController.jwtTokenGen, function(req, res) {

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

myapp.post('/student/register', studentController.emailCheck, studentController.passwordHash, studentController.studentRegister, authController.jwtTokenGen,function(req, res) {
     res.send({
        "status": 200,
        "message": "Student registered",      
=======
// register student data
myapp.post('/student/register', studentController.emailCheck, studentController.passwordHash, studentController.userRegister, authController.jwtTokenGen,function(req, res) {
    // console.log('user register data route');
    // res.status(200);
    res.send({
        "status": 200,
        "message": "Student registered",
        "message": "Student data registered",
>>>>>>> 0a778657dcdddbe580d102eca1bc883c67719066
        "token": req.genToken
    })
});


// student login route
myapp.post('/student/login', authController.validator,authController.checkPasswordMatch,authController.jwtTokenGen, function(req, res) {
    res.send({
        "status": 200,
        "message": "Student logged in",
        "token": req.genToken,
        "info": req.userInfo
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

//techer login
myapp.post('/teacher/login', authController.validator,authController.checkPasswordMatch,authController.jwtTokenGen, function(req, res) {
    res.send({
        "status": 200,
        "message": "Teacher logged in",
        "token": req.genToken,
        "info": req.userInfo
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
  
    //res.status(200);
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



myapp.use(function(err, req, res, next) {
    // console.log(err.status);
    // console.log(err.message);
    console.log(err);
    res.status(err.status);
    res.send({
        "message": err.message
    })


})



// set port
<<<<<<< HEAD
=======
myapp.listen(3000);

>>>>>>> 0a778657dcdddbe580d102eca1bc883c67719066

myapp.listen(3000);

module.exports = myapp;

<<<<<<< HEAD

=======
>>>>>>> 0a778657dcdddbe580d102eca1bc883c67719066
