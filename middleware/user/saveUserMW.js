/**
 * Using POST params update or save a user to the database
 * If res.locals.user is there, it's an update otherwise this middleware creates an entity
 * Redirects to /user after success
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        if ((typeof req.body.name === 'undefined') ||
            (typeof req.body.sex === 'undefined') ||
            (typeof req.body.admin === 'undefined')
        ){
            return next();
        }

        // TODO: update item, save to db, or create new item
        return res.redirect('/task/' + res.locals.user._id);
    };
};