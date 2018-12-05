const express = require('express');
const router = express.Router();
<<<<<<< HEAD
const bcrypt = require('bcryptjs');

//User Model

const Listing = require('../../models/Listing');

// @route  GET api/users
// @desc   Get all Users
=======

//Listing Model

const Listing = require('../../models/Listing');

// @route  GET api/listings
// @desc   Get all listings
>>>>>>> 19a1723ad44678ce68c54fa6962d10b0e4226cbf
// @access Public

router.get('/', (req, res) => {
    Listing.find()
        .sort({ date: -1 })
        .then(listings => res.json(listings));
});

<<<<<<< HEAD
// @route  POST api/users
// @desc   Create a user
// @access Public

router.post('/', (req, res) => {
    let newListing = new Listing({
        name: req.body.name
    });

});

// @route  DELETE api/users/:id
// @desc   Delete a user
=======
// @route  POST api/listings
// @desc   Create a listings
// @access Public

router.post('/', (req, res) => {
    let newListing = new Listings({
        title: req.body.title,
        description: req.body.description,
    });

    newListing.save().then(listing => res.json(listing));

});

// @route  DELETE api/listings/:id
// @desc   Delete a listings
>>>>>>> 19a1723ad44678ce68c54fa6962d10b0e4226cbf
// @access Public

router.delete('/:id', (req, res) => {
    Listing.findById(req.params.id)
<<<<<<< HEAD
        .then(user => user.remove().then(() => res.json({success: true})))
=======
        .then(listing => listing.remove().then(() => res.json({success: true})))
>>>>>>> 19a1723ad44678ce68c54fa6962d10b0e4226cbf
        .catch(err => res.status(404).json({success: false}));

});

<<<<<<< HEAD

=======
>>>>>>> 19a1723ad44678ce68c54fa6962d10b0e4226cbf
module.exports = router;
