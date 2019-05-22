/**
 * Removes a task from the database, the entity used here is: res.locals.task
 * Redirects to /task/:userid after delete
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};