var expect = require('chai').expect;

var User = require('../models/User')

describe('user', function() {

    it('has a name, email, password', function(done) {

      var newUser = new User({
          name: 'my name',
          email: 'blah@blah.com',
          password: 'password123'
      });

      expect(newUser.name).to.equal('my name');
      expect(newUser.email).to.equal('blah@blah.com');
      expect(newUser.password).to.equal('password123');
      done();
    });
});
