const Schema = require('mongoose').Schema;
const db = require('../config/db');

const User = db.model('users', {
    id: Number,
    name: String,
    sex: String,
    admin: String
});

module.exports = User;