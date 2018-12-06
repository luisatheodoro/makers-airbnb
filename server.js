const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const users = require('./routes/api/users');
const listings = require('./routes/api/listings');

const app = express();

//Bodyparser Middleware
app.use(bodyParser.json());

// DB Config
// const db = require('../makers_academy/JavaScript-Projects/Makers-Airbnb/config/keys').mongoURI;

//Connect to Mongo
mongoose.connect("mongodb://admin:makers2018@ds113136.mlab.com:13136/makers_bnb", { useNewUrlParser: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

//Use Routes
app.use('/api/listings', listings);
app.use('/api/users', users);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

module.exports = app;
