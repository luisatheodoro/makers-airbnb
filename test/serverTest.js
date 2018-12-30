var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server');
var bcrypt = require('bcryptjs');
var should = chai.should();
var mongoose = require('mongoose');

chai.use(chaiHttp);

describe('Database', function() {

  beforeEach(function (done) {
    mongoose.connect("mongodb://admin:makers2018@ds113136.mlab.com:13136/makers_bnb", function(){
        mongoose.connection.db.dropDatabase(function(){
        done();
      })
    })
  });

  it('should list ALL users on /users GET', function(done) {
    chai.request(server)
      .get('/api/users')
      .end(function(err, res){
        res.should.have.status(200);
        done();
      });
  });

  it('/users form submission POST', function(done) {
    chai.request(server)
      .post('/api/users')
      .send({'name': 'chris', 'email': 'hello@gmail.com', 'password' : 'mybadpassword'})
      .end(function(err, res){
        res.should.be.json;
        res.should.have.status(200);
        done();
      });
  });

  it('should add a SINGLE User on /users POST', function(done) {
  chai.request(server)
    .post('/api/users')
    .send({'name': 'chris', 'email': 'chris@gmail.com', 'password' : 'mybadpassword'})
    .end(function(err, res){
      res.should.be.json;
      res.body.should.have.property('name');
      res.body.should.have.property('email');
      res.body.should.have.property('_id');
      res.body.should.have.property('password');
      res.body.name.should.equal('chris');
      res.body.email.should.equal('chris@gmail.com');
      salt = bcrypt.genSaltSync(10);
      hash = bcrypt.hashSync(res.body.password, salt);
      bcrypt.compare(res.body.password, hash, function(err, res) {
        res.should.be.true;
        done();
      });
    });
  });
});

describe('Listings', function() {

  it('should list ALL listings on /users GET', function(done) {
    chai.request(server)
      .get('/api/listings')
      .end(function(err, res){
        res.should.have.status(200);
        done();
      });
  });

  it('/listings form submission POST', function(done) {
    chai.request(server)
      .post('/api/listings/')
      .end(function(err, res){
        res.should.have.status(200);
        res.should.be.json;
        done();
      });
  });

  it('should add a SINGLE listing on /listings POST', function(done) {
  chai.request(server)
    .post('/api/listings')
    .send({'title': 'my place', 'description': 'a very big place'})
    .end(function(err, res){
      res.should.be.json;
      res.body.should.have.property('_id');
      res.body.should.have.property('title');
      res.body.should.have.property('description');
      res.body.title.should.equal('my place');
      res.body.description.should.equal('a very big place');
      done();
    });
  });
});
