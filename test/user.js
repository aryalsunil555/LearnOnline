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



// Register
describe('Users', function() {
    describe('POST user register', function() {

        it('it should register a single user', function(done) {
            chai.request(myapp)
                .post('/user/register/userFormData')
                .send({
                    "FirstName": 'Jeson',
                    "MiddleName": '',
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