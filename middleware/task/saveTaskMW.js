/**
 * Using POST params update or save a task to the database
 * If res.locals.task is there, it's an update otherwise this middleware creates an entity
 * Redirects to /task/:userid after success
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        if ((typeof req.body.name === 'undefined') ||
            (typeof req.body.priority === 'undefined') ||
            (typeof req.body.category === 'undefined')||
            (typeof req.body.time === 'undefined')) {
            return next();
        }

        // TODO: update item, save to db, or create new item
        return res.redirect('/user');
    };
};