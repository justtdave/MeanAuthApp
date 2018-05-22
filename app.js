const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

const config = require('./config/database');

mongoose.connect(config.database);

mongoose.connection.on('connected', () => {
    console.log('Connected to database '+config.database);
});

mongoose.connection.on('error', (err) => {
    console.log('Database Error: '+err);
});

const app = express();

const users = require('./routes/users');

// Port Number
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

// Cors MiddleWare
app.use(cors());

// Body Parser MiddleWare
app.use(bodyParser.json());

// Passport MiddleWare
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);

// Index Route
app.get('/', (req, res) => {
    res.send('Invalid Endpoint');
})

app.listen(port, () => {
    console.log('Server Started on Port '+port);
});