const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create our Schema
const UserSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }

});

//So we can export this model and use it in another files
module.exports = User = mongoose.model('user', UserSchema);
