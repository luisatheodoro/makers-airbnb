const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

//User Model

const User = require('../../models/User');

// @route  GET api/users
// @desc   Get all Users
// @access Public

router.get('/', (req, res) => {
    User.find()
        .sort({ date: -1 })
        .then(users => res.json(users));
});

// @route  POST api/users
// @desc   Create a user
// @access Public

router.post('/', (req, res) => {
    var newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });

    newUser.save(function(err) {
        if (err) throw err;

        // attempt to authenticate user
        User.getAuthenticated(req.body.email, req.body.password, function(err, email, reason) {
            if (err) throw err;

            // login was successful if we have a user
            if (email) {
                // handle login success
                console.log('login success');
                return;
            }

            // otherwise we can determine why we failed
            var reasons = User.failedLogin;
            switch (reason) {
                case reasons.NOT_FOUND:
                case reasons.PASSWORD_INCORRECT:
                    // note: these cases are usually treated the same - don't tell
                    // the user *why* the login failed, only that it did
                    break;
                case reasons.MAX_ATTEMPTS:
                    // send email or otherwise notify user that account is
                    // temporarily locked
                    break;
            }
        });
    });


});

// @route  DELETE api/users/:id
// @desc   Delete a user
// @access Public

router.delete('/:id', (req, res) => {
    User.findById(req.params.id)
        .then(user => user.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));

});


module.exports = router;
