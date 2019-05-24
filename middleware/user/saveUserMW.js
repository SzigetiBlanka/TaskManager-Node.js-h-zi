/**
 * Using POST params update or save a user to the database
 * If res.locals.user is there, it's an update otherwise this middleware creates an entity
 * Redirects to /user after success
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const UserModel = requireOption(objectrepository, 'UserModel');

    return function (req, res, next) {
        if ((typeof req.body.name === 'undefined') ||
            (typeof req.body.sex === 'undefined') ||
            (typeof req.body.admin === 'undefined')
        ){
            return next();
        }

        if (typeof res.locals.user === 'undefined') {
            res.locals.user = new UserModel();
        }

        /*res.locals.user.name = req.body.name;
        res.locals.user.sex = req.body.sex;
        res.locals.user.admin = req.body.admin;*/
        res.locals.user.name = "Timi";
        res.locals.user.sex = "female";
        res.locals.user.admin = "no";
        res.locals.user.id="456";

        res.locals.user.save(err => {
            if (err) {
                return next(err);
            }

            return res.redirect('/users');
        });




    };
};