/**
 * Check the password (from POST), if it's the right one, create a session for the user and redirect to /user
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        if (typeof req.body.password === 'undefined') {
            return next();
        }

        if (req.body.password === 'nodejs') {
            // TODO: create new session
            return res.redirect('/user');
        }

        res.locals.error = 'Hibás jelszó!';
        return next();
    };
};