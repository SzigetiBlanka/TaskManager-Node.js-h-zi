/**
 * Load all user from the database
 * The result is saved to res.locals.users
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        res.locals.users = [{
            _id: 'user01',
            name: 'Elek',
            sex: 'Male',
            admin: 'no'
        },{
            _id: 'user02',
            name: 'Béla',
            sex: 'Male',
            admin: 'yes'
        }];
        return next();
    };
};