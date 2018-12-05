const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

//User Model

const Listing = require('../../models/Listing');

// @route  GET api/users
// @desc   Get all Users
// @access Public

router.get('/', (req, res) => {
    Listing.find()
        .sort({ date: -1 })
        .then(listings => res.json(listings));
});

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
// @access Public

router.delete('/:id', (req, res) => {
    Listing.findById(req.params.id)
        .then(user => user.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));

});


module.exports = router;
