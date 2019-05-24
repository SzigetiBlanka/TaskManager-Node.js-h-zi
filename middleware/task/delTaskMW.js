/**
 * Removes a task from the database, the entity used here is: res.locals.task
 * Redirects to /task/:userid after delete
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        if (typeof res.locals.task === 'undefined') {
            return next();
        }
        res.locals.task.remove(err => {
            if (err) {
                return next(err);
            }
        return res.redirect('/task/${res.locals.user._id}');
        });
    };
};