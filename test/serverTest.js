var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server');
var bcrypt = require('bcryptjs');
var should = chai.should();

chai.use(chaiHttp);

describe('Users', function() {
  it('should list ALL users on /users GET', function(done) {
    chai.request(server)
      .get('/api/users')
      .end(function(err, res){
        res.should.have.status(200);
        done();
      });
  });

  it('/users POST', function(done) {
    chai.request(server)
      .post('/api/users')
      .end(function(err, res){
        res.should.have.status(200);
        done();
      });
  });

  it('should add a SINGLE User on /users POST', function(done) {
  chai.request(server)
    .post('/api/users')
    .send({'name': 'chris', 'email': 'chris@gmail.com', 'password' : 'mybadpassword'})
    .end(function(err, res){
      res.should.have.status(200);
      res.should.be.json;
      res.body.should.have.property('name');
      res.body.should.have.property('email');
      res.body.should.have.property('_id');
      res.body.should.have.property('password');
      done();
    });
  });
});
