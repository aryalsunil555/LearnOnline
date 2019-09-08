const chai = require('chai');
const chaiHttp = require('chai-http');
const baseUrlRoutes = 'http://localhost:3000';

const should = chai.should();
chai.use(require('chai-like'));
chai.use(require('chai-things'));
chai.use(chaiHttp);

const myapp = require('../app.js');

let serverr

before(done => {
    serverr = myapp.listen(2000, done);
});

after(done => {
    serverr.close(done);
});



// Register student
describe('Users', function() {
    describe('POST user register', function() {

        it('it should register a single user', function(done) {
            chai.request(myapp)
                .post('/user/register/userFormData')
                .send({
                    "FirstName": 'Jeson',
                    "LastName": 'Rai',
                    "Gender": 'male',
                    "UserType": 'male',
                    "Address": 'Gokarneshwor',
                    "DOB": '2019-06-17',
                    "Email": 'rai.riiibin1000@gmail.com',
                    "Phone": '+977-9817849333',
                    "Password": 'asd'
                })
                .end(function(err, res) {
                    res.should.have.status(200);
                    res.body.should.be.an('object');
                    // res.body.should.have.property('message').eql('user data registered');
                    done();
                })
        })
    })
})

// login
describe('users', () => {
    describe('/POST login', () => {
        it('it should log in user', (done) => {
            // chai.request(baseUrlRoutes)
            chai.request(myapp)
                .post('/user/login')
                .send({
                    "email": 'rai.rai.ribin1000@gmail.com',
                    "password": 'asd',
                })
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });
});


// Register teacher
describe('Users', function() {
    describe('POST user register', function() {

        it('it should register a single user', function(done) {
            chai.request(myapp)
                .post('/admin/register/teacher')
                .send({
                    "FirstName": 'Jeson',
                    "LastName": 'Rai',
                    "Gender": 'male',
                    "UserType": 'male',
                    "Address": 'Gokarneshwor',
                    "DOB": '2019-06-17',
                    "Email": 'rai.riiibin1000@gmail.com',
                    "Phone": '+977-9817849333',
                    "Bio": 'Teacher for 4 years',
                    "Password": 'asd'
                })
                .end(function(err, res) {
                    res.should.have.status(200);
                    res.body.should.be.an('object');
                    // res.body.should.have.property('message').eql('user data registered');
                    done();
                })
        })
    })
})



// admin login
describe('admin login', () => {
    describe('/POST login', () => {
        it('it should log in admin', (done) => {
            // chai.request(baseUrlRoutes)
            chai.request(myapp)
                .post('/admin/login')
                .send({
                    "email": 'rai.ribin1000@gmail.com',
                    "password": 'asd',
                })
                .end((err, res) => {
                    res.should.have.status(200);
                    done();
                });
        });
    });
});