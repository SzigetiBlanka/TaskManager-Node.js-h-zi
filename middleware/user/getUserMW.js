/**
 * Load a user from the database using the :userid param
 * The result is saved to res.locals.user
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const UserModel = requireOption(objectrepository, 'UserModel');

    return function (req, res, next) {

        UserModel.findOne({ "id": Number(req.params.id) }, (err, user) => {
            if (err || !user) {
                return next(err);
            }

            res.locals.user = user;
            return next();
        });
    };
};