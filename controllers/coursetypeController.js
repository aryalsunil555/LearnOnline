var coursetypemodel = require('../models/coursetypeModel');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
var saltRounds = 10;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


function coursetypeRegister(req, res, next) {
    // console.log(req.body);
    coursetypemodel.create({
             
        coursetype_title: req.body.CoursetypeTitle
        })
        .then(function(result) {
       
            next();
        })
        .catch(function(err) {
            next({ "status": 500, "message": "DB Error" });
        })
}

//coursetype update
function coursetypeUpdate(req, res, next) {
    if (req.body.coursetype_id != '') {
        coursetypemodel.update({
            coursetype_title: req.body.CoursetypeTitle
          
            }, {
                where: { coursetype_id: req.params.coursetype_id }
            })
            .then(function(result) {
                next();
            })
            .catch(function(err) {
                next({ "status":500, "message": "DB Error in coursetype data" });
            })
        } else {
            next({ "status": 500, "message":"Invalid coursetype data" });
    
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









module.exports = {
    coursetypeRegister,
    coursetypeUpdate,
       token,
  

}