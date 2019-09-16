var teachermodel = require('../models/teacherModel');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
var saltRounds = 10;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


function teacherRegister(req, res, next) {
    // console.log(req.body);
    teachermodel.create({
         
        first_name:req.body.FirstName,
        last_name:req.body.LastName,
        dob:req.body.DOB,
        gender:req.body.Gender,
        phone:req.body.Phone,
        address:req.body.Address,
        email: req.body.Email,
        bio:req.body.Bio,
        password: req.hashValue
        })
        .then(function(result) {
            //console.log('data added');
            req.body.email = req.body.Email;
            next();
        })
        .catch(function(err) {
            next({ "status": 500, "message": "DB Error" });
        })
}

// teacher update
function teacherUpdate(req, res, next) {
    // console.log(req.body);
    if (req.body.id != '') {
        teachermodel.update({
                first_name: req.body.FirstName,
                last_name: req.body.LastName,
                address: req.body.Address,
                dob: req.body.DOB,
                phone: req.body.Phone,
                gender:req.body.Gender,
                bio:req.body.Bio,
                email:req.body.Email
            }, {
                where: { id: req.params.id }
            })
            .then(function(result) {
                // console.log('data added');
                next();
            })
            .catch(function(err) {
                next({ "status": 500, "message": "DB Error" });
            })
    } else {
        next({ "status": 500, "message": "Invalid Teacher" });
    }
}


// token
function token(req, res, next) {
    jwt.sign({ username: req.body.username, accesslevel: 'superadmin' }, 'thisissecretkey', { expiresIn: '10h' },
        function(err, token) {
            // console.log(token);
            if (err != null || undefined) {
                console.log(err);
                res.send({ "status": "401", "message": "unauthorized" });
            } else {
                req.genToken = token;
                // res.status(200);
                // res.json(token);
                next();
                console.log(token);
            }
        });
}

// email Check
function emailCheck(req, res, next) {
    // var photo = req.body.Photo;
    teachermodel.findOne({
            where: { email: req.body.Email }
        })
        .then(function(result) {
            if (result.dataValues != '') {
                var fs = require('fs');
                // fs.unlinkSync('./resources/images/profile/' + photo);
                next({
                    "status": 409,
                    "message": "Email already exists"
                });
            }
        })
        .catch(function(result) {
            next();
        })
}




// has password
function passwordHash(req, res, next) {
    // req.body.Password
    bcrypt.hash(req.body.Password, saltRounds)
        .then(function(hash) {
            req.hashValue = hash;
            // console.log(req.hashValue);
            next();
        })
        .catch(function(err) {
            console.log(err);
        })

}



module.exports = {
    teacherRegister,
    teacherUpdate,
    token,
    emailCheck,
    passwordHash,

}
