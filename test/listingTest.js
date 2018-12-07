var expect = require('chai').expect;

var Listing = require('../models/Listing')

describe('listing', function() {

    it('has a title, description, price', function(done) {

      var newListing = new Listing({
          title: 'my place',
          description: 'this is a reallllly cool place',
          price: '5'
      });

      expect(newListing.title).to.equal('my place');
      expect(newListing.description).to.equal('this is a reallllly cool place');
      expect(newListing.price).to.equal('5');
      done();
    });
});
