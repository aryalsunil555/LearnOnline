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
myapp.set('views',__dirname+'/views');
myapp.set('view engine','ejs');


// sequelize
var mysequelize = require('./configs/dbconfigs.js');
var mysequelize = require('./models/userModel.js');




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
var userController = require('./controllers/userController');
var authController = require('./controllers/authController');


// routes
//var adminRoutes = require('./routes/adminRoutes')(myapp);
//var userRoutes = require('./routes/userRoutes')(myapp);




// register form data
myapp.post('/user/register/userFormData', userController.emailCheck, userController.passwordHash, userController.userRegister, authController.jwtTokenGen, function(req, res) {
    // console.log('user register data route');
    // res.status(200);
    res.send({
        "status": 200,
        "message": "user data registered",
        "token": req.genToken
    })
});







// user login route
myapp.post('/user/login', authController.validator, authController.checkPasswordMatch, authController.jwtTokenGen, function(req, res) {
    // res.status(200);
    res.send({
        "status": 200,
        "message": "User logged in",
        "token": req.genToken,
        "info": req.userInfo
    })
});

// admin login route 
myapp.post('/admin/login', authController.adminValidator, authController.checkPasswordMatch, authController.adminjwtTokenGen, function(req, res) {
    // res.status(200);
    res.send({
        "status": 200,
        "message": "Admin logged in",
        "token": req.genToken,
        "info": req.userInfo
    })
});


// verify user token
myapp.post('/token/verify', authController.tokenVerify, authController.tokenemailvalidator, function(req, res) {
    res.send({
        "status": 200,
        "message": "Token Verified",
        "info": req.userInfoo
    })
});

// verify admin token
myapp.post('/admin/token/verify', authController.tokenVerify, authController.admintokenemailvalidator, function(req, res) {
    res.send({
        "status": 200,
        "message": "Token Verified",
        "info": req.adminInfoo
    })
});

// get home page
myapp.get('/index', function(req,res){
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
myapp.listen(3000);


module.exports = myapp;

