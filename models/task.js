const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Task = db.model('tasks', {
    _id: String,
    name: String,
    desc: String,
    priority: String,
    category: String,
    time: String
});

module.exports = Task;