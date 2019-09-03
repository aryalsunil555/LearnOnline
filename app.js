require('./configs/dbconfigs');

var express = require('express');
var myapp = new express();
var bodyParser = require('body-parser');
var path = require('path');
var multer = require('multer');
var path = require('path');
var Auth = require('./middleware/auth');
const middleware = require('./middleware/middleware');

const User = require('./models/users');

// bodyParser
myapp.use(bodyParser.json());
myapp.use(bodyParser.urlencoded({ extended: true }));

// path
myapp.use(express.static(
    path.join(__dirname, '/resources')
));

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


//registration
myapp.post('/register',(req,res) => {
    var userData = new User(req.body);
    var response = "";
    console.log("REQUEST-->" + userData);
    userData.save().then(function () {
        response = "Registered Successfully!";
        console.log(response);
        res.send(response);

    }).catch(function (e) {
        response = "Error";
        console.log(e)
        res.send(e);
    })
    })

    //LOGIN
    myapp.post('/login',async function (req, res) {
        var inputEmail = req.body.email;
        var inputPassword = req.body.password;

        const user = await User.checkCredentialsDb(inputEmail, inputPassword);
        console.log(user);
        const token = await user.generateAuthToken();
        res.send({ token });
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