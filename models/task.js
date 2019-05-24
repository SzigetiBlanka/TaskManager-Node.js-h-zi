const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Task = db.model('tasks', {
    id: Number,
    name: String,
    desc: String,
    priority: String,
    category: String,
    time: String,
    _owner: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
});

module.exports = Task;