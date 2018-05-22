const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../models/database');

const UserSchema = mongoose.Schema({
    name: {
        type: string
    },
    email: {
        type: string,
        required: true
    },
    username: {
        type: string,
        required: true
    },
    password: {
        type: string,
        required: true
    }
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function(id, callback){
    User.findById(id, callback);
}

module.exports.getUserByUsername = function(username, callback){
    const query = {username: username}
    User.findOne(query, callback);
}