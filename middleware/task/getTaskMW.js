
/**
 * Load a task from the database using the :userid param
 * The result is saved to res.locals.user_tasks
 */
const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        res.locals.task = {
            _id: 'task01',
            name: 'Football',
            desc:'egy egy remek leiras',
            priority: 'high',
            category: 'sport',
            time :'2h'
        };
        return next();
    };
};