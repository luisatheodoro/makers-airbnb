const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create our Schema
const ListingSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    price: {
        type: String,
        require: true
    },

});

//So we can export this model and use it in another files
module.exports = Listing = mongoose.model('listing', ListingSchema);
