var studentmodel = require('../models/studentModel');
var adminmodel = require('../models/adminModel');
var teachermodel = require('../models/teacherModel');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

// Student Teacher Email Check
function StudentTeacherEmailCheck(req, res, next){
    studentmodel.findOne({
        where: {
            email: req.body.Email
        }
    })
    .then(function(result) {
        req.userHashPassword = result.dataValues.password;
        req.userInfo = result.dataValues;
        req.usertype = "student";
        // console.log('student');
        next();
    })
    .catch(function(err) {
        teachermodel.findOne({
            where: {
                email: req.body.Email
            }
        })
        .then(function(result) {
            req.userHashPassword = result.dataValues.password;
            req.userInfo = result.dataValues;
            req.usertype = "teacher";
            // console.log('teacher');
            next();
    })
    .catch(function(err) {

        next({
            "status": 400,
            "message": "Please register   first to login"
        })
    })
     })
}      



    
      
    

// Student Email check
function studentvalidator(req, res, next) {
    studentmodel.findOne({
            where: {
                email: req.body.Email
            }
        })
        
        // use had already registered
        .then(function(result) {
            // store the user's hash password obtained from database in a variable and pass it through req object
            req.userHashPassword = result.dataValues.password;
            req.userInfo = result.dataValues;
            // console.log(req.userInfo);
            next();
        })
        // err denotes the user was not found - > user was not registerd 
        .catch(function(err) {

            next({
                "status": 400,
                "message": "Please register student data first to login"
            })

        })
}

// match hash passwod
function teachervalidator(req, res, next) {
    teachermodel.findOne({
            where: {
                email: req.body.Email
            }
        })
        // use had already registered
        .then(function(result) {
            // store the teacher'shash password obtained from database in a variable and pass it through req object
            req.userHashPassword = result.dataValues.password;
            req.userInfo = result.dataValues;
            // console.log(req.userInfo);
            next();
        })
        // err denotes the user was not found - > user was not registerd 
        .catch(function(err) {

            next({
                "status": 400,
                "message": "Please register teacher data first to login"
            })

        })
}


// check admin email for validation
function adminValidator(req, res, next) {
    // console.log(req.body.Email);
    adminmodel.findOne({
            where: {
                email: req.body.Email
            }
        })
        // use had already registered
        .then(function(result) {
            // store the user's hash password obtained from database in a variable and pass it through req object
            req.userHashPassword = result.dataValues.password;
            req.userInfo = result.dataValues;
            // console.log(req.userInfo);
            next();
        })
        // err denotes the user was not found - > user was not registerd 
        .catch(function(err) {

            next({
                "status": 400,
                "message": "Unauthorized Access"
            })

        })
}


// check user token email
function tokenemailvalidator(req, res, next) {

    studentmodel.findOne({

            where: {
                email: req.email
            }
        })
        // use had already registered
        .then(function(result) {
            // store the user's hash password obtained from database in a variable and pass it through req object
            // req.userHashPassword = result.dataValues.password;
            req.userInfoo = result.dataValues;
            // console.log(req.userInfo);
            next();
        })
        // err denotes the user was not found - > user was not registerd 
        .catch(function(err) {

            next({
                "status": 400,
                "message": "Invalid user token"
            })

        })
}

// check admin token email
function admintokenemailvalidator(req, res, next) {

    adminmodel.findOne({

            where: {
                email: req.email
            }
        })
        // use had already registered
        .then(function(result) {
            // store the user's hash password obtained from database in a variable and pass it through req object
            // req.userHashPassword = result.dataValues.password;
            req.adminInfoo = result.dataValues;
            // console.log(req.userInfo);
            next();
        })
        // err denotes the user was not found - > user was not registerd 
        .catch(function(err) {

            next({
                "status": 400,
                "message": "Invalid user token"
            })

        })
}


function checkPasswordMatch(req, res, next) {
    // comapre's first parameter password obtained from login form i.e. req.body.password
    // second parameter the value passed from previous function (from database) through req object
    bcrypt.compare(req.body.Password, req.userHashPassword, function(err, res) {
        // res == true
        // console.log(res);
        if (res == true) {
            next();
        } else if (res == false) {
            next({
                "status": 400,
                "message": "Password does not match"
            });
        }
    });
}



function jwtTokenGen(req, res, next) {

    jwt.sign({
            email: req.body.email,
            accessLevel: 'superuser'
        }, 'thisissecretkey', {
            expiresIn: "10h"
        },

        function(err, token) {
            if (err != null || undefined) {
                console.log(err)
                next({
                    "status": 401,
                    "message": "Unauthorized token"
                })
            } else {
                req.genToken = token;
                next();
                // console.log(token)   
            }

        }
    );

}

function adminjwtTokenGen(req, res, next) {
    jwt.sign({
            email: req.body.Email,
            accessLevel: 'superadmin'
        }, 'thisissecretkey', {
            expiresIn: "10h"
        },

        function(err, token) {
            if (err != null || undefined) {
                console.log(err)
                next({
                    "status": 401,
                    "message": "Unauthorized token"
                })
            } else {
                req.genToken = token;
                next();
                // console.log(token)   
            }
        }
    );
}


// verify token
function tokenVerify(req, res, next) {
    //console.log(req.headers);
    if (req.headers.authorization == undefined) {
        next({ status: 500, message: 'no authorization header present' })
    } else {
        let token = req.headers.authorization.slice(7, req.headers.authorization.length);
        // let token = req.headers.authorization;

        jwt.verify(token, 'thisissecretkey', function(err, decoded) {
            if (err != null) {
                next({ status: 500, message: err.message })
                // console.log(err);
            } else {
                req.email = decoded.email;
                req.accessLevel = decoded.accessLevel;
                next();
            }
        });
    }
}





module.exports = {
    studentvalidator,
    teachervalidator,
    checkPasswordMatch,
    tokenemailvalidator,
    jwtTokenGen,
    tokenVerify,
    adminValidator,
    adminjwtTokenGen,
    admintokenemailvalidator,
    StudentTeacherEmailCheck
}