var coursemodel = require('../models/courseModel');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
var saltRounds = 10;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


function courseRegister(req, res, next) {
    // console.log(req.body);
    coursemodel.create({

        title: req.body.Title,
        description: req.body.Description,
        credit: req.body.Credit,
        fee: req.body.Fee,
        course_image: req.body.CourseImage,
        start_date: req.body.StartDate,
        end_date: req.body.EndDate,
        teacher_id:req.body.TeacherID

        })
        .then(function(result) {

            next();
        })
        .catch(function(err) {
            next({ "status": 500, "message": "DB Error" });
        })
}

//delete course
function deleteCourse(req, res, next){
	coursemodel.destroy({
            where: {
                id: req.params.id
            },
            raw: true
        })
        .then(function(result) {
            next();
        })
        .catch(function(err) {
            next({ "status": 500, "message": "course DB Error" });
        })
}

//search Courses
function searchCourse(req, res, next){
	var search = req.body.search
//console.log(search)
    coursemodel.findAll({
            where: {
                title: {
                    [Op.like]: '%' + search + '%'
                }
            },
            raw: true
        })
        .then(function(result) {
            // console.log(result[1].dataValues);
            req.User = result;
            // console.log(req.allUser);
            next();
            // console.log(result);
        })
        .catch(function(err) {
            next({ "status": 500, "message": "DB Error" });
        })
}

//course update
function courseUpdate(req, res, next) {
if (req.body.id != '') {
    coursemodel.update({
        title: req.body.Title,
        description: req.body.Description,
        credit: req.body.Credit,
        fee: req.body.Fee,
        start_date: req.body.StartDate,
        end_date: req.body.EndDate,
        teacher_id:req.body.TeacherID

        }, {
            where: { id: req.params.id }
        })
        .then(function(result) {
            next();
        })
        .catch(function(err) {
            next({ "status":500, "message": "DB Error" });
        })
    } else {
        next({ "status": 500, "message":"Invalid course data" });

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
    courseRegister,
    deleteCourse,
    courseUpdate,
    searchCourse,
       token,


}
