var expect = require('chai').expect;

var User = require('../models/User')

describe('user', function() {

    it('has a name, email, password', function(done) {

      var newUser = new User({
          name: 'chris',
          email: 'myemail@email.com',
          password: 'password123'
      });

      expect(newUser.name).to.equal('chris');
      expect(newUser.email).to.equal('myemail@email.com');
      expect(newUser.password).to.equal('password123');
      done();
    });
});
