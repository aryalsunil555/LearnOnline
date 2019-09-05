var express = require('express');
var myapp = new express();
var bodyParser = require('body-parser');
var path = require('path');
var multer = require('multer');
var path = require('path');


// bodyParser
myapp.use(bodyParser.json());
myapp.use(bodyParser.urlencoded({ extended: true }));

// path
myapp.use(express.static(
    path.join(__dirname, '/resources')
));

// ejs
myapp.set('views', __dirname+'/views');
myapp.set('view engine', 'ejs');

// sequelize
var mysequelize = require('./configs/dbconfigs.js');
var mysequelize = require('./models/userModel.js');
var mysequelize = require('./models/teacherModel.js');

// multer storage
var mystorage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'resources/images')
    },
    filename: function(req, file, cb) {
        var name = 'asdasd' + (Math.floor(100000 + Math.random() * 900000)) + file.originalname;
        cb(null, name);
        req.testVall = name;
    }
});
var upload = multer({ storage: mystorage });



// get home page
myapp.get('/home', function(req,res){
	res.render('home');
})

// get user login page
myapp.get('/login', function(req,res){
	res.render('login');
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